import { Box, Flex, Image } from "@chakra-ui/react";
import ProfilePicture from "@assets/images/profile.png";
import * as S from "./animations";

const Photo = () => {
  return (
    <S.AnimationContainer>
      <Flex
        width={["25vh", "23vh"]}
        height={["25vh", "23vh"]}
        borderRadius="50%"
        justifyContent={"center"}
        alignItems="center"
        marginTop="33px"
        className="perfil-animation-1"
      >
        <Box
          width={["22vh", "21vh"]}
          height={["22vh", "21vh"]}
          borderRadius="50%"
          background="purple.700"
          zIndex={2}
          display={"flex"}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Image src={ProfilePicture} />
        </Box>
      </Flex>
    </S.AnimationContainer>
  );
};

export default Photo;
