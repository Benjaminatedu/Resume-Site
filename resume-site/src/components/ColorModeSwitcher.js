// src/components/ColorModeSwitcher.js
import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      position="relative"
      bg="transparent"
      color="white"
      _hover={{
        bg: 'transparent',
        transform: 'scale(1.1)',
        transition: 'transform 0.2s ease-in-out',
      }}
    />
  );
};

export default ColorModeSwitcher;
