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
import { gradients } from '../theme/themes';
import { FaHome, FaProjectDiagram, FaFilePdf, FaInfoCircle } from 'react-icons/fa'; // Importing icons

// Reusable button component for navigation links with icons and animation
const NavLinkButton = ({ href, children, icon, onClick }) => {
  const linkTextColor = useColorModeValue('dark.textColor', 'light.textColor'); // Changes with the theme

  return (
    <Button
      as="a"
      href={href}
      onClick={onClick}
      w="100%"
      bg="brand.highlightSecondary"
      _hover={{
        bg: 'brand.highlight',
        transform: 'scale(1.5)', // Scale up slightly on hover
        transition: 'transform 0.2s ease-in-out', // Smooth transition effect
      }}
      color={linkTextColor} // Dynamic text color for links
      leftIcon={icon} // Adding icon to the left of the button text
    >
      {children}
    </Button>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  // Set drawer background color
  const drawerBg = useColorModeValue('light.background', 'dark.background');
  const headerTextColor = 'white'; // Static color for the header text

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
          bgGradient={gradients.headerGradient}
          color={headerTextColor} // Fixed header text color
        >
          Menu
        </DrawerHeader>
        <DrawerBody bg={drawerBg}>
          <VStack align="start" spacing={4} w="100%">
            <NavLinkButton href="/Resume-Site/#/" icon={<FaHome />} onClick={onClose}>
              Home
            </NavLinkButton>
            <NavLinkButton href="/Resume-Site/#/projects" icon={<FaProjectDiagram />} onClick={onClose}>
              Projects
            </NavLinkButton>
            <NavLinkButton href="/Resume-Site/#/resume" icon={<FaFilePdf />} onClick={onClose}>
              Resume
            </NavLinkButton>
            <NavLinkButton href="/Resume-Site/#/about" icon={<FaInfoCircle />} onClick={onClose}>
              About
            </NavLinkButton>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
