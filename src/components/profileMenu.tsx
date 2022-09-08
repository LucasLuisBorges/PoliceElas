import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  HStack,
  Text,
} from '@chakra-ui/react';
import { IoIosArrowDown } from 'react-icons/io';

interface ProfileMenuProps {
  name: string;
  urlImage: string;
}

export function ProfileMenu({ name, urlImage }: ProfileMenuProps) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />} bg="white">
        <HStack>
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={urlImage}
            alt="profile image"
            mr="12px"
          />
          <Text>{name}</Text>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/100/100"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span>Minha conta</span>
        </MenuItem>
        <MenuItem minH="40px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/120/120"
            alt="Simon the pensive"
            mr="12px"
          />
          <span>Ajuda</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
