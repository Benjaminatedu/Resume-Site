// src/components/Header.js
import React from 'react';
import { Flex, Button, useDisclosure, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar'; // Import Sidebar to use its drawer
import { gradients } from '../theme/themes'; // Import gradients from the theme file
import ColorModeSwitcher from './ColorModeSwitcher'; // Correctly import as default

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      bgGradient={gradients.headerGradient}
      padding="4"
      align="center"
      justify="center" // Center the content
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.3)"
      height="7vh"
    >
      {/* Box to help position elements independently */}
      <Box position="absolute" left="1rem">
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </Box>

      {/* Centered Menu Button */}
      <Button
        onClick={onOpen}
        bg="transparent"
        _hover={{
          bg: 'transparent',
          transform: 'scale(1.1)',
          transition: 'transform 0.2s ease-in-out',
        }}
        _active={{
          transform: 'scale(0.95)',
          transition: 'transform 0.1s ease-in-out',
        }}
        color="white"
        fontSize="lg"
        height="7vh"
        width="8vw"
        transition="all 0.2s ease-in-out"
        border="none"
        boxShadow="none"
      >
        Menu
      </Button>

      {/* Positioned Color Mode Switcher */}
      <Box position="absolute" right="1rem">
        <ColorModeSwitcher />
      </Box>
    </Flex>
  );
};

export default Header;
