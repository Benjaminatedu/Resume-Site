// src/components/ProjectCard.js
import React from 'react';
import { Box, Image, Text, Link, GridItem } from '@chakra-ui/react';

const ProjectCard = ({ title, description, imageUrl, url }) => {
  // Define the gradient background similar to header and footer
  const cardGradient = 'linear(to-t, #0A654E, #20A76E)';
  const textColor = '#FFFFFF'; // White text to ensure readability on the gradient

  return (
    <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
      <GridItem
        bgGradient={cardGradient} // Apply the gradient background
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
