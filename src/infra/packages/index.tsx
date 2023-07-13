import { PropsWithChildren } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styled-components/theme";
import themeColors from "./chakraUI/theme.colors";

const PackagesProvider = ({ children }: PropsWithChildren) => {
  const chakraTheme = extendTheme(themeColors);

  return (
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </ChakraProvider>
  );
};

export default PackagesProvider;
