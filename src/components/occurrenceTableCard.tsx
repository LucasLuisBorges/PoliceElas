import {
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useContext, useState } from 'react';

import { TableContext } from '../context/tableContext';
import { api } from '../services';

export enum IStatus {
  waiting = 'Waiting',
  in_progress = 'In progress',
  concluded = 'Concluded',
  rejected = 'Rejected',
}

interface OccurrenceTableCardProps {
  name: string;
  number: string;
  date: string;
  status: IStatus;
  id: string;
  onClick: () => void;
}

import { ConfirmAlert } from './confirmAlert';

export function OccurrenceTableCard({
  name,
  number,
  date,
  status,
  id,
  onClick,
}: OccurrenceTableCardProps) {
  const [text, setText] = useState(
    status === 'In progress'
      ? 'Em andamento'
      : status === 'Rejected'
      ? 'Rejeitada'
      : 'Concluída',
  );
  const { blur } = useContext(TableContext);

  const {
    onOpen: onOpenAccept,
    isOpen: isOpenAccept,
    onClose: onCloseAccept,
  } = useDisclosure();

  const {
    onOpen: onOpenReject,
    isOpen: isOpenReject,
    onClose: onCloseReject,
  } = useDisclosure();

  async function handleAccept() {
    try {
      await api.put(`/calls`, {
        id,
        status: 'In progress',
      });
      onClick();
      onCloseAccept();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReject() {
    try {
      await api.put(`/calls`, {
        id,
        status: 'Rejected',
      });
      onClick();
      onCloseReject();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleConclude() {
    if (status !== 'In progress') return;

    try {
      await api.put(`/calls`, {
        id,
        status: 'Concluded',
      });
      onClick();
    } catch (error) {
      console.log(error);
    }
  }

  function handleHover() {
    if (status !== 'In progress') return;
    setText('Concluir');
  }

  function handleLeave() {
    setText(
      status === 'In progress'
        ? 'Em andamento'
        : status === 'Rejected'
        ? 'Rejeitada'
        : 'Concluída',
    );
  }

  return (
    <HStack justifyContent="space-between" w="full">
      <ConfirmAlert
        isOpen={isOpenAccept}
        onClose={onCloseAccept}
        title="Ação solicitada"
        message="Deseja aceitar a ocorrência?"
        onConfirm={handleAccept}
      />

      <ConfirmAlert
        isOpen={isOpenReject}
        onClose={onCloseReject}
        title="Ação solicitada"
        message="Deseja rejeitar a ocorrência?"
        onConfirm={handleReject}
      />

      <HStack>
        <Box pos="relative">
          <Avatar
            boxSize="2rem"
            borderRadius="full"
            name={name}
            src="https://bit.ly/broken-link"
            mr="12px"
          />
        </Box>

        {blur ? (
          <Box pos="relative" w="160px">
            <Text fontSize={16} color="black" userSelect="none">
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
          <Text fontSize={14} color="black" userSelect="none">
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
          <Text fontSize={14} color="black" userSelect="none">
            {new Date(date).toLocaleDateString('pt-BR')}
          </Text>

          <Box pos="absolute" w="100%" h="8px" bg="black" top={2} />
        </Box>
      ) : (
        <Text fontSize={14} color="black" w="130px">
          {new Date(date).toLocaleDateString('pt-BR')}
        </Text>
      )}

      <Box w="120px" display="flex" alignItems="center" justifyContent="center">
        {status.includes('Waiting') ? (
          <HStack>
            <Button
              variant="ghost"
              rounded="full"
              borderWidth={1}
              borderColor="blue.600"
              color="blue.600"
              size="sm"
              isDisabled={blur && true}
              onClick={onOpenAccept}
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
              onClick={onOpenReject}
            >
              X
            </Button>
          </HStack>
        ) : (
          <Text
            fontSize={14}
            color="blue.600"
            onClick={handleConclude}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            _hover={{
              cursor: status === 'In progress' && 'pointer',
              color: status === 'In progress' && 'green.600',
            }}
          >
            {text}
          </Text>
        )}
      </Box>
    </HStack>
  );
}
