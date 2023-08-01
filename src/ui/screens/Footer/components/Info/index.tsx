import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RxCopy } from 'react-icons/rx';

interface InfoProps {
  title: string;
  iconSrc: string;
  description: string;
}

const Info = ({ description, iconSrc, title }: InfoProps) => {
  const toast = useToast();

  return (
    <CopyToClipboard text={description}>
      <Button
        width="100%"
        maxWidth="500px"
        height="7vh"
        borderRadius="7px"
        backgroundImage="linear-gradient(145deg, #6a47bb, #7e55df)"
        boxShadow="0px 0px 10px #6443b100,
      -0px -0px 17px #885bef00"
        opacity={0.8}
        _active={{
          boxShadow: '7px 7px 17px #6443b1, -7px -7px 17px #885bef',
          opacity: 1,
        }}
        _focus={{
          boxShadow: '7px 7px 17px #6443b1, -7px -7px 17px #885bef',
          opacity: 1,
        }}
        _hover={{
          boxShadow: '7px 7px 17px #6443b1, -7px -7px 17px #885bef',
          opacity: 1,
        }}
        onClick={async () => {
          // alert('test');
          // await navigator.clipboard.writeText(description);

          toast({
            description: 'Copiado com sucesso !',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
        }}
      >
        <>
          <Flex flex={1} alignItems="center">
            <Flex
              height="5.5vh"
              width="5.5vh"
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              boxShadow="inset 9px 9px 17px #6443b1,
            inset -9px -9px 17px #885bef"
            >
              <Image src={iconSrc} width="2.5vh" />
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              padding="10px"
            >
              <Text
                mb="5px"
                fontWeight="light"
                color="white"
                opacity={0.6}
                fontSize={['1.2vh', '1.2vh', '1.2vh', '16px']}
              >
                {title}
              </Text>
              <Text
                fontWeight="semibold"
                color="white"
                fontSize={['1.7vh', '1.7vh', '1.7vh', '16px']}
              >
                {description}
              </Text>
            </Flex>
          </Flex>
          <Text color="white" fontSize={['2.3vh', '2.3vh', '2.3vh', '26px']}>
            <RxCopy />
          </Text>
        </>
      </Button>
    </CopyToClipboard>
  );
};

export default Info;
