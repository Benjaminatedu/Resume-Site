// src/components/Footer.js
import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  // Apply the vertical gradient from #0A654E to #20A76E
  const footerGradient = 'linear(to-b, #0A654E, #20A76E)'; // Gradient direction from top to bottom
  const textColor = '#FFFFFF'; // White text for good contrast against the gradient

  return (
    <Box
      as="footer"
      bgGradient={footerGradient} // Apply the gradient background
      color={textColor}
      py={4}
      w="100%"
      borderTop="1px solid"
      borderColor="rgba(255, 255, 255, 0.3)" // Subtle border for a clean finish
    >
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto" px={4}>
        <Text fontSize="md">© 2024 Benjamin Bell</Text>
        <Flex gap={4}>
          <Link href="/resume" _hover={{ textDecoration: 'underline' }}>
            Resume
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
