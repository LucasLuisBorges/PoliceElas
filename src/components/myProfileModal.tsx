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

export function MyProfileModal({ isOpen, onClose }: MyAccountModalProps) {
  const { user } = useContext(AuthContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informações da chamada</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="start" spacing={5}>
            <Text>
              <strong>Nome:</strong> {user!.full_name}
            </Text>
            <Text>
              <strong>Email:</strong> {user!.email}
            </Text>
            <Text>
              <strong>Telefone:</strong> {user!.phone}
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
