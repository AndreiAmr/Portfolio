import AmaggiWeb from '@assets/images/amaggi-web.png';
import AmaggiMobile from '@assets/images/amaggi-mobile.png';
import BomFuturoMobile from '@assets/images/bom-futuro-mobile.png';

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
  description: string;
  imgSrc: string;
  type: TypeEnum;
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
    title: 'Agrosig - Amaggi',
    description: 'DEscricao s',
    imgSrc: AmaggiWeb,
    type: TypeEnum.AGRIBUSINESS,
  },
  {
    title: 'Agrosig Mobile - Amaggi',
    description: 'DEscricao s',
    imgSrc: AmaggiMobile,
    type: TypeEnum.HOSPITAL,
  },

  {
    title: 'Agrosig - Amaggi',
    description: 'DEscricao s',
    imgSrc: AmaggiWeb,
    type: TypeEnum.WORK,
  },
  {
    title: 'Agrosig Mobile - Amaggi',
    description: 'DEscricao s',
    imgSrc: AmaggiMobile,
    type: TypeEnum.PERSONAL,
  },
  {
    title: 'Agrosig Mobile - Bom Futuro',
    description: 'DEscricao s',
    imgSrc: BomFuturoMobile,
    type: TypeEnum.WORK,
  },
  {
    title: 'Agrosig Mobile - Bom Futuro',
    description: 'DEscricao s',
    imgSrc: BomFuturoMobile,
    type: TypeEnum.PERSONAL,
  },
  {
    title: 'Agrosig - Amaggi',
    description: 'DEscricao s',
    imgSrc: AmaggiWeb,
    type: TypeEnum.HOSPITAL,
  },

  {
    title: 'Agrosig Mobile - Amaggi',
    description: 'DEscricao s',
    imgSrc: AmaggiMobile,
    type: TypeEnum.AGRIBUSINESS,
  },
  {
    title: 'Agrosig Mobile - Amaggi',
    description: 'DEscricao s',
    imgSrc: AmaggiMobile,
    type: TypeEnum.AGRIBUSINESS,
  },
];
