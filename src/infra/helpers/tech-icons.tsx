import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaAndroid,
  FaApple,
} from 'react-icons/fa';
import {
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiGraphql,
  SiJest,
  SiGooglemaps,
  SiMapbox,
  SiStyledcomponents,
  SiChakraui,
  SiAzuredevops,
  SiAdobexd,
} from 'react-icons/si';

import { TbBrandReactNative } from 'react-icons/tb';

import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoRedux,
  BiLogoFigma,
  BiLogoNodejs,
} from 'react-icons/bi';

const techIcons = {
  reactJS: <FaReact color="#61dbfb" />,
  reactNative: <TbBrandReactNative color="#61dbfb" />,
  mysql: <SiMysql color="#00758f" />,
  sqlite: <SiSqlite color="#90d5f4" />,
  typescript: <BiLogoTypescript color="#3178c6" />,
  firebase: <SiFirebase />,
  graphQL: <SiGraphql />,
  jest: <SiJest />,
  googleMaps: <SiGooglemaps />,
  mapbox: <SiMapbox />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  github: <FaGithub />,
  android: <FaAndroid />,
  apple: <FaApple />,
  styledComponenets: <SiStyledcomponents color="#d977b3" />,
  chakraUI: <SiChakraui />,
  azureDevops: <SiAzuredevops />,
  adobeXD: <SiAdobexd />,
  javascript: <BiLogoJavascript />,
  bootstrap: <BiLogoBootstrap />,
  tailwindCss: <BiLogoTailwindCss />,
  redux: <BiLogoRedux />,
  figma: <BiLogoFigma />,
  nodejs: <BiLogoNodejs />,
};

export type GetTechIconProp = keyof typeof techIcons;

export const getTechIcon = (iconName: GetTechIconProp) => {
  return techIcons[iconName];
};
