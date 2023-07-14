import { PropsWithChildren, useContext } from 'react';
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, styledDarkTheme } from './styled-components/theme';
import { chakraDarkTheme, chakraTheme } from './chakraUI/theme.colors';
import { ControllerContext } from '../contexts/Controllers.context';
import { ThemeEnum } from '../contexts/types';

const PackagesProvider = ({ children }: PropsWithChildren) => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  const chakraThemeDefined = extendTheme(
    theme === ThemeEnum.light ? chakraTheme : chakraDarkTheme
  );

  const styledComponentsThemeDefined =
    theme === ThemeEnum.light ? lightTheme : styledDarkTheme;

  return (
    <ChakraProvider theme={chakraThemeDefined}>
      <ThemeProvider theme={styledComponentsThemeDefined}>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default PackagesProvider;
