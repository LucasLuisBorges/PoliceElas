import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Control, Controller } from 'react-hook-form';

interface BaseInputProps extends InputProps {
  children?: ReactNode;
  placeholder: string;
  control: Control<any>;
  name: string;
}

export function BaseInput({
  children,
  placeholder,
  control,
  name,
}: BaseInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none" children={children} />
            <Input
              size="lg"
              type="text"
              placeholder={placeholder}
              value={value || ''}
              onChange={onChange}
              _placeholder={{ color: 'blue.800' }}
              focusBorderColor="gray"
            />
          </InputGroup>
        );
      }}
    />
  );
}
