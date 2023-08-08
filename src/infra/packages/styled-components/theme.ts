import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  background: '#000',
  white: '#Fff',

  purple: {
    600: '#A57EFF',
    700: '#8257E5',
    800: '#764FD0',
  },

  gray: {
    600: '#737373',
    700: '#56565A',
    800: '#3C394D',
  },
  // ECF9FF

  blue: {
    400: '#d4e0e6',
    500: '#3C394D',
    600: '#F0F4FF',
    700: '#EDF7FF',
    800: '#496EEE',
  },

  yellow: {
    600: '#FFD072',
    700: '#FFBF40',
    800: '#FFBF40',
  },
};

const styledDarkTheme: DefaultTheme = {
  background: '#2C2C31',
  white: '#3C394D',

  purple: {
    600: '#A57EFF',
    700: '#8257E5',
    800: '#764FD0',
  },

  gray: {
    600: '#737373',
    700: '#56565A',
    800: '#3C394D',
  },

  blue: {
    400: '#1F1F23',
    500: '#3C394D',
    600: '#1F1F23',
    700: '#1F1F23',
    800: '#496EEE',
  },

  yellow: {
    600: '#FFD072',
    700: '#FFBF40',
    800: '#FFBF40',
  },
};

export { lightTheme, styledDarkTheme };
