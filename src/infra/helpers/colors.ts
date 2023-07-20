import {
  chakraDarkTheme,
  chakraTheme,
} from '../packages/chakraUI/theme.colors';

export const getColor = (
  color: keyof typeof chakraDarkTheme.colors,
  isDarkTheme: boolean
) => {
  if (isDarkTheme) {
    return chakraDarkTheme.colors[color][800];
  } else {
    return chakraTheme.colors[color][800];
  }
};
