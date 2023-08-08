import { portugues } from './languages';

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export enum LanguageEnum {
  portugues = 'portugues',
  english = 'english',
}

export type LanguangeType = typeof portugues;

export interface ControllersContextProps {
  items: {
    theme: ThemeEnum;
    isAnimating: boolean;
    currentLanguage: LanguangeType;
    currentLangEnum: LanguageEnum;
  };
  change: {
    changeTheme: () => void;
    handleSwitchLanguage: (lang: LanguageEnum) => void;
  };
}
