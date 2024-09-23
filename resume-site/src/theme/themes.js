// src/theme/themes.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#EDF0E5',             // Light, soft green-grey
    secondary: '#D5DBCC',           // A slightly darker variation for contrast
    background: '#EDF0E5',          // Page background
    backgroundSecondary: '#6A7164', // Dark olive green for the header
    text: '#201513',                // Black text for high contrast
    textSecondary: '#252B23',       // Darker grey-green for less emphasis
    highlight: '#718F6B',           // Medium green for highlighting elements
    highlightSecondary: '#5C6555',  // A slightly muted green for subtle highlights
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        bg: 'brand.background',     // Light background for readability
        color: 'brand.text',        // Set text to black for strong contrast
      },
    },
  },
});

export default theme;
