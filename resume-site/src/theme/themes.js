// src/theme/themes.js
import { extendTheme, keyframes } from '@chakra-ui/react';

export const gradients = {
  headerGradient: 'linear(to-b, #0A654E, #20A76E)',
  footerGradient: 'linear(to-t, #20A76E, #0A654E)',
};

export const colors = {
  light: {
    primary: '#EDF0E5',
    secondary: '#D5DBCC',
    background: '#EDF0E5',
    backgroundSecondary: '#117D62',
    text: '#201513',
    textColor: '#FFFFFF',
    textSecondary: '#252B23',
    highlight: '#117D62',
    highlightSecondary: '#0D1951',
  },
  dark: {
    primary: '#1A202C',
    secondary: '#2D3748',
    background: '#171923',
    backgroundSecondary: '#2C5282',
    text: '#F7FAFC',
    textColor: '#A0AEC0',
    textSecondary: '#E2E8F0',
    highlight: '#2C5282',
    highlightSecondary: '#4A5568',
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: (props) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? colors.dark.background : colors.light.background,
        color: props.colorMode === 'dark' ? colors.dark.text : colors.light.text,
      },
    }),
  },
});

export default theme;
