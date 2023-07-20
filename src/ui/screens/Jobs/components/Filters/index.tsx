import { Flex } from '@chakra-ui/react';
import FilterButton from '../FilterButton';
import { filtersOptions } from '../../utils';

const Filters = () => {
  return (
    <Flex gap="10px" marginTop="20px">
      <FilterButton label="Todos" active />

      {filtersOptions.map((item) => {
        return <FilterButton label={item.label} active={false} />;
      })}
    </Flex>
  );
};

export default Filters;
