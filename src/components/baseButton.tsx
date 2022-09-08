import { Button, ButtonProps } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';

interface IButtonProps extends ButtonProps {
  title: string;
  type: 'button' | 'reset' | 'submit';
}

export function BaseButton({ title, type, ...rest }: IButtonProps) {
  return (
    <Button
      w="100%"
      color="white"
      bg="blue.600"
      py={7}
      _hover={{ bg: 'blue.500', transition: '0.5s' }}
      spinner={<BeatLoader size={8} color="white" />}
      type={type}
      {...rest}
    >
      {title}
    </Button>
  );
}
