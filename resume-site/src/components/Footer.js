// src/components/Footer.js
import React from 'react';
import { Box, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerBackground = useColorModeValue('brand.backgroundSecondary', '#6A7164');
  const textColor = useColorModeValue('brand.background');

  return (
    <Box bg={footerBackground} color={textColor} py={4}>
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        px={4}
        wrap="wrap"
      >
        <Text fontSize="lg">
          © 2024 Benjamin Bell
        </Text>

        <Flex gap={4}>
          {/* Update Links for Hash Routing */}
          <Link href="#/" _hover={{ textDecoration: 'underline' }}>
            Home
          </Link>
          <Link href="#/about" _hover={{ textDecoration: 'underline' }}>
            About
          </Link>
          <Link href="#/projects" _hover={{ textDecoration: 'underline' }}>
            Projects
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
