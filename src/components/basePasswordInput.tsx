import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface BasePasswordInputProps {
  children?: ReactNode;
  placeholder: string;
  control: Control<any>;
  name: string;
}

export function BasePasswordInput({
  children,
  placeholder,
  control,
  name,
}: BasePasswordInputProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <InputGroup size="lg">
            <Input
              type={show ? 'text' : 'password'}
              placeholder={placeholder}
              _placeholder={{ color: 'blue.800' }}
              focusBorderColor="gray"
              value={value || ''}
              onChange={onChange}
            />
            <InputLeftElement pointerEvents="none" children={children} />
            <InputRightElement width="4.5rem">
              <Button
                size="sm"
                onClick={handleClick}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
              >
                {show ? (
                  <AiFillEyeInvisible color="gray" size={24} />
                ) : (
                  <AiFillEye color="gray" size={24} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        );
      }}
    />
  );
}
