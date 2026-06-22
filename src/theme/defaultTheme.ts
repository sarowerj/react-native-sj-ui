import type { Theme } from './types';

export const defaultTheme: Theme = {
  colors: {
    primary: '#2563EB',
    secondary: '#64748B',
    danger: '#DC2626',
    success: '#16A34A',
    warning: '#D97706',
    text: '#000000',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },

  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },

  typography: {
    fontFamily: 'System',
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      h1: 32,
      h2: 28,
      h3: 24,
      h4: 20,
      body: 16,
      bodySm: 14,
      caption: 12,
    },
  },

  components: {
    input: {
      height: 48,
    },

    button: {
      height: 48,
    },
  },
};
