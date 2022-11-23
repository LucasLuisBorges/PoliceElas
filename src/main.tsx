import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import { TableContextProvider } from './context/tableContext';
import { Router } from './routes';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <TableContextProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </TableContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
