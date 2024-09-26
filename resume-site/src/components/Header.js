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
      {/* Menu Button modified for transparency */}
      <Button
        onClick={onOpen}
        bg="transparent"
        _hover={{
          bg: 'transparent', // Ensures it remains transparent on hover
          transform: 'scale(1.5)', // Scales text on hover
          transition: 'transform 0.4s ease-in-out',
        }}
        _active={{
          transform: 'scale(0.95)', 
          transition: 'transform 0.4s ease-in-out',
        }}
        color="white"
        fontSize="3xl"
        height="7vh"
        width="8vw"
        transition="all 0.4s ease-in-out"
        border="none" // Removes any borders
        boxShadow="none" // Removes any default button shadows
      >
        Menu
      </Button>

      {/* Include Sidebar with its drawer controlled from Header */}
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
