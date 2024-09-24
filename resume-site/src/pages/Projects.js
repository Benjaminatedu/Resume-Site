// src/pages/Projects.js
import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard'; // Import the ProjectCard component
import projects from '../components/ProjectList'; // Correctly import the project list

const Projects = () => {
  return (
    <Box p={6}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        My Projects
      </Text>

      <Box mb={6} textAlign="center">
        <Text fontSize="lg">
          Welcome to my Projects page! Here, you'll find a showcase of my latest work, including web
          development, design projects, and other creative endeavors. Each project reflects my skills
          and passion for creating innovative solutions. Explore the gallery below to learn more about
          each project and see how I bring ideas to life.
        </Text>
      </Box>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            url={project.url}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
