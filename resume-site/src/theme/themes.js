import { extendTheme } from '@chakra-ui/react';

export const gradients = {
  headerGradient: 'linear(to-b, #0A654E, #20A76E)',
  footerGradient: 'linear(to-b, #20A76E, #0A654E)',
  // Add gradients for icons
  iconGradientLight: 'linear(to-r, #ffdf00, #f7c100)', // Light mode gradient for icons
  iconGradientDark: 'linear(to-r, #2d3748, #4a5568)',  // Dark mode gradient for icons
};

export const colors = {
  light: {
    primary: '#EDF0E5',
    secondary: '#D5DBCC',
    background: '#EDF0E5',
    backgroundSecondary: '#117D62',
    text: 'grey',
    textColor: '#FFFFFF',
    textSecondary: '#252B23',
    highlight: '#117D62',
    highlightSecondary: '#0D1951',
    iconColor: '#ffdf00', // Light mode color for icons
    headerFooter: '#FFFFFF',
  },
  dark: {
    primary: '#1A202C',
    secondary: '#2D3748',
    background: '#171923',
    backgroundSecondary: '#2C5282',
    text: 'grey',
    textColor: '#2F3937',
    textSecondary: '#E2E8F0',
    highlight: '#2C5282',
    highlightSecondary: '#4A5568',
    iconColor: '#4a5568', // Dark mode color for icons
    headerFooter: '#FFFFFF',
  },
};

const config = {
  initialColorMode: 'dark',  // This line sets the initial color mode to dark
  useSystemColorMode: false, // Disable system color mode so it always starts in dark mode
};

const theme = extendTheme({
  config,
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
