import React, { useState, useEffect } from 'react';
import { Flex, Button, useDisclosure, Box, useColorModeValue } from '@chakra-ui/react';
import Sidebar from './Sidebar'; // Import Sidebar to use its drawer
import { gradients } from '../theme/themes'; // Import gradients from the theme file
import ColorModeSwitcher from './ColorModeSwitcher'; // Correctly import as default

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const headerFooter = useColorModeValue('light.headerFooter', 'dark.headerFooter')

  // Detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="header"
      bgGradient={gradients.headerGradient}
      padding={{ base: '2', md: '4' }} // Responsive padding
      align="center"
      justify="center" // Center the content
      position="fixed" // Fixed so it's always visible while scrolling
      top="0"
      width="100vw" // Full width to cover the top of the viewport
      zIndex="10"
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.3)"
      height={{ base: '10vh', md: '7vh' }} // Scale header height relative to the viewport
      opacity={isScrolled ? 0.3 : 1} // Change opacity on scroll
      transition="opacity 0.3s ease-in-out"
      _hover={{ opacity: 1 }} // Fully opaque on hover
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
        color={headerFooter}
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
