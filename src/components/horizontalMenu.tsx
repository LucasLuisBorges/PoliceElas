import { Box, HStack, useDisclosure } from '@chakra-ui/react';
import {
  BellNotification,
  ProfileMenu,
  SearchInputMenu,
  MyAccountModal,
  HelpModal,
} from './';

export function HorizontalMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      h="8vh"
      w="100%"
      minW="1100px"
      bg="white"
      justifyContent="space-between"
      px={10}
    >
      <Box />
      <HStack>
        <SearchInputMenu />
        <BellNotification isNotification={true} />
        <ProfileMenu
          name="Lucas Policial"
          urlImage="https://github.com/LucasLuisBorges.png"
          onMyAccount={onOpen}
          onHelp={onOpen}
        />
      </HStack>
      <MyAccountModal isOpen={isOpen} onClose={onClose} />
      <HelpModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
