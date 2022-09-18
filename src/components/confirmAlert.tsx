import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import React from 'react';

interface ConfirmAlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export function ConfirmAlert({
  isOpen,
  onClose,
  title,
  message,
}: ConfirmAlertProps) {
  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{title}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Não
            </Button>
            <Button colorScheme="red" ml={3}>
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
