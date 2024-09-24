// src/components/Footer.js
import React from 'react';
import { Box, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  const footerBackground = useColorModeValue('brand.highlightSecondary', '#6A7164');
  const textColor = useColorModeValue('brand.background');

  return (
    <Box
      as="footer"
      bg={footerBackground}
      color={textColor}
      py={4}
      w="100vw" // Ensure the footer takes the full width of the viewport
      position="fixed" // Position the footer at the bottom
      bottom="0"
      left="0" // Align the footer with the start of the viewport
      zIndex="5" // Ensure the footer is above other elements if needed
      borderTop="1px Solid"
      borderColor={textColor}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        px={4}
        wrap="wrap"
      >
        <Text fontSize="md">© 2024 Benjamin Bell</Text>

        <Flex gap={4}>
          <Link href="/Resume-Site/#/about" _hover={{ textDecoration: 'underline' }}>
            About
          </Link>
        </Flex>

        <Flex gap={4}>
          <Link href="https://github.com/Benjaminatedu" isExternal>
            <FaGithub size="20px" />
          </Link>
          <Link href="https://www.linkedin.com/in/benjamin-bell-11231b230/" isExternal>
            <FaLinkedin size="20px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
