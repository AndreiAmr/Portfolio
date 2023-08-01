import { Flex } from '@chakra-ui/react';
import FilterButton from '../FilterButton';
import { TypeEnum, filtersOptions } from '../../utils';
import { Bounce } from 'react-awesome-reveal';

interface FiltersProps {
  filter: TypeEnum;
  changeFilter: (filter: TypeEnum) => void;
}

const Filters = ({ filter, changeFilter }: FiltersProps) => {
  return (
    <Flex gap="2vw" marginTop="20px">
      <Bounce cascade delay={500} duration={500}>
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
      </Bounce>
    </Flex>
  );
};

export default Filters;
