import { Flex, Text } from "@chakra-ui/react";

export const Name = () => {
  return (
    <Flex>
      <Text fontSize="1rem" color="purple.800" fontWeight="semibold">
        {"<"}
      </Text>
      <Text fontSize="1rem" color="gray.700" fontWeight="semibold">
        Andrei Amaral
      </Text>
      <Text fontSize="1rem" color="purple.800" fontWeight="semibold">
        {"/>"}
      </Text>
    </Flex>
  );
};

export default Name;
