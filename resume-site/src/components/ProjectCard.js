// src/components/ProjectCard.js
import React from 'react';
import { Box, Image, Text, Link, GridItem, useColorModeValue } from '@chakra-ui/react';

const ProjectCard = ({ title, description, imageUrl, url }) => {
  // Define gradients and text colors based on the current color mode
  const cardGradient = useColorModeValue(
    'linear(to-r, #0A654E, #20A76E)', // Light mode gradient
    'linear(to-r, #1A202C, #2D3748)'  // Dark mode gradient
  );
  const textColor = useColorModeValue('black', 'white');

  return (
    <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
      <GridItem
        bgGradient={cardGradient} // Apply the dynamic gradient background
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
      >
        <Image src={imageUrl} alt={title} w="100%" h="200px" objectFit="cover" />
        <Box p={4}>
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            {title}
          </Text>
          <Text mt={2} color={textColor}>
            {description}
          </Text>
        </Box>
      </GridItem>
    </Link>
  );
};

export default ProjectCard;
