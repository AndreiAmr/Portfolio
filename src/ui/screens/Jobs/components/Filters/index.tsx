import { Flex } from '@chakra-ui/react';
import FilterButton from '../FilterButton';
import { TypeEnum, filtersOptions } from '../../utils';

interface FiltersProps {
  filter: TypeEnum;
  changeFilter: (filter: TypeEnum) => void;
}

const Filters = ({ filter, changeFilter }: FiltersProps) => {
  return (
    <Flex gap="10px" marginTop="20px">
      <FilterButton
        label="Todos"
        active={filter === TypeEnum.ALL}
        onClick={() => changeFilter(TypeEnum.ALL)}
      />

      {filtersOptions.map((item) => {
        return (
          <FilterButton
            label={item.label}
            active={filter === item.type}
            onClick={() => changeFilter(item.type)}
          />
        );
      })}
    </Flex>
  );
};

export default Filters;
