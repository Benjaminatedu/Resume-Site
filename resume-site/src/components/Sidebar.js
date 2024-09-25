// src/components/Sidebar.js
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
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

const Sidebar = ({ isOpen, onClose }) => {
  return (
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
  );
};

export default Sidebar;
