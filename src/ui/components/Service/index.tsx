import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => {
  return (
    <Flex
      height="173px"
      width="364px"
      borderRadius="10px"
      boxShadow="4px 4px 14px 1px rgba(202, 220, 237, 0.74) inset"
      alignItems="center"
      padding="12px"
      paddingLeft="16px"
    >
      <Image width="80px" height="80px" src={icon} />
      <Box marginLeft="15px">
        <Text fontSize="16px" fontWeight="semibold" color="gray.800">
          {title}
        </Text>
        <Text fontSize="12px" width="90%" color="gray.600" margin="7px 0px 9px">
          {description}
        </Text>
        <Text color="yellow.800">Ler mais</Text>
      </Box>
    </Flex>
  );
};

export default Service;
