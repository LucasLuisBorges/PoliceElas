import { Box, HStack } from '@chakra-ui/react';
import { BellNotification } from './bellNotification';
import { ProfileMenu } from './profileMenu';
import { SearchInputMenu } from './searchInputMenu';

export function HorizontalMenu() {
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
        />
      </HStack>
    </HStack>
  );
}
