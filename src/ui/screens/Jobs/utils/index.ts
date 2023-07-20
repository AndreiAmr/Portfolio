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
    type: TypeEnum.AGRIBUSINESS,
    label: 'Pessoal',
  },
  {
    type: TypeEnum.AGRIBUSINESS,
    label: 'Hospitalar',
  },
];
