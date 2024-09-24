// src/components/ProjectCard.js
import React from 'react';
import { Box, Image, Text, useColorModeValue, Link, GridItem } from '@chakra-ui/react';

const ProjectCard = ({ title, description, imageUrl, url }) => {
  const cardBackground = useColorModeValue('brand.backgroundSecondary', '#EDF0E5');
  const textColor = useColorModeValue('brand.text', '#000000');

  return (
    <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
      <GridItem
        bg={cardBackground}
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
