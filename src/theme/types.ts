export interface Colors {
  primary: string;
  secondary: string;
  danger: string;
  success: string;
  warning: string;
  text: string;
}

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'text';

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Radius {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type TextSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodySm'
  | 'caption';

export interface Typography {
  fontFamily: string;
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    body: number;
    bodySm: number;
    caption: number;
  };
}

export interface ComponentTheme {
  input: {
    height: number;
  };

  button: {
    height: number;
  };
}

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  radius: Radius;
  typography: Typography;
  components: ComponentTheme;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
