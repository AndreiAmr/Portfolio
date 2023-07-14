import { useState, createContext, PropsWithChildren } from 'react';
import { ControllersContextProps, ThemeEnum } from './types';

const ControllerContext = createContext<ControllersContextProps>({
  items: {
    theme: ThemeEnum.light,
  },
  change: {
    changeTheme: () => {},
  },
});

const ControllerContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light);

  const toogleTheme = () => {
    if (theme === ThemeEnum.light) {
      setTheme(ThemeEnum.dark);
      return;
    }
    setTheme(ThemeEnum.light);
  };

  return (
    <ControllerContext.Provider
      value={{
        items: {
          theme,
        },
        change: {
          changeTheme: toogleTheme,
        },
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
};

export { ControllerContext, ControllerContextProvider };
