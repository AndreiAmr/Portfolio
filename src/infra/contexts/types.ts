export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ControllersContextProps {
  items: {
    theme: ThemeEnum;
  };
  change: {
    changeTheme: () => void;
  };
}
