import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BiSearchAlt2 } from 'react-icons/bi';
export function SearchInputMenu() {
  return (
    <Box>
      <InputGroup w="260px" _focusWithin={{ w: '300px' }} transition="1s">
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearchAlt2 size={24} color="gray" />}
        />
        <Input
          type="tel"
          placeholder="Buscar"
          rounded="full"
          bg="gray.100"
          focusBorderColor="gray"
          color="gray"
        />
      </InputGroup>
    </Box>
  );
}
