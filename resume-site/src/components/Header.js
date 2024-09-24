// src/components/Header.js
import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  const headerBackground = useColorModeValue('brand.highlightSecondary', '#6A7164');
  const textColor = useColorModeValue('brand.background', '#000000');

  return (
    <Flex
      as="header"
      bg={headerBackground}
      padding="4"
      align="center"
      justify="center" // Center the content horizontally
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="1px solid"
      borderColor={textColor}
    >
      <Text color={textColor} fontWeight="bold" fontSize="2xl">
        Benjamin Bell
      </Text>
    </Flex>
  );
};

export default Header;
