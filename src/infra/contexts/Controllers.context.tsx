import { useEffect, useState, createContext, PropsWithChildren } from 'react';
import {
  ControllersContextProps,
  LanguageEnum,
  LanguangeType,
  ThemeEnum,
} from './types';
import { english, portugues } from './languages';
import * as languages from './languages';

const ControllerContext = createContext<ControllersContextProps>({
  items: {
    theme: ThemeEnum.light,
    currentLangEnum: LanguageEnum.portugues,
    isAnimating: false,
    currentLanguage: portugues,
  },
  change: {
    changeTheme: () => {},
    handleSwitchLanguage: () => {},
  },
});

const ControllerContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light);

  const [currentLanguage, setCurrentLanguage] =
    useState<LanguangeType>(portugues);
  const [currentLangEnum, setCurrentLangEnum] = useState<LanguageEnum>(
    LanguageEnum.portugues
  );

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const toogleTheme = () => {
    if (theme === ThemeEnum.light) {
      window.localStorage.setItem('andreiAMR-language', ThemeEnum.dark);
      setTheme(ThemeEnum.dark);
      return;
    }
    window.localStorage.setItem('andreiAMR-language', ThemeEnum.light);

    setTheme(ThemeEnum.light);
  };

  const handleSwitchLanguage = (lang: LanguageEnum) => {
    if (currentLangEnum === lang) {
      return;
    }
    setIsAnimating(true);
    window.localStorage.setItem('andreiAMR-language', lang);
    switch (lang) {
      case LanguageEnum.portugues: {
        setTimeout(() => {
          setCurrentLanguage(portugues);
          setCurrentLangEnum(LanguageEnum.portugues);
        }, 1500);
        break;
      }

      case LanguageEnum.english: {
        setTimeout(() => {
          setCurrentLanguage(english);
          setCurrentLangEnum(LanguageEnum.english);
        }, 1500);

        break;
      }

      default: {
        setTimeout(() => {
          setCurrentLanguage(portugues);
          setCurrentLangEnum(LanguageEnum.portugues);
        }, 1500);
      }
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  useEffect(() => {
    const languageSaved = window.localStorage.getItem('andreiAMR-language');
    const themeSaved = window.localStorage.getItem('andreiAMR-language');

    if (languageSaved) {
      const langEnum = LanguageEnum[languageSaved as LanguageEnum];
      setCurrentLanguage(
        langEnum === LanguageEnum.portugues ? portugues : english
      );
      setCurrentLangEnum(langEnum);
    }

    if (themeSaved) {
      const theme = ThemeEnum[themeSaved as ThemeEnum];
      setTheme(theme);
    }
  }, []);

  return (
    <ControllerContext.Provider
      value={{
        items: {
          theme,
          isAnimating,
          currentLanguage,
          currentLangEnum,
        },
        change: {
          changeTheme: toogleTheme,
          handleSwitchLanguage,
        },
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
};

export { ControllerContext, ControllerContextProvider };
