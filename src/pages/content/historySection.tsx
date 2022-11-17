import { Box, HStack, VStack, Text, IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { OccurrenceCard, OccurrenceTableCard } from '../../components';
import { TableContext } from '../../context/tableContext';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export function HistoryScreen() {
  const { blur, setBlur } = useContext(TableContext);

  function handleShowOrHideTableContent() {
    setBlur(!blur);
  }
  return (
    <>
      <HStack spacing={2} w="full">
        <OccurrenceCard amount={5} title="Novas Ocorrências" />
        <OccurrenceCard amount={3} title="Ocorrências Em  Atendimento" />
        <OccurrenceCard amount={23} title="Ocorrências Atendidas" />
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
          <OccurrenceTableCard
            name="Lucas Borges"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Atendimento"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Atendimento"
          />
          <OccurrenceTableCard
            name="Lucas Aguiar"
            urlImage="https://github.com/LucasAguiarr.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />

          <OccurrenceTableCard
            name="Patricia Regina"
            urlImage="https://github.com/patiregina89.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Keli"
            urlImage="https://github.com/iKeliven.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
          <OccurrenceTableCard
            name="Regina de sousa"
            urlImage="https://github.com/LucasLuisBorges.png"
            number="48 9989-9998"
            date="04/08/2022 - 14:45h"
            city="Florianopolis"
            status="Aguardando"
          />
        </VStack>
      </Box>
    </>
  );
}
