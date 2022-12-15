import theme from 'theme';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import { BrowserTracing } from '@sentry/tracing';
import * as Sentry from '@sentry/react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { PusherContextProvider } from './context/PusherContext';

const queryClient = new QueryClient();

const initSentry = () => {
  if (process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview') {
    console.log('sentry initialized');
    Sentry.init({
      dsn: 'https://482e35ccc1c3471b86af0c359112f6ad@o522080.ingest.sentry.io/4504274587549696',
      integrations: [new BrowserTracing()],
      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
    });
  }
};

const initLogRocket = () => {
  if (process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview') {
    console.log('logrocket initialized');
    LogRocket.init('qmt5ka/impakt');
    setupLogRocketReact(LogRocket);
  }
};

initSentry();
initLogRocket();

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
