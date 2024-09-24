// src/components/Sidebar.js
import React from 'react';
import {Flex, Button, Link, Divider, useColorModeValue} from '@chakra-ui/react';

// Reusable ButtonLink component styled as boxes
const ButtonLink = ({ href, label, bg, color }) => (
  <Link href={href} style={{ textDecoration: 'none', width: '100%' }}>
    <Button
      variant="ghost"
      color={color}
      width="100%" // Make the button full width
      _hover={{ bg: bg, opacity: 0.8 }}
      borderRadius="none" // Remove button border-radius to fit the box style
      py="6" // Increase padding for a box-like appearance
    >
      {label}
    </Button>
  </Link>
);

const Sidebar = () => {
  const sidebarBackground = useColorModeValue('brand.backgroundSecondary', '#6A7164');
  const buttonBackground = useColorModeValue('brand.highlight', '#EDF0E5');
  const textColor = useColorModeValue('brand.background', '#000000');
  const borderColor = useColorModeValue('gray.300', 'gray.700');

  return (
    <Flex
      as="nav"
      direction="column"
      bg={sidebarBackground}
      p="4"
      h="100vh" // Ensures the sidebar extends fully from top to bottom
      w="12.5vw" // 1/8th of the viewport width
      position="sticky"
      top="0"
      borderRight="1px solid" // Add a border to the right side of the sidebar
      borderColor={borderColor} // Dynamic border color based on theme
    >

      {/* Vertical Navigation Links with Dividers */}
      <Flex direction="column" gap="0">
        <Divider border="1px Solid" borderColor={borderColor} />
        <ButtonLink href="/Resume-Site/#/" label="Home" bg={buttonBackground} color={textColor} />
        <Divider border="1px Solid" borderColor={borderColor} /> {/* Add a horizontal line */}
        <ButtonLink href="/Resume-Site/#/projects" label="Projects" bg={buttonBackground} color={textColor} />
        <Divider border="1px Solid" borderColor={borderColor} />
        <ButtonLink href="/Resume-Site/#/about" label="About" bg={buttonBackground} color={textColor} />
        <Divider border="1px Solid" borderColor={borderColor} /> {/* Add a horizontal line */}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
