import theme from 'theme';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { PusherContextProvider } from './context/PusherContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <PusherContextProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode="light" />
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </ChakraProvider>
        </BrowserRouter>
      </HelmetProvider>
    </PusherContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
