import { Box, HStack, VStack, Text, IconButton } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { OccurrenceCard, OccurrenceTableCard } from '../../components';
import { TableContext } from '../../context/tableContext';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Graphc } from '../../components/graphc';
import { api, socket } from '../../services';
import { IStatus } from '../../components/occurrenceTableCard';

export interface Call {
  created_at: string;
  id: string;
  latitude: number;
  longitude: number;
  status: IStatus;
  user: {
    address: string;
    cep: number;
    complement: string;
    cpf: number;
    email: string;
    full_name: string;
    gender: string;
    id: string;
    password: string;
    phone: string;
    role: 0;
    social_name: string;
  };
  user_id: string;
}

export function MainScreen() {
  const { blur, setBlur } = useContext(TableContext);
  const [calls, setCalls] = useState<Call[]>([]);

  function handleShowOrHideTableContent() {
    setBlur(!blur);
  }

  useEffect(() => {
    fetchCalls();
  }, []);

  async function fetchCalls() {
    const { data } = await api.get('/calls');
    setCalls(data);
  }

  useEffect(() => {
    socket.on('user-call', () => {
      fetchCalls();
    });
  }, [socket]);

  const waiting = calls.filter(call => call.status === 'Waiting');
  const inProgress = calls.filter(call => call.status === 'In progress');
  const concluded = calls.filter(call => call.status === 'Concluded');

  return (
    <>
      <HStack spacing={2} w="full">
        <OccurrenceCard amount={waiting?.length} title="Novas OcorrĂȘncias" />

        <OccurrenceCard
          amount={inProgress?.length}
          title="OcorrĂȘncias Em  Atendimento"
        />

        <OccurrenceCard
          amount={concluded?.length}
          title="OcorrĂȘncias Atendidas"
        />
      </HStack>

      <Box w="full" h="45vh" bg="white" rounded={12} boxShadow="lg" py={2}>
        <HStack justifyContent="space-between" px={5} overflow="hidden">
          <Text fontSize={16} fontWeight="bold" color="black">
            Ăltimas ocorrĂȘncias
          </Text>

          <IconButton
            aria-label="Search database"
            color="blue.600"
            bg="transparent"
            onClick={handleShowOrHideTableContent}
            icon={
              blur ? (
                <AiFillEyeInvisible size={24} color="gray" />
              ) : (
                <AiFillEye size={24} color="gray" />
              )
            }
          />
        </HStack>

        <VStack alignItems="start" px={5} mr={5} overflowY="scroll" maxH="30vh">
          {calls?.map(call => (
            <OccurrenceTableCard
              key={call.id}
              id={call.id}
              name={call.user.full_name}
              number={call.user.phone}
              date={call.created_at}
              status={call.status}
              full_name={call.user.full_name}
              social_name={call.user.social_name}
              cep={call.user.cep}
              address={call.user.address}
              complement={call.user.complement}
              email={call.user.email}
              cpf={call.user.cpf}
              phone={call.user.phone}
              gender={call.user.gender}
              onClick={fetchCalls}
            />
          ))}
        </VStack>
      </Box>

      <Box w="full" h="30vh" bg="white" rounded={12} boxShadow="lg">
        <Graphc data={calls} />
      </Box>
    </>
  );
}
