import 'styled-components';

interface ColorsProps {
  400?: string;
  500?: string;
  600: string;
  700: string;
  800: string;
}

interface ThemeCommonProps {
  background: string;
  white: string;
  purple: ColorsProps;
  gray: ColorsProps;
  blue: ColorsProps;
  yellow: ColorsProps;
  red?: ColorProps;
  green?: ColorProps;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeCommonProps {}
}
