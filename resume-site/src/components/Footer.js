// src/components/Footer.js
import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { gradients, colors } from '../theme/themes'; // Import gradients and colors from the theme file

const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient={gradients.footerGradient} // Use the modular gradient
      color={colors.textColor}
      py={4}
      w="100%"
      borderTop="1px solid"
      borderColor="rgba(255, 255, 255, 0.3)" // Subtle border for a clean finish
    >
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto" px={4}>
        <Text fontSize="md">© 2024 Benjamin Bell</Text>
        <Flex gap={4}>
          <Link
            href="/resume"
            _hover={{
              textDecoration: 'underline',
              transform: 'scale(1.1)', // Scale up on hover
              transition: 'transform 0.2s ease-in-out', // Smooth transition
            }}
          >
            <Text fontWeight="bold">Resume</Text>
          </Link>
        </Flex>
        <Flex gap={4}>
          <Link
            href="https://github.com/Benjaminatedu"
            isExternal
            _hover={{
              transform: 'scale(1.1)', // Scale up on hover
              transition: 'transform 0.2s ease-in-out', // Smooth transition
            }}
          >
            <FaGithub size="20px" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/benjamin-bell-11231b230/"
            isExternal
            _hover={{
              transform: 'scale(1.1)', // Scale up on hover
              transition: 'transform 0.2s ease-in-out', // Smooth transition
            }}
          >
            <FaLinkedin size="20px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
