import {
  ChakraProvider,
  defaultSystem,
} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  // biome-ignore lint/style/noNonNullAssertion: since we control the HTML, we know this element exists
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
