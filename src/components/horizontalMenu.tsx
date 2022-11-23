import { Box, HStack, useDisclosure } from '@chakra-ui/react';
import {
  BellNotification,
  ProfileMenu,
  SearchInputMenu,
  MyAccountModal,
  HelpModal,
} from './';

export function HorizontalMenu() {
  const {
    isOpen: isOpenAccountModal,
    onOpen: onOpenAccountModal,
    onClose: onCloseAccountModal,
  } = useDisclosure();

  const {
    isOpen: isOpenHelpModal,
    onOpen: onOpenHelpModal,
    onClose: onCloseHelpModal,
  } = useDisclosure();

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
          onMyAccount={onOpenAccountModal}
          onHelp={onOpenHelpModal}
        />
      </HStack>
      <MyAccountModal
        isOpen={isOpenAccountModal}
        onClose={onCloseAccountModal}
      />
      <HelpModal isOpen={isOpenHelpModal} onClose={onCloseHelpModal} />
    </HStack>
  );
}
