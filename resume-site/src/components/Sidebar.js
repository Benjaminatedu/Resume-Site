// src/components/Sidebar.js
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

// Reusable button component for navigation links
const NavLinkButton = ({ href, children, onClick }) => (
  <Button
    as="a"
    href={href}
    onClick={onClick}
    w="100%"
    bg="brand.highlightSecondary"
    _hover={{ bg: 'brand.highlight' }}
    color="white"
  >
    {children}
  </Button>
);

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Button to open the sidebar with gradient background and animation */}
      <Button
        onClick={onOpen}
        position="fixed"
        zIndex="1000"
        bgGradient="linear(to-b, #0A654E, #20A76E)" // Gradient background
        _hover={{
          bgGradient: 'linear(to-b, #0A654E, #20A76E)',
          transform: 'scale(1.05)', // Slightly enlarge the button on hover
          transition: 'transform 0.2s ease-in-out', // Smooth transition effect
        }}
        _active={{
          transform: 'scale(0.95)', // Slightly shrink the button when clicked
          transition: 'transform 0.1s ease-in-out',
        }}
        color="white"
        fontSize="2xl"
        height="7vh"
        width="8vw"
        transition="all 0.2s ease-in-out" // Base transition for smooth animations
      >
        Menu
      </Button>

      {/* Drawer component for the sidebar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.background">
          <DrawerCloseButton />
          <DrawerHeader
            fontSize="3xl"
            borderBottomWidth="1px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            Menu
          </DrawerHeader>
          <DrawerBody bg="brand.background">
            <VStack align="start" spacing={4} w="100%">
              {/* Navigation links using the reusable NavLinkButton component */}
              <NavLinkButton href="/Resume-Site/#/" onClick={onClose}>
                Home
              </NavLinkButton>
              <NavLinkButton href="/Resume-Site/#/projects" onClick={onClose}>
                Projects
              </NavLinkButton>
              <NavLinkButton href="/Resume-Site/#/resume" onClick={onClose}>
                Resume
              </NavLinkButton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
