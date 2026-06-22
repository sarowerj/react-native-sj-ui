import { defaultTheme } from './defaultTheme';
import { deepMerge } from './deepMerge';
import type { Theme, DeepPartial } from './types';

export function createTheme(overrides?: DeepPartial<Theme>): Theme {
  return deepMerge(defaultTheme, overrides);
}
