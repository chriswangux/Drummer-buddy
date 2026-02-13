import type { PatternLibraryEntry } from '../../../types';
import { metalBasicPatterns } from './basics';
import { metalBlastPatterns } from './blasts';
import { metalDoubleBassPatterns } from './double-bass';
import { metalBreakdownPatterns } from './breakdowns';
import { metalDjentPatterns } from './djent';
import { metalGroovePatterns } from './grooves';
import { metalProgressivePatterns } from './progressive';
import { bfwStylePatterns } from './style-bfw';
import { artistStylePatterns } from './style-artists';
import { metalFillPatterns } from './fills-transitions';
import { dbPractice1Patterns } from './double-bass-practice-1';
import { dbPractice2Patterns } from './double-bass-practice-2';
import { dbPractice3Patterns } from './double-bass-practice-3';

export const metalPatterns: PatternLibraryEntry[] = [
  ...metalBasicPatterns,
  ...metalBlastPatterns,
  ...metalDoubleBassPatterns,
  ...metalBreakdownPatterns,
  ...metalDjentPatterns,
  ...metalGroovePatterns,
  ...metalProgressivePatterns,
  ...bfwStylePatterns,
  ...artistStylePatterns,
  ...metalFillPatterns,
  ...dbPractice1Patterns,
  ...dbPractice2Patterns,
  ...dbPractice3Patterns,
];
