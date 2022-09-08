import { Box, Button } from '@chakra-ui/react';
import { BsFillBellFill } from 'react-icons/bs';

interface BellNotificationProps {
  isNotification: boolean;
}

export function BellNotification({ isNotification }: BellNotificationProps) {
  return (
    <Button bg="transparent">
      <Box pos="relative">
        {isNotification && (
          <Box
            pos="absolute"
            right={0}
            w="8px"
            h="8px"
            rounded="full"
            bg="red.400"
          />
        )}
        <BsFillBellFill size={24} color="gray" />
      </Box>
    </Button>
  );
}
