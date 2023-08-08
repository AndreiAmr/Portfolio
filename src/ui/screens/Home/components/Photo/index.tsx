import { Box, Flex, Image } from '@chakra-ui/react';
import ProfilePicture from '@assets/images/profile.png';
import * as S from './animations';

const Photo = () => {
  return (
    <S.AnimationContainer>
      <Flex
        width={['25vh', '23vh']}
        height={['25vh', '23vh']}
        borderRadius="50%"
        justifyContent={'center'}
        alignItems="center"
        marginTop="33px"
        className="perfil-animation-1"
        // border="1px solid black"
      >
        <Box
          width={['22vh', '22vh', '22vh', '22vh', '23vh']}
          height={['22vh', '22vh', '22vh', '22vh', '23vh']}
          borderRadius="50%"
          background="purple.700"
          zIndex={2}
          display={'flex'}
          alignItems="flex-end"
          justifyContent="center"
          boxShadow="4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"
          overflow="hidden"
        >
          <Image
            src={ProfilePicture}
            width="100%"
            height="100%"
            // borderRadius="10px"
            marginBottom="-10px"
          />
        </Box>
      </Flex>
    </S.AnimationContainer>
  );
};

export default Photo;
