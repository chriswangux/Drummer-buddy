import type { PatternLibraryEntry } from '../../types';
import { rockPatterns } from './rock';
import { funkPatterns } from './funk';
import { jazzPatterns } from './jazz';
import { latinPatterns } from './latin';
import { metalPatterns } from './metal';
import { worldPatterns } from './world';
import { fillPatterns } from './fills';
import { rudimentPatterns } from './rudiments';

export const allPatterns: PatternLibraryEntry[] = [
  ...rockPatterns,
  ...funkPatterns,
  ...jazzPatterns,
  ...latinPatterns,
  ...metalPatterns,
  ...worldPatterns,
  ...fillPatterns,
  ...rudimentPatterns,
];
