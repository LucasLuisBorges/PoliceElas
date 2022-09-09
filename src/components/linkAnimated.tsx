import { Link, Tooltip } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps {
  link: string;
  children: ReactNode;
  tooltip?: string;
}

export function LinkIconAnimated({ children, link, tooltip }: IProps) {
  return (
    <Tooltip
      label={tooltip}
      placement="right-end"
      color="black"
      bg="whiteAlpha.800"
    >
      <Link
        pos="relative"
        href={link}
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
