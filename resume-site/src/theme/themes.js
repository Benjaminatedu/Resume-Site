// src/theme/themes.js
import { extendTheme, keyframes } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#EDF0E5',
    secondary: '#D5DBCC',
    background: '#EDF0E5',
    backgroundSecondary: '#117D62',
    text: '#201513',
    textSecondary: '#252B23',
    highlight: '#117D62',
    highlightSecondary: '#0D1951',
  },
};

// Define the blinking cursor animation using Chakra's keyframes utility
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const theme = extendTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        bg: 'brand.background',
        color: 'brand.text',
      },
      // Apply the animation globally or to specific classes as needed
      '.blink': {
        animation: `${blink} 1s step-end infinite`,
      },
    },
  },
});

export default theme;
