import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react';

interface MyAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MyAccountModal({ isOpen, onClose }: MyAccountModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informações da conta</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="start">
            <Text>
              <strong>Nome:</strong> Lucas Policial
            </Text>
            <Text>
              <strong>Idade:</strong> 23 anos
            </Text>
            <Text>
              <strong>Numero de registro:</strong> 121212121
            </Text>
            <Text>
              <strong>Departamento:</strong> 1212-20
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Editar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
