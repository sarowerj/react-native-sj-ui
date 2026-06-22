import { type PropsWithChildren, useMemo } from 'react';

import { ThemeContext } from './ThemeContext';
import { createTheme } from '../theme/createTheme';
import type { Theme } from '../theme/types';
import type { DeepPartial } from '../theme/types';

interface UIProviderProps {
  theme?: DeepPartial<Theme>;
}

export function SjUiProvider({
  children,
  theme: themeOverrides,
}: PropsWithChildren<UIProviderProps>) {
  const theme = useMemo(() => createTheme(themeOverrides), [themeOverrides]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
