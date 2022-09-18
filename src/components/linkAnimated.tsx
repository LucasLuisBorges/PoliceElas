import { Link, Tooltip, LinkProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps extends LinkProps {
  children: ReactNode;
  tooltip?: string;
}

export function LinkIconAnimated({ children, tooltip, ...rest }: IProps) {
  return (
    <Tooltip
      label={tooltip}
      placement="right-end"
      color="black"
      bg="whiteAlpha.800"
    >
      <Link
        {...rest}
        pos="relative"
        _after={{
          content: `""`,
          pos: 'absolute',
          backgroundColor: 'blue.200',
          height: '3px',
          width: '0%',
          left: 0,
          bottom: '-10px',
          transition: '0.3s',
        }}
        _hover={{
          _after: {
            width: '100%',
          },
        }}
      >
        {children}
      </Link>
    </Tooltip>
  );
}
