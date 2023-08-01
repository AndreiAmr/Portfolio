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
    type: TypeEnum.PERSONAL,
    label: 'Pessoal',
  },
  {
    type: TypeEnum.HOSPITAL,
    label: 'Hospitalar',
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
  },
];
