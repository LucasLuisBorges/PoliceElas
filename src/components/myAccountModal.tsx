import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

interface MyAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MyAccountModal({ isOpen, onClose }: MyAccountModalProps) {
  const { user } = useContext(AuthContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informações da conta</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="start">
            <Text>
              <strong>Nome:</strong> {user!.full_name}
            </Text>
            <Text>
              <strong>Email:</strong> {user!.email}
            </Text>
            <Text>
              <strong>Telefone:</strong> {user!.phone}
            </Text>
            <Text>
              <strong>Numero de registro:</strong> 1212-20
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
