import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter for GitHub Pages
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import theme from './theme/themes';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router> {/* Use HashRouter to handle the paths correctly */}
        <App />
      </Router>
    </ChakraProvider>
  </StrictMode>
);

serviceWorker.unregister();
reportWebVitals();
