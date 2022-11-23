import { Box, Flex, VStack } from '@chakra-ui/react';
import { HorizontalMenu, VerticalMenu } from '../components';
import { MainScreen } from './content/mainScreen';

export function Dashboard() {
  return (
    <Flex w="100%" maxH="100vh" bg="#f2f2f2" pos="relative">
      <VerticalMenu />
      <Box pos="absolute" w="100%">
        <HorizontalMenu />
      </Box>
      <VStack mt="5vh" w="80%" p={10} alignItems="start">
        <MainScreen />
      </VStack>
    </Flex>
  );
}
