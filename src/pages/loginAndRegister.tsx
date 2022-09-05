import {
  Box,
  Text,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  HStack,
  Checkbox,
  Link,
  ScaleFade,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  AiOutlineUser,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineLock,
} from 'react-icons/ai';
import { BeatLoader } from 'react-spinners';

export function LoginAndRegister() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="full"
      h="100vh"
      bg="#f2f2f2"
    >
      <ScaleFade initialScale={0.5} in={true}>
        <VStack
          w="450px"
          bg="white"
          py={20}
          boxShadow="2xl"
          rounded={5}
          spacing={10}
        >
          <VStack>
            <Text fontSize={28} color="blue.800" fontWeight="bold">
              Entrar
            </Text>
            <Text fontSize={16} color="blue.800" fontWeight="normal">
              Faça login para entrar na plataforma
            </Text>
          </VStack>
          <VStack w="90%" spacing={5}>
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineUser color="gray" size={24} />}
              />
              <Input
                size="lg"
                type="text"
                placeholder="Usuário"
                _placeholder={{ color: 'blue.800' }}
                focusBorderColor="gray"
              />
            </InputGroup>
            <InputGroup size="lg">
              <Input
                type={show ? 'text' : 'password'}
                placeholder="Senha"
                _placeholder={{ color: 'blue.800' }}
                focusBorderColor="gray"
              />
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineLock color="gray" size={24} />}
              />
              <InputRightElement width="4.5rem">
                <Button
                  size="sm"
                  onClick={handleClick}
                  bg="transparent"
                  _hover={{ bg: 'transparent' }}
                >
                  {show ? (
                    <AiFillEyeInvisible color="gray" size={24} />
                  ) : (
                    <AiFillEye color="gray" size={24} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <HStack w="100%" justifyContent="space-between">
              <Checkbox size="md" colorScheme="blue">
                lembrar senha
              </Checkbox>
              <Link>Esqueceu a senha</Link>
            </HStack>
          </VStack>
          <Button
            w="90%"
            color="white"
            bg="blue.600"
            py={7}
            _hover={{ bg: 'blue.500', transition: '0.5s' }}
            spinner={<BeatLoader size={8} color="white" />}
          >
            Entrar
          </Button>
        </VStack>
      </ScaleFade>
    </Box>
  );
}
