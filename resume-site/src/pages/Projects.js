// src/pages/Projects.js
import React from 'react';
import { Box, Grid, GridItem, Image, Text, useColorModeValue, Link } from '@chakra-ui/react';

// Sample data for projects - replace this with your actual project data
const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with your project image URLs
    url: 'https://github.com/', // Replace with your GitHub project URL
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    imageUrl: 'https://via.placeholder.com/300',
    url: 'https://github.com/',
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3.',
    imageUrl: 'https://via.placeholder.com/300',
    url: 'https://github.com/',
  },
  {
    title: 'Project 4',
    description: 'A brief description of project 4.',
    imageUrl: 'https://via.placeholder.com/300',
    url: 'https://github.com/',
  },
  // Add more projects as needed
];

const Projects = () => {
  // Define colors from your theme
  const cardBackground = useColorModeValue('brand.backgroundSecondary', '#EDF0E5');
  const textColor = useColorModeValue('brand.text', '#000000');

  return (
    <Box p="6">
      {/* Gallery Title */}
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="6" color={textColor}>
        My Projects
      </Text>

      {/* Project Blurb */}
      <Box mb="6" textAlign="center">
        <Text fontSize="lg" color={textColor}>
          Welcome to my Projects page! Here, you'll find a showcase of my latest work,
          including web development, design projects, and other creative endeavors. Each
          project reflects my skills and passion for creating innovative solutions. Explore
          the gallery below to learn more about each project and see how I bring ideas to life.
        </Text>
      </Box>

      {/* Gallery Layout */}
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            isExternal
            _hover={{ textDecoration: 'none' }}
          >
            <GridItem
              bg={cardBackground}
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
            >
              <Image src={project.imageUrl} alt={project.title} w="100%" h="200px" objectFit="cover" />
              <Box p="4">
                <Text fontSize="xl" fontWeight="bold" color={textColor}>
                  {project.title}
                </Text>
                <Text mt="2" color={textColor}>
                  {project.description}
                </Text>
              </Box>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
