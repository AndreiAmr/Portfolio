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

export const techIcons = {
  reactJS: {
    icon: <FaReact color="#61dbfb" />,
    name: 'React JS',
  },
  reactNative: {
    icon: <TbBrandReactNative color="#61dbfb" />,
    name: 'React Native',
  },
  mysql: {
    icon: <SiMysql color="#00758f" />,
    name: 'My SQL',
  },

  sqlite: {
    icon: <SiSqlite color="#90d5f4" />,
    name: 'SQLite',
  },
  typescript: {
    icon: <BiLogoTypescript color="#3178c6" />,
    name: 'Typescript',
  },
  firebase: {
    icon: <SiFirebase color="#ffcc30" />,
    name: 'Firebase',
  },
  graphQL: {
    icon: <SiGraphql color="#e535ab" />,
    name: 'GraphQL',
  },
  jest: {
    icon: <SiJest color="#c63d14" />,
    name: 'Jest',
  },
  googleMaps: {
    icon: <SiGooglemaps color="#4086f4" />,
    name: 'Google Maps',
  },
  mapbox: {
    icon: <SiMapbox color="#4064fb" />,
    name: 'Mapbox',
  },
  html: {
    icon: <FaHtml5 color="#ff5c29" />,
    name: 'HTML',
  },
  css: {
    icon: <FaCss3Alt color="#004ce8" />,
    name: 'CSS',
  },
  github: {
    icon: <FaGithub color="#000000" />,
    name: 'Github',
  },
  android: {
    icon: <FaAndroid color="#adc34e" />,
    name: 'Android',
  },
  apple: {
    icon: <FaApple />,
    name: 'Apple',
  },
  styledComponenets: {
    icon: <SiStyledcomponents color="#d977b3" />,
    name: 'Styled Components',
  },
  chakraUI: {
    icon: <SiChakraui color="#4fccc3" />,
    name: 'Chakra-UI',
  },
  azureDevops: {
    icon: <SiAzuredevops color="#035bda" />,
    name: 'Azure Devops',
  },
  adobeXD: {
    icon: <SiAdobexd color="#4d093d" />,
    name: 'AdobeXD',
  },
  javascript: {
    icon: <BiLogoJavascript color="#ecb935" />,
    name: 'Javascript',
  },
  bootstrap: {
    icon: <BiLogoBootstrap color="#7309f5" />,
    name: 'Bootstrap',
  },
  tailwindCss: {
    icon: <BiLogoTailwindCss color="#06b6d4" />,
    name: 'Tailwind CSS',
  },
  redux: {
    icon: <BiLogoRedux color="#764abc" />,
    name: 'Redux',
  },
  figma: {
    icon: <BiLogoFigma color="#c63d14" />,
    name: 'Figma',
  },
  nodejs: {
    icon: <BiLogoNodejs color="#78b743" />,
    name: 'Nodejs',
  },
};

export type GetTechIconProp = keyof typeof techIcons;

export const getTechIcon = (iconName: GetTechIconProp) => {
  return techIcons[iconName];
};
