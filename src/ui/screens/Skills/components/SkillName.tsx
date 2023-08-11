import { ControllerContext } from '@/infra/contexts/Controllers.context';
import { ThemeEnum } from '@/infra/contexts/types';
import { Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';

interface SkillNameProps {
  icon: JSX.Element;
  name: string;
}

const SkillName = ({ icon, name }: SkillNameProps) => {
  const {
    items: { theme },
  } = useContext(ControllerContext);

  return (
    <Flex
      fontSize="2rem"
      alignItems="center"
      padding="5px 10px"
      borderRadius="10px"
      gap="10px"
      background="background"
      boxShadow={
        theme === ThemeEnum.light
          ? '6px 6px 15px #d9d9d9, -6px -6px 15px #ffffff'
          : ' 6px 6px 15px #25252a, -6px -6px 15px #333338'
      }
    >
      {icon}
      <Text fontSize="1.4rem" color="gray.500" fontWeight="semibold">
        {name}
      </Text>
    </Flex>
  );
};

export default SkillName;
