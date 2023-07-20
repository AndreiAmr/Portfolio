import { Button } from '@chakra-ui/react';

interface FilterButtonProps {
  label: string;
  active: boolean;
}

const FilterButton = ({ label, active }: FilterButtonProps) => {
  return (
    <Button
      background="transparent"
      borderBottomStyle="solid"
      borderBottomWidth={active ? '1px' : 'none'}
      borderBottomColor="yellow.800"
      borderRadius={0}
      padding={0}
      color={active ? 'yellow.800' : 'gray.50'}
      _focus={{}}
      fontSize="3vw"
      fontWeight={active ? 'bold' : 'regular'}
      display="inline"
      textAlign="center"
    >
      {label}
    </Button>
  );
};

export default FilterButton;
