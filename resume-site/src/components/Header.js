// src/components/Header.js
import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  // Define gradient backgrounds using the updated colors for a vertical direction
  const headerGradient = useColorModeValue(
    'linear(to-b, #0A654E, #20A76E)', // Gradient from top (#0A654E) to bottom (#20A76E)
    'linear(to-b, #0A654E, #20A76E)'  // Same gradient for dark mode for consistency
  );
  const textColor = useColorModeValue('#FFFFFF', '#FFFFFF'); // White text to ensure readability

  return (
    <Flex
      as="header"
      bgGradient={headerGradient} // Apply the vertical gradient background
      padding="4"
      align="center"
      justify="center"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.3)" // Subtle border color for added separation
    >
      <Text color={textColor} fontWeight="bold" fontSize="2xl">
        Benjamin Bell
      </Text>
    </Flex>
  );
};

export default Header;
