import { Avatar, Box, Button, HStack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { TableContext } from '../context/tableContext';

interface OccurrenceTableCardProps {
  name: string;
  urlImage: string;
  number: string;
  date: string;
  city: string;
  status: 'Aguardando' | 'Atendimento' | 'Atendido';
}

export function OccurrenceTableCard({
  name,
  urlImage,
  number,
  date,
  city,
  status,
}: OccurrenceTableCardProps) {
  const { blur } = useContext(TableContext);
  return (
    <HStack justifyContent="space-between" w="100%">
      <HStack>
        {blur ? (
          <Box pos="relative">
            <Avatar
              boxSize="2rem"
              borderRadius="full"
              name={name}
              src="https://bit.ly/broken-link"
              mr="12px"
            />
          </Box>
        ) : (
          <Avatar boxSize="2rem" borderRadius="full" src={urlImage} mr="12px" />
        )}

        {blur ? (
          <Box pos="relative" w="160px">
            <Text fontSize={16} color="black">
              {name}
            </Text>
            <Box pos="absolute" w="100%" h="10px" bg="black" top={2.5} />
          </Box>
        ) : (
          <Text w="160px" fontSize={16} color="black">
            {name}
          </Text>
        )}
      </HStack>
      {blur ? (
        <Box pos="relative" w="85px">
          <Text fontSize={14} color="black">
            {number}
          </Text>
          <Box pos="absolute" w="100%" h="8px" bg="black" top={2} />
        </Box>
      ) : (
        <Text fontSize={14} color="black" w="85px">
          {number}
        </Text>
      )}
      {blur ? (
        <Box pos="relative" w="130px">
          <Text fontSize={14} color="black">
            {date}
          </Text>
          <Box pos="absolute" w="100%" h="8px" bg="black" top={2} />
        </Box>
      ) : (
        <Text fontSize={14} color="black" w="130px">
          {date}
        </Text>
      )}
      {blur ? (
        <Box pos="relative">
          <Text fontSize={14} color="black" w="120px">
            {city}
          </Text>
          <Box pos="absolute" w="100%" h="8px" bg="black" top={2} />
        </Box>
      ) : (
        <Text fontSize={14} color="black" w="120px">
          {city}
        </Text>
      )}
      {status.includes('Aguardando') ? (
        <HStack w="90px">
          <Button
            variant="ghost"
            rounded="full"
            borderWidth={1}
            borderColor="blue.600"
            color="blue.600"
            size="sm"
            isDisabled={blur && true}
          >
            ✓
          </Button>
          <Button
            variant="ghost"
            rounded="full"
            borderWidth={1}
            borderColor="red.600"
            color="red.600"
            size="sm"
            isDisabled={blur && true}
          >
            X
          </Button>
        </HStack>
      ) : (
        <Text fontSize={14} color="blue.600" w="90px">
          Atendimento
        </Text>
      )}
    </HStack>
  );
}
