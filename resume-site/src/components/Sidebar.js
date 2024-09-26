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
  useColorModeValue,
} from '@chakra-ui/react';
import { gradients } from '../theme/themes'; // Import gradients from your theme file

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
  // Define fully opaque backgrounds to avoid translucency
  const drawerBg = useColorModeValue('brand.background', 'brand.backgroundSecondary');
  const headerGradient = gradients.headerGradient;

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={drawerBg}>
        <DrawerCloseButton />
        <DrawerHeader
          fontSize="3xl"
          borderBottomWidth="1px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          bgGradient={headerGradient} // Use the same gradient as the header
        >
          Menu
        </DrawerHeader>
        <DrawerBody bg={drawerBg}>
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
