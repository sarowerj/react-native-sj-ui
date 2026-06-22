import { createContext } from 'react';
import type { Theme } from '../theme/types';
import { defaultTheme } from '../theme/defaultTheme';

export const ThemeContext = createContext<Theme>(defaultTheme);
