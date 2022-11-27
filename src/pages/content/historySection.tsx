import { Box, HStack, VStack, Text, IconButton } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { OccurrenceCard, OccurrenceTableCard } from '../../components';
import { TableContext } from '../../context/tableContext';
import { api, socket } from '../../services';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Call } from './mainScreen';

export function HistoryScreen() {
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
        <OccurrenceCard amount={waiting?.length} title="Novas Ocorrências" />

        <OccurrenceCard
          amount={inProgress?.length}
          title="Ocorrências Em  Atendimento"
        />

        <OccurrenceCard
          amount={concluded?.length}
          title="Ocorrências Atendidas"
        />
      </HStack>
      <Box w="full" maxH="70vh" bg="white" rounded={12} boxShadow="lg" py={2}>
        <HStack justifyContent="space-between" px={5} overflow="hidden">
          <Text fontSize={16} fontWeight="bold" color="black">
            Todas ocorrências
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
        <VStack alignItems="start" px={5} mr={5} overflowY="scroll" maxH="55vh">
          {calls?.map(call => (
            <OccurrenceTableCard
              key={call.id}
              id={call.id}
              name={call.user.full_name}
              number={call.user.phone}
              date={call.created_at}
              status={call.status}
              onClick={fetchCalls}
            />
          ))}
        </VStack>
      </Box>
    </>
  );
}
