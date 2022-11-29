import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

interface MyAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  full_name: string;
  social_name: string;
  status: string;
  address: string;
  cep: number;
  complement: string;
  cpf: number;
  email: string;
  gender: string;
  phone: string;
}

export function MyProfileModal({
  isOpen,
  onClose,
  full_name,
  social_name,
  address,
  cep,
  complement,
  cpf,
  email,
  gender,
  phone,
  status,
}: MyAccountModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent p={25}>
        <ModalHeader>Informações da chamada</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="start" spacing={5}>
            <HStack w="100%" justifyContent="space-between">
              <Text bg="#f3efef" p={2} rounded={15}>
                <strong>Nome:</strong> {full_name}
              </Text>
              <Text bg="#f3efef" p={2} rounded={15}>
                <strong>Nome social:</strong> {social_name}
              </Text>
            </HStack>
            <Text bg="#f3efef" p={2} rounded={15}>
              <strong>Email:</strong> {email}
            </Text>
            <Text bg="#f3efef" p={2} rounded={15}>
              <strong>Telefone:</strong> {phone}
            </Text>
            <HStack w="100%" justifyContent="space-between">
              <Text bg="#f3efef" p={2} rounded={15}>
                <strong>Endereço:</strong> {address}
              </Text>

              <Text bg="#f3efef" p={2} rounded={15}>
                <strong>Cep:</strong> {cep}
              </Text>
            </HStack>
            <Text bg="#f3efef" p={2} rounded={15}>
              <strong>Complemento:</strong> {complement}
            </Text>
            <Text bg="#f3efef" p={2} rounded={15}>
              <strong>Genero:</strong> {gender}
            </Text>
            <HStack w="100%" justifyContent="space-between">
              <Text bg="#f3efef" p={2} rounded={15}>
                <strong>Cpf:</strong> {cpf}
              </Text>
              <Text bg="#f3efef" p={2} rounded={15}>
                <strong>Status:</strong> {status}
              </Text>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
