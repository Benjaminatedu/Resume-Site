// src/components/Header.js
import React from 'react';
import { Flex, Button, useDisclosure, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar'; // Import Sidebar to use its drawer
import { gradients, colors } from '../theme/themes'; // Import gradients from the theme file
import ColorModeSwitcher from './ColorModeSwitcher'; // Correctly import as default

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      bgGradient={gradients.headerGradient}
      padding={{ base: '2', md: '4' }} // Responsive padding
      align="center"
      justify="center" // Center the content
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.3)"
      height={{ base: '10vh', md: '7vh' }} // Scale header height relative to the viewport
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
          transform: 'scale(1.1)', // Adjust scale for hover effect
          transition: 'transform 0.4s ease-in-out',
        }}
        _active={{
          transform: 'scale(0.95)',
          transition: 'transform 0.1s ease-in-out',
        }}
        color={colors.headerFooter}
        fontSize={{ base: 'md', md: 'lg' }} // Responsive font size
        height={{ base: '8vh', md: '7vh' }} // Scale button height relative to header
        width={{ base: '12vw', md: '8vw' }} // Responsive button width
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
