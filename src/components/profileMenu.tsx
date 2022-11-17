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
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowDown, IoMdHelp } from 'react-icons/io';

interface ProfileMenuProps {
  name: string;
  urlImage: string;
  onMyAccount: () => void;
  onHelp: () => void;
}

export function ProfileMenu({
  name,
  urlImage,
  onMyAccount,
  onHelp,
}: ProfileMenuProps) {
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
        <MenuItem minH="48px" gap={2} onClick={onMyAccount}>
          <AiOutlineUser size={24} color="black" />
          <span>Minha conta</span>
        </MenuItem>
        <MenuItem minH="40px" gap={2} onClick={onHelp}>
          <IoMdHelp size={24} color="black" />
          <span>Ajuda</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
