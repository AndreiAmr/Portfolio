import AmaggiWeb from '@assets/images/amaggi-web.png';
import AmaggiMobile from '@assets/images/amaggi-mobile.png';
import BomFuturoMobile from '@assets/images/bom-futuro-mobile.png';
import { GetTechIconProp } from '@/infra/helpers/tech-icons';

export enum TypeEnum {
  ALL = 'ALL',
  PERSONAL = 'PERSONAL',
  WORK = 'WORK',
  AGRIBUSINESS = 'AGRIBUSINESS',
  HOSPITAL = 'HOSPITAL',
}

interface FilterProp {
  type: TypeEnum;
  label: string;
}

export interface JobItemProps {
  title: string;
  description: string[];
  imgSrc: string;
  type: TypeEnum;
  techs: GetTechIconProp[];
  paddingTop?: boolean;
}

export const filtersOptions: FilterProp[] = [
  {
    type: TypeEnum.AGRIBUSINESS,
    label: 'Agronegócio',
  },
  {
    type: TypeEnum.WORK,
    label: 'Empresarial',
  },

  {
    type: TypeEnum.HOSPITAL,
    label: 'Hospitalar',
  },
];

export const filtersOptionsEnglish: FilterProp[] = [
  {
    type: TypeEnum.AGRIBUSINESS,
    label: 'Agribusiness',
  },
  {
    type: TypeEnum.WORK,
    label: 'Business',
  },

  {
    type: TypeEnum.HOSPITAL,
    label: 'Hospital',
  },
];

export const jobsItems: JobItemProps[] = [
  {
    title: 'Agrosig WEB - Amaggi',
    description: [
      'Sistema desenvolvido com o intuito de auxiliar a administração de fazendas. Podendo visualizar diferentes mapas tematicos, datas de operações, chuva acumuluda, imagens de satélite.',
      'Meu papel foi desenvolver novas features tais como mapas temáticos, gráficos, controle de usuários, edição de polignos (alterar, excluir, adicionar) existentes no mapa conforme o periodo selecionado. ',
      ' Importações de arquivos KML para adição e alteração em massa dos polignos existentes no mapa conforme o periodo selecionado.',
    ],

    imgSrc: AmaggiWeb,

    type: TypeEnum.AGRIBUSINESS,
    techs: [
      'reactJS',
      'typescript',
      'styledComponenets',
      'jest',
      'firebase',
      'chakraUI',
      'azureDevops',
      'redux',
      'figma',
      'adobeXD',
      'googleMaps',
      'github',
      'html',
      'css',
    ],
  },
  {
    title: 'Agrosig MOBILE - Amaggi',
    description: [
      'Este aplicativo foi desenvolvido com o intuito de auxiliar a administração de fazendas. Podendo visualizar datas de operações, chuva acumuluda, imagens de satélite dentre outras funcionalidades.',
    ],
    imgSrc: AmaggiMobile,
    type: TypeEnum.HOSPITAL,
    techs: [
      'reactNative',
      'typescript',
      'styledComponenets',
      'jest',
      'firebase',
      'azureDevops',
      'redux',
      'figma',
      'adobeXD',
      'googleMaps',
      'github',
      'android',
      'apple',
    ],
    paddingTop: true,
  },

  {
    title: 'Agrosig Mobile - Bom Futuro',
    description: [
      'Aplicativo desenvolvido para administração de dados da fazenda no modo offline. Sincronizando antes as informações que ele deseja ter acesso (ano, ocupacao, variedade), assim podendo navegar de forma offline enquanto está sem sinal na fazenda.',

      'Podendo visualizar também informações como chuva acumulada, data de plantio e colheita, previsão de colheita, data de inicio e fim de emergencias, custos em fazendas e talhoes especificos.',
    ],
    imgSrc: BomFuturoMobile,
    type: TypeEnum.WORK,
    techs: [
      'reactNative',
      'typescript',
      'styledComponenets',
      'jest',
      'firebase',
      'azureDevops',
      'redux',
      'figma',
      'adobeXD',
      'mapbox',
      'github',
      'android',
      'apple',
    ],
    paddingTop: true,
  },
];

export const jobsItemsEnglish: JobItemProps[] = [
  {
    title: 'Agrosig WEB - Amaggi',
    description: [
      'System developed in order to help the administration of farms. Being able to visualize different thematic maps, dates of operations, accumulated rain, satellite images.',
      'My role was to develop new features such as thematic maps, graphics, user control, editing polygons (change, delete, add) existing on the map according to the selected period. ',
      'KML file imports for mass addition and alteration of existing polygons on the map according to the selected period.',
    ],

    imgSrc: AmaggiWeb,

    type: TypeEnum.AGRIBUSINESS,
    techs: [
      'reactJS',
      'typescript',
      'styledComponenets',
      'jest',
      'firebase',
      'chakraUI',
      'azureDevops',
      'redux',
      'figma',
      'adobeXD',
      'googleMaps',
      'github',
      'html',
      'css',
    ],
  },
  {
    title: 'Agrosig MOBILE - Amaggi',
    description: [
      'This application was developed in order to assist the administration of farms. Being able to visualize dates of operations, accumulated rain, satellite images among other functionalities.',
    ],
    imgSrc: AmaggiMobile,
    type: TypeEnum.HOSPITAL,
    techs: [
      'reactNative',
      'typescript',
      'styledComponenets',
      'jest',
      'firebase',
      'azureDevops',
      'redux',
      'figma',
      'adobeXD',
      'googleMaps',
      'github',
      'android',
      'apple',
    ],
    paddingTop: true,
  },

  {
    title: 'Agrosig Mobile - Bom Futuro',
    description: [
      'Application developed for managing farm data in offline mode. Synchronizing first the information he wants to have access to (year, occupation, variety), so he can browse offline while there is no signal on the farm.',

      'You can also view information such as accumulated rain, planting and harvesting date, harvest forecast, start and end date of emergencies, costs in farms and specific fields.',
    ],
    imgSrc: BomFuturoMobile,
    type: TypeEnum.WORK,
    techs: [
      'reactNative',
      'typescript',
      'styledComponenets',
      'jest',
      'firebase',
      'azureDevops',
      'redux',
      'figma',
      'adobeXD',
      'mapbox',
      'github',
      'android',
      'apple',
    ],
    paddingTop: true,
  },
];
