import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {},
  breakpoints: {
    ssm: '480px',
    sm: '600px',
    md: '801px',
    lg: '1054px',
    xl: '1280px',
  },
  styles: {
    global: {
      body: {
        background: '#fff',
        color: '#000',
        boxSizing: 'border-box',
      },
      'body::-webkit-scrollbar-thumb': {
        backgroundColor: '#7C7C8A',
        borderRadius: '20px',
      },
      'body::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#7C7C6A',
      },
      'body::-webkit-scrollbar': {
        width: '3px',
      },
      '*': {
        margin: 0,
        padding: 0,
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'blue.600',
        borderRadius: '20px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#7C7C6A',
      },
      '*::-webkit-scrollbar': {
        width: '3px',
      },
    },
  },
});

export default theme;
