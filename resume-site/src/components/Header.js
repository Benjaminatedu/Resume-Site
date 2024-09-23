// src/components/Header.js
import React from 'react';
import { Box, Flex, Button, Link, useColorModeValue } from '@chakra-ui/react';

// Reusable ButtonLink component to avoid code repetition
const ButtonLink = ({ href, label, bg, color }) => (
  <Link href={href} style={{ textDecoration: 'none' }}>
    <Button
      variant="ghost"
      bg={bg}
      color={color}
      width="120px"
      _hover={{ bg: bg, opacity: 0.8 }}
    >
      {label}
    </Button>
  </Link>
);

const Header = () => {
  const headerBackground = useColorModeValue('brand.backgroundSecondary', '#6A7164');
  const buttonBackground = useColorModeValue('brand.highlight', '#EDF0E5');
  const textColor = useColorModeValue('brand.background', '#000000');

  return (
    <Flex
      as="header"
      bg={headerBackground}
      padding="4"
      align="center"
      justify="center"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Box
        color={textColor}
        fontWeight="bold"
        fontSize="lg"
        position="absolute"
        left="4"
      >
        Benjamin Bell
      </Box>

      <Flex gap="4">
        {/* Using the reusable ButtonLink component */}
        <ButtonLink href="/#" label="Home" bg={buttonBackground} color={textColor} />
        <ButtonLink href="/#about" label="About" bg={buttonBackground} color={textColor} />
        <ButtonLink href="/#projects" label="Projects" bg={buttonBackground} color={textColor} />
      </Flex>
    </Flex>
  );
};

export default Header;
