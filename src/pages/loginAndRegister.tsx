import {
  Box,
  Text,
  VStack,
  HStack,
  Checkbox,
  Link,
  ScaleFade,
} from '@chakra-ui/react';
import { useForm, FieldValues } from 'react-hook-form';
import { BaseInput, BasePasswordInput } from '../components';

import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { BaseButton } from '../components/baseButton';

interface ValuesProps extends FieldValues {
  user: string;
  password: string;
}

export function LoginAndRegister() {
  const { handleSubmit, control, reset } = useForm();

  function onSubmit(values: ValuesProps) {
    console.log(values);

    reset();
  }
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
          w={{ base: '350px', ssm: '450px' }}
          bg="white"
          py={20}
          boxShadow="2xl"
          rounded={5}
          spacing={10}
          transition="1s"
        >
          <VStack>
            <Text fontSize={28} color="blue.800" fontWeight="bold">
              Entrar
            </Text>
            <Text fontSize={16} color="blue.800" fontWeight="normal">
              Faça login para entrar na plataforma
            </Text>
          </VStack>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <VStack w="90%" spacing={5}>
              <BaseInput name="user" placeholder="Usuário" control={control}>
                <AiOutlineUser color="gray" size={24} />
              </BaseInput>
              <BasePasswordInput
                placeholder="Senha"
                control={control}
                name="password"
              >
                <AiOutlineLock color="gray" size={24} />
              </BasePasswordInput>

              <HStack w="100%" justifyContent="space-between">
                <Checkbox size="md" colorScheme="blue">
                  lembrar senha
                </Checkbox>
                <Link>Esqueceu a senha</Link>
              </HStack>
              <Box w="90%">
                <BaseButton title="Entrar" type="submit" />
              </Box>
            </VStack>
          </form>
        </VStack>
      </ScaleFade>
    </Box>
  );
}
