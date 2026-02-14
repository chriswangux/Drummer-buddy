# Drummer Buddy -- Development Process Document

## 1. Project Overview

**Drummer Buddy** is a browser-based drum practice companion built as a single-page application. It provides a DAW-style step sequencer grid, an overhead SVG drum kit visualization, a transport bar, and a library of 290 pre-built drum patterns spanning rock, funk, jazz, latin, metal, world, fills, and rudiments. All sounds are synthesized in real time using Tone.js -- no sample files are loaded.

### Live URL

**<https://chriswangux.github.io/Drummer-buddy/>**

### GitHub Repository

**<https://github.com/chriswangux/Drummer-buddy>**

### Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.2 |
| Language | TypeScript | 5.9 |
| Build | Vite | 7.3 |
| Styling | Tailwind CSS (v4, Vite plugin) | 4.1 |
| Audio | Tone.js | 15.1 |
| State | Zustand | 5.0 |
| Deployment | GitHub Pages (`/Drummer-buddy/` base path) | -- |

### Final Codebase Size

- **67 source files** (`.ts` and `.tsx`)
- **10,218 lines** of TypeScript/TSX total
- **7,020 lines** of pattern data alone (across 20 data files)
- **290 drum patterns** in the library

---

## 2. Development Timeline & Phases

### Phase 1 -- Initial Scaffolding

Bootstrapped the project with `create-vite` (React + TypeScript template). Installed core dependencies: `tone`, `zustand`. Added the Tailwind CSS v4 Vite plugin. Created the foundational type system in `src/types/index.ts`:

- `DrumPieceId` union (10 pieces: kick, snare, hihat-closed, hihat-open, ride, crash, china, tom-high, tom-mid, tom-floor)
- `DrumPattern` interface with tracks stored as `Partial<Record<DrumPieceId, number[]>>` where each number is a velocity (0--1)
- `PatternLibraryEntry` wrapping a pattern with tags and difficulty rating
- `PatternCategory` union for the eight genre categories
- Transport, metronome, and loop region types

Set up constants files:
- `src/constants/audio.ts` -- BPM range (30--300), default 120, schedule interval `16n`
- `src/constants/drumKit.ts` -- 10-piece kit with colors, labels, short labels, and default enabled/disabled state
- `src/constants/grid.ts` -- Cell dimensions, colors, playhead styling, velocity opacity range

### Phase 2 -- Audio Engine

Built the synthesis layer entirely on Tone.js synthesizers (no WAV/MP3 samples):

**`src/audio/DrumSampler.ts`** -- The core sound generator. Creates three voice types:
- `createMembraneVoice()` -- Uses `Tone.MembraneSynth` for kick, toms. Configurable pitch, decay, attack, oscillator type, pitch decay ("punch"), and octaves.
- `createSnareVoice()` -- Layers a `MembraneSynth` (body) with a `NoiseSynth` (snare wire). Both triggered together at different velocity scales.
- `createMetalVoice()` -- Uses `Tone.MetalSynth` for hi-hats, ride, crash, china. Parameters: frequency ("brightness"), decay, harmonicity ("tone"), modulationIndex ("sizzle"), resonance. Includes a `velocityScale` parameter per voice to tame cymbal volumes.

**`src/audio/MetronomeEngine.ts`** -- Two sine-wave `Tone.Synth` instances (high click C6 for downbeats, low click G5 for other beats). Fires on beat boundaries only, respecting time signature.

**`src/audio/TransportController.ts`** -- Wraps `Tone.getTransport()`. Uses `scheduleRepeat` at 16th-note intervals. Converts Tone.js bar:beat:sixteenths position strings to linear step indices. Manages a `requestAnimationFrame` loop for smooth playhead animation separate from the audio-rate step callback.

**`src/audio/AudioEngine.ts`** -- Facade class composing DrumSampler + MetronomeEngine + TransportController. Exposes high-level methods: `play()`, `pause()`, `stop()`, `setBpm()`, `setLoop()`, `schedulePattern()`, `updatePieceSound()`, `applySoundPreset()`.

### Phase 3 -- State Management

Four Zustand stores (later expanded to five with useSoundStore):

**`src/stores/useTransportStore.ts`** -- Playback state (`stopped | playing | paused`), BPM, current step, current position (float for smooth playhead), loop enabled flag, loop region.

**`src/stores/usePatternStore.ts`** -- Current pattern, pattern library array, selected category, selected tag (for subcategory filtering), search query. Actions for `toggleCell` (click-to-edit) and `setCellVelocity`.

**`src/stores/useDrumKitStore.ts`** -- Kit configuration (which pieces are enabled), active pieces set (currently sounding, for visual feedback), initialization flag.

**`src/stores/useMetronomeStore.ts`** -- Enabled state, volume, current beat index.

Custom hooks bridge stores to the audio engine:
- `src/hooks/useTransport.ts` -- Orchestrates play/pause/stop by wiring store updates to AudioEngine calls. Handles scheduling, loop configuration, and active-piece visual feedback with an 80ms clear timer.
- `src/hooks/useAudioEngine.ts` -- Module-level singleton pattern (`let engine: AudioEngine | null = null`) with `getAudioEngine()` factory function. The `useAudioEngine` hook wraps initialization with the drum kit store's `setInitialized` flag.
- `src/hooks/useMetronome.ts` -- Connects metronome store toggle/volume to audio engine.

### Phase 4 -- Pattern Library Data (Initial 50 Patterns)

Created the first wave of patterns across seven categories in individual files under `src/data/patterns/`:

- `rock.ts` -- Basic 8th-note rock, driving rock, shuffle, half-time, etc.
- `funk.ts` -- Syncopated grooves, ghost notes, linear funk
- `jazz.ts` -- Swing ride, bossa nova comping, brush patterns
- `latin.ts` -- Samba, bossa nova, songo, cha-cha, tumbao
- `fills.ts` -- Single-stroke fills, tom cascades, snare rolls
- `rudiments.ts` -- Paradiddles, flams, drags, ratamacues
- `metal/basics.ts` -- Thrash beats, gallop patterns

Each pattern is a `PatternLibraryEntry` containing a `DrumPattern` with velocity arrays. Every track array must have exactly `subdivisions * measures` elements (typically 16 or 32 entries for 1--2 measure patterns in 16th-note resolution).

A barrel `src/data/patterns/index.ts` re-exports all categories as a single `allPatterns` array.

### Phase 5 -- Grid Canvas

**`src/components/Grid/GridRenderer.ts`** -- A 287-line class performing all Canvas 2D drawing:
- `drawGrid()` -- Background, alternating row colors, vertical subdivision/beat/measure lines, header with beat numbers, fixed row labels with color dots
- `drawNotes()` -- Velocity-mapped opacity, rounded rectangles, highlight on current step
- `drawPlayhead()` -- Red line with glow (`shadowBlur`), triangle marker in header
- `drawLoopSelection()` -- Semi-transparent blue overlay with dashed borders
- `drawHoverHighlight()` -- Outlined rectangle on mouseover cell

**`src/components/Grid/GridCanvas.tsx`** -- React component managing two layers of rendering:
1. A `ResizeObserver`-driven sizing effect that creates the `GridRenderer` on a device-pixel-ratio-scaled canvas
2. A draw-loop effect that re-renders every frame based on pattern data, scroll position, playhead position, hover state, and loop selection

Features: horizontal scroll (wheel events), auto-scroll to follow playhead during playback, crosshair cursor.

**`src/hooks/useGridInteraction.ts`** -- Mouse interaction handler. Maps pixel coordinates to grid cells using `src/utils/gridMath.ts`. Supports:
- Click on grid cell to toggle note on/off
- Click on header to seek to position
- Drag on header to create loop selection region
- Hover highlighting

### Phase 6 -- Transport Controls

**`src/components/Transport/TransportControls.tsx`** -- Horizontal toolbar containing:
- Stop, Play/Pause, Loop toggle (inline SVG icons, color state)
- `BpmControl` -- Text display + range slider (30--300 BPM)
- `TapTempo` -- Records last 4 tap timestamps, computes average interval, sets BPM
- `MetronomeToggle` + `BeatIndicator` -- Enable/disable click, visual beat dots
- `TimeDisplay` -- Shows current bar:beat:sixteenth position

### Phase 7 -- SVG Drum Kit Visualization

**`src/components/DrumKit/DrumKitSVG.tsx`** -- Overhead/top-down view of the full kit in an 800x280 SVG viewBox. Includes cymbal stand lines and kick pedal line for visual grounding.

**`src/components/DrumKit/drumPaths.ts`** -- Position and dimension data for each of the 10 pieces (ellipse cx, cy, rx, ry).

**`src/components/DrumKit/DrumPiece.tsx`** -- Individual piece renderer with:
- Drop shadow ellipse for depth
- Main ellipse that fills with the piece's color when active (`isActive`)
- SVG `filter` glow effect on active pieces
- Inner ring detail for drums, center dot + cross line for cymbals
- CSS transitions for smooth visual feedback (50ms fill, 150ms opacity)

**`src/components/DrumKit/DrumKitConfig.tsx`** -- Toggle panel to enable/disable individual pieces in the kit.

### Phase 8 -- Pattern Library UI

**`src/components/PatternLibrary/PatternBrowser.tsx`** -- Right sidebar (fixed 288px width). Contains:
- Pattern count display
- Search input (filters by name, category, and tags)
- Category filter chips
- Scrollable list of PatternCard components

**`src/components/PatternLibrary/CategoryFilter.tsx`** -- Horizontal pill buttons for the 8 categories (rock, funk, jazz, latin, metal, world, fills, rudiments) plus "All".

**`src/components/PatternLibrary/PatternCard.tsx`** -- Compact card showing pattern name, difficulty dots, suggested BPM, time signature, and tags. Highlights the active pattern.

### Phase 9 -- Polish

**`src/hooks/useKeyboardShortcuts.ts`** -- Global keyboard handler (skips when focused on input elements):

| Key | Action |
|---|---|
| Space | Play / Pause |
| Escape / Enter | Stop |
| Arrow Right | Step forward |
| Arrow Left | Step backward |
| M | Toggle metronome |
| L | Toggle loop |
| + / = | BPM +5 |
| - | BPM -5 |

**Web Audio initialization** -- The app boots to a splash screen ("Click to Start") that calls `Tone.start()` on user interaction, satisfying the browser autoplay policy. The `AppLayout` component gates the entire UI behind `isInitialized`.

**App layout** -- `src/components/AppLayout.tsx` composes the full screen: DrumKitSVG at top, TransportControls bar, then a flex row of GridCanvas (expanding) + PatternBrowser (fixed sidebar). Sound and Kit Setup toggle buttons are absolutely positioned over the drum kit area.

---

### Expansion 1 -- Pattern Library to 139 Patterns (Parallel Agents)

The pattern library was massively expanded from approximately 50 to 139 patterns using **4 parallel coding agents**, each assigned to different category files simultaneously. This was possible because:

1. Each category lives in its own file (`rock.ts`, `funk.ts`, `jazz.ts`, etc.)
2. The barrel `index.ts` simply spreads all arrays together
3. No two agents needed to edit the same file

All seven original categories were deepened with additional patterns covering more stylistic variations, difficulty levels, and time signatures.

### Expansion 2 -- World Category (16 New Patterns)

Added `src/data/patterns/world.ts` as an eighth top-level category with 16 patterns spanning global styles:
- Reggae one-drop, ska, hip-hop boom-bap, trap hi-hats, house four-on-the-floor, techno, drum & bass breakbeats, Afrobeat, second-line New Orleans, go-go, cumbia, dancehall, UK garage, breakbeat, and more.

The `PatternCategory` union type was extended to include `'world'`.

### Feature: Sound Tuning

Added per-piece synthesizer parameter control, allowing players to shape the tone of every drum piece in real time.

**New types** in `src/types/index.ts`:
- `MembraneParams` -- pitch, decay, attack, tone (oscillator type), punch (pitchDecay), octaves, volume
- `MetalSynthParams` -- brightness (frequency), decay, tone (harmonicity), sizzle (modulationIndex), resonance, volume
- `NoiseParams` -- type (white/pink/brown), decay, volume
- `PieceSoundParams`, `KitSoundParams`, `TonePreset`

**New store**: `src/stores/useSoundStore.ts` -- Manages current per-piece parameters, active preset, preset list. Custom presets persist to `localStorage`. The store calls `engine.updatePieceSound()` and `engine.applySoundPreset()` in real time.

**7 built-in presets** defined in `src/constants/soundDefaults.ts`:
1. **Default** -- Balanced general-purpose kit
2. **Metal** -- Tight, snappy kick/snare, reduced cymbal volume, higher cymbal brightness
3. **Jazz** -- Softer attack, longer sustain, warmer tones, pink noise snare wire
4. **808** -- Deep sub-bass kick (C0, long decay, 8 octaves), tight electronic snare, bright digital hi-hats
5. **Punk** -- Punchy, aggressive, triangle-wave oscillators for bite
6. **Heavy** -- Low-tuned toms, warm ride/crash, muted cymbals
7. **Lo-Fi** -- Reduced dynamic range, softer everything, muted cymbals

**UI**: `src/components/SoundTuning/SoundTuningPanel.tsx` -- Overlay panel with preset dropdown, save/delete custom presets, piece tab selector, and parameter sliders (`MembraneParamsEditor`, `MetalParamsEditor`, `ParamSlider`).

### Feature: Metal/Metalcore Expansion

Massively expanded the metal category from a single `metal.ts` file to a directory (`src/data/patterns/metal/`) containing 13 sub-files:

| File | Patterns | Description |
|---|---|---|
| `basics.ts` | 16 | Core metal grooves, thrash beats, gallops |
| `blasts.ts` | 12 | Blast beats (traditional, hammer, gravity, hyper) |
| `double-bass.ts` | 10 | Double bass kick patterns at various speeds |
| `breakdowns.ts` | 12 | Metalcore/deathcore breakdowns, chugs |
| `djent.ts` | 10 | Polymetric, syncopated djent patterns |
| `grooves.ts` | 10 | Heavy groove metal, Pantera/Lamb of God style |
| `progressive.ts` | 10 | Odd time signatures (7/8, 5/4, 11/8), prog metal |
| `style-bfw.ts` | 15 | Patterns inspired by Bullet For My Whiskers songs |
| `style-artists.ts` | 10 | Patterns inspired by notable metal drummers |
| `fills-transitions.ts` | 8 | Metal fills, section transitions |
| `double-bass-practice-1.ts` | 18 | DB fundamentals practice set |
| `double-bass-practice-2.ts` | 18 | DB coordination practice set |
| `double-bass-practice-3.ts` | 18 | DB advanced techniques practice set |
| `index.ts` | -- | Barrel re-export |

**Subcategory filter UI**: `src/components/PatternLibrary/SubcategoryFilter.tsx` -- Appears only when the "metal" category is selected. Provides pill buttons for: All, Blasts, Double Bass, DB Practice, Breakdowns, Djent, Groove, Progressive, BFW, Artists, Fills. Filters by matching tags on patterns.

### Feature: Double Bass Practice

54 dedicated double-bass practice patterns organized into three progressive training sets:

**Set 1 -- Fundamentals** (18 patterns): Quarter-note kicks, 8th-note doubles, basic alternating feet, simple kick/snare coordination, single-pedal speed building, accent patterns.

**Set 2 -- Coordination** (18 patterns): Ride hand independence, hi-hat foot ostinatos, snare accent layering, triplet coordination, cymbal pattern independence.

**Set 3 -- Advanced Techniques** (18 patterns): Gallop variations, 16th-note endurance, blast beat integration, polyrhythmic kicks, syncopated double bass, speed bursts, progressive difficulty curves.

Each set is tagged with `'practice'` and `'double bass'` so they appear under the "DB Practice" subcategory filter.

### Bug Fixes

**Grid canvas initialization bug** -- The canvas `ResizeObserver` effect originally ran once on mount. When no pattern was loaded, the canvas element was not in the DOM (conditional render). Fix: added `hasPattern` (`!!pattern`) as a dependency so the effect re-runs when the first pattern is loaded and the canvas enters the DOM.

**MetalSynth `triggerAttack` API mismatch** -- `Tone.MetalSynth` extends `Monophonic`, so its `triggerAttack` signature requires `(note, time?, velocity?)` rather than just `(time, velocity)`. The fix passes the synth's frequency value as the `note` parameter:
```ts
// Before (broken):
synth.triggerAttack(time, velocity * velocityScale);

// After (fixed):
synth.triggerAttack(freq, time, velocity * velocityScale);
```

**Cymbal volume/velocity scaling** -- MetalSynth voices were disproportionately loud relative to MembraneSynth voices. Fix: added a `velocityScale` parameter to `createMetalVoice()` (0.8 for ride/crash/china, 0.9 for hi-hats) and tuned per-piece `volume` dB values in the default sound params.

---

## 3. Architecture Decisions

### Canvas for Grid vs. SVG for Drum Kit

The step sequencer grid renders **hundreds of cells per frame** (10 rows x 16--32+ columns) with a playhead updating at 60fps via `requestAnimationFrame`. Canvas was chosen for the grid because:
- Direct pixel drawing avoids DOM node overhead
- No reflow/repaint from moving SVG elements
- Scrolling is handled by changing a `scrollX` offset, not repositioning nodes
- Velocity-based opacity and rounded-rect drawing are straightforward in Canvas 2D

The drum kit visualization uses **SVG** because:
- Only 10 elements (ellipses) need rendering
- SVG provides declarative, React-managed updates (`isActive` prop changes `fill`)
- CSS transitions on SVG attributes give smooth glow/fade effects for free
- SVG `<filter>` for gaussian blur glow is simpler than Canvas compositing

### Synthesized Sounds vs. WAV Samples

Tone.js synthesizers were chosen over audio samples to:
- **Eliminate loading time** -- No HTTP requests for sample files; sounds are ready immediately after `Tone.start()`
- **Enable real-time sound shaping** -- The Sound Tuning feature lets users tweak pitch, decay, brightness, etc. in real time. With samples, this would require pitch-shifting and time-stretching, which is more complex and lower quality.
- **Reduce deployment size** -- The entire app is JavaScript only; no audio assets to serve
- **Support presets** -- Switching between Default/Metal/Jazz/808/Punk/Heavy/Lo-Fi is just updating synth parameters, not swapping sample banks

Trade-off: synthesized drums sound less "real" than multi-layer sampled drums, but for a practice tool focused on timing and pattern learning, this is acceptable.

### Zustand over Redux / React Context

Zustand was chosen because:
- **Minimal boilerplate** -- Each store is a single `create()` call, no providers, reducers, or action types
- **Selector-based subscriptions** -- Components subscribe to individual fields (`useTransportStore(s => s.bpm)`) to avoid unnecessary re-renders. This is critical when the playhead position updates 60 times per second.
- **Direct external access** -- `usePatternStore.getState()` can be called outside React components (in the `useTransport` hook callbacks passed to the audio engine)
- **Small bundle size** -- Zustand adds ~2KB vs Redux Toolkit's ~30KB

### Dual-Canvas Approach (Grid + Playhead)

Although the final implementation uses a single canvas with a combined draw loop, the architecture was designed with separation in mind. The `GridRenderer` class has distinct methods:
- `drawGrid()` + `drawNotes()` -- Only need to redraw when the pattern changes or user scrolls
- `drawPlayhead()` -- Needs to redraw at 60fps during playback

The playhead position comes from a separate `requestAnimationFrame` loop in `TransportController.startPlayheadRAF()`, decoupled from the audio-rate step callback (which fires at 16th-note intervals). This ensures smooth visual motion even at slow tempos where step callbacks are infrequent.

### Module-Level Singleton for AudioEngine

```ts
let engine: AudioEngine | null = null;

export function getAudioEngine(): AudioEngine {
  if (!engine) {
    engine = new AudioEngine();
  }
  return engine;
}
```

This pattern was chosen because:
- The Web Audio context must be a single instance (browser limitation)
- Multiple React hooks need to call engine methods without prop drilling
- The engine is created lazily on first access but only after user interaction triggers `Tone.start()`
- Avoids placing the engine in React state (which would cause re-renders on every method call)

### Metal Patterns Split into Directory with 13 Sub-Files

The metal category grew to 167 patterns -- more than all other categories combined. Splitting into subcategory files:
- **Improved maintainability** -- Each file focuses on one style (blasts, breakdowns, djent, etc.)
- **Enabled parallel development** -- Multiple agents could write different sub-files simultaneously
- **Kept file sizes manageable** -- The largest metal sub-file is 440 lines vs. what would have been 3,000+ lines in a monolith
- **Supported subcategory filtering** -- Each file's patterns share tags that map to the `SubcategoryFilter` UI

The barrel `src/data/patterns/metal/index.ts` simply spreads all arrays into one `metalPatterns` export.

---

## 4. Agent Team Strategy

### Parallel Pattern Creation

The pattern library expansion from ~50 to 290 patterns was accomplished using **4 parallel coding agents** working simultaneously. The key enabler was the file architecture:

**Why it worked without merge conflicts:**

1. **One file per category** -- Each agent was assigned to different category files. Agent A worked on `rock.ts`, Agent B on `funk.ts` and `jazz.ts`, Agent C on `latin.ts` and `fills.ts`, Agent D on `rudiments.ts` and new categories.

2. **Barrel index pattern** -- The `src/data/patterns/index.ts` barrel file uses a simple spread pattern:
   ```ts
   export const allPatterns: PatternLibraryEntry[] = [
     ...rockPatterns,
     ...funkPatterns,
     // etc.
   ];
   ```
   Adding a new category only requires adding one import and one spread line. This single-line change per category minimizes conflict surface.

3. **Self-contained data** -- Each pattern file imports only the `PatternLibraryEntry` type and exports a typed array. No inter-file dependencies between pattern files.

4. **Consistent schema** -- All agents followed the same `PatternLibraryEntry` interface, ensuring patterns from any agent were interchangeable.

The metal expansion used the same strategy at a finer grain: 13 sub-files within a `metal/` directory, each independently authored, with a local `metal/index.ts` barrel re-exporting them all.

---

## 5. Key Technical Challenges

### MetalSynth API Mismatch

`Tone.MetalSynth` extends `Tone.Monophonic`, which means its `triggerAttack` method signature is:

```ts
triggerAttack(note: Frequency, time?: Time, velocity?: NormalRange): this
```

However, the initial implementation called it like a `NoiseSynth`:

```ts
synth.triggerAttack(time, velocity);  // WRONG -- time is interpreted as note
```

This caused either silence or garbage sounds depending on whether the `time` value happened to map to a valid frequency. The fix was to pass the synth's configured frequency as the `note` parameter:

```ts
synth.triggerAttack(freq, time, velocity * velocityScale);
```

This was a subtle bug because TypeScript's type checking did not catch it -- `Frequency` and `Time` are both type aliases for `string | number`, so the wrong-argument-order call compiled without errors.

### Canvas Resize Timing with React Lifecycle

The grid canvas uses conditional rendering: it only mounts when a pattern is loaded. The initial `ResizeObserver` setup ran once on mount via a `useEffect` with an empty dependency array. But when the component first mounts (user loads a pattern), the canvas element's container might not yet have its final dimensions from the CSS flex layout.

The fix involved:
1. Making the effect depend on `hasPattern` (`!!pattern`) so it re-runs when the canvas enters/exits the DOM
2. Using `ResizeObserver` instead of a one-shot measurement, so it reacts to layout changes
3. Storing the `GridRenderer` in a ref, not state, to avoid re-render loops

### Tone.js Web Audio Autoplay Policy

Modern browsers require a user gesture before starting an `AudioContext`. Tone.js's `Tone.start()` must be called from a click/tap handler. The solution:

- The `AppLayout` component renders a splash screen with a "Click to Start" button
- The entire splash screen div also has an `onClick` handler as a catch-all
- `Tone.start()` is called inside `AudioEngine.initialize()`, which is called from the click handler
- The `isInitialized` flag in `useDrumKitStore` gates the entire app UI
- A subtle note below the button explains: "Audio requires user interaction to initialize"

### Pattern Data Validation

Every track array in a `DrumPattern` must have exactly `subdivisions * measures` elements. Mismatches cause:
- Short arrays: steps beyond the array length are silent (the engine checks `step < track.length`)
- Long arrays: extra data is ignored but wastes memory

For a standard 4/4 pattern at 16th-note resolution:
- 1 measure = 16 elements per track
- 2 measures = 32 elements per track

With 290 patterns and up to 10 tracks each, manual verification is impractical. The consistent use of typed arrays and the convention of always filling arrays with explicit 0s for rests helped catch errors during development.

---

## 6. Final Statistics

### Pattern Counts by Category

| Category | File(s) | Pattern Count |
|---|---|---|
| Rock | `rock.ts` | 22 |
| Funk | `funk.ts` | 16 |
| Jazz | `jazz.ts` | 15 |
| Latin | `latin.ts` | 16 |
| World | `world.ts` | 16 |
| Fills | `fills.ts` | 22 |
| Rudiments | `rudiments.ts` | 16 |
| **Non-metal subtotal** | **7 files** | **123** |

### Metal Subcategory Breakdown

| Subcategory | File | Pattern Count |
|---|---|---|
| Basics | `metal/basics.ts` | 16 |
| Blast Beats | `metal/blasts.ts` | 12 |
| Double Bass | `metal/double-bass.ts` | 10 |
| Breakdowns | `metal/breakdowns.ts` | 12 |
| Djent | `metal/djent.ts` | 10 |
| Grooves | `metal/grooves.ts` | 10 |
| Progressive | `metal/progressive.ts` | 10 |
| BFW Song Styles | `metal/style-bfw.ts` | 15 |
| Artist Styles | `metal/style-artists.ts` | 10 |
| Fills & Transitions | `metal/fills-transitions.ts` | 8 |
| DB Practice Set 1 | `metal/double-bass-practice-1.ts` | 18 |
| DB Practice Set 2 | `metal/double-bass-practice-2.ts` | 18 |
| DB Practice Set 3 | `metal/double-bass-practice-3.ts` | 18 |
| **Metal subtotal** | **13 data files + 1 barrel** | **167** |

### Grand Total

| | Count |
|---|---|
| **Total Patterns** | **290** |
| Total Categories | 8 |
| Metal Subcategories | 13 |
| Sound Presets (built-in) | 7 |
| Drum Kit Pieces | 10 |

### Source File Breakdown

| Directory | Files | Lines |
|---|---|---|
| `src/audio/` | 4 | 466 |
| `src/stores/` | 5 | 313 |
| `src/hooks/` | 5 | 408 |
| `src/components/` | 16 | 1,192 |
| `src/constants/` | 4 | 186 |
| `src/types/` | 1 | 115 |
| `src/utils/` | 3 | 122 |
| `src/data/patterns/` | 22 | 7,020 |
| `src/` (root) | 2 | 12 |
| **Total** | **67** | **10,218** |

### Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Space` | Play / Pause |
| `Escape` or `Enter` | Stop |
| `Arrow Left / Right` | Step backward / forward |
| `M` | Toggle metronome |
| `L` | Toggle loop |
| `+` / `-` | BPM +5 / -5 |
