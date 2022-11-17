import { VStack, Box } from '@chakra-ui/react';
import {
  AiFillAppstore,
  AiFillContainer,
  AiFillHome,
  AiFillPhone,
  AiFillTool,
} from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
import { animatedBox, MotionBox } from '../animations/verticalMenuAnamation';
import { LinkIconAnimated } from './';

export function VerticalMenu() {
  return (
    <VStack
      w="80px"
      h="100vh"
      bg="blue.600"
      borderTopRightRadius={20}
      borderBottomRightRadius={20}
      spacing={10}
      zIndex={100}
    >
      <Box py={20}>
        <MotionBox variants={animatedBox} initial="hidden" whileHover="visible">
          <AiFillAppstore size={34} color="white" />
        </MotionBox>
      </Box>

      <LinkIconAnimated href="/" tooltip="Inicio">
        <AiFillHome size={24} color="white" />
      </LinkIconAnimated>

      <LinkIconAnimated href="/history" tooltip="Histórico">
        <AiFillContainer size={24} color="white" />
      </LinkIconAnimated>

      <LinkIconAnimated tooltip="Chamadas">
        <AiFillPhone size={24} color="white" />
      </LinkIconAnimated>

      <LinkIconAnimated tooltip="Configurações">
        <AiFillTool size={24} color="white" />
      </LinkIconAnimated>

      <LinkIconAnimated href="/login" tooltip="Sair">
        <ImExit size={24} color="white" />
      </LinkIconAnimated>
    </VStack>
  );
}
