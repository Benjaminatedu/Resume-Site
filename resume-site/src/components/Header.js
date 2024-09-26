// src/components/Header.js
import React from 'react';
import { Flex, Button, useDisclosure } from '@chakra-ui/react';
import Sidebar from './Sidebar'; // Import Sidebar to use its drawer

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Define gradient backgrounds using updated colors for vertical direction
  const headerGradient = 'linear(to-b, #0A654E, #20A76E)';
  
  return (
    <Flex
      as="header"
      bgGradient={headerGradient}
      padding="4"
      align="center"
      justify="center" // Adjust to place content on opposite sides
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.3)"
      height="7vh"
    >

      {/* Menu Button moved to Header */}
      <Button
        onClick={onOpen}
        bgGradient="linear(to-b, #0A654E, #20A76E)"
        _hover={{ bgGradient: 'linear(to-b, #0A654E, #20A76E)', transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out' }}
        _active={{ transform: 'scale(0.95)', transition: 'transform 0.1s ease-in-out' }}
        color="white"
        fontSize="lg"
        height="7vh"
        width="8vw"
        transition="all 0.2s ease-in-out"
        background='transparent'
      >
        Menu
      </Button>

      {/* Include Sidebar with its drawer controlled from Header */}
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
