import { Button } from '@chakra-ui/react';

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, active, onClick }: FilterButtonProps) => {
  return (
    <Button
      background="transparent"
      borderRadius={0}
      padding={0}
      color={active ? 'yellow.800' : 'gray.50'}
      _focus={{}}
      fontSize="3vw"
      fontWeight={active ? 'bold' : 'regular'}
      display="inline"
      textAlign="center"
      onClick={onClick}
      _active={{}}
      _hover={{}}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
