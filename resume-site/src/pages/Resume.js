// src/pages/Resume.js
import React from 'react';
import { Box, Heading, Text, VStack, Stack } from '@chakra-ui/react';

const Resume = () => {
  return (
    <VStack spacing={8} align="center" py={10}>
      <Box textAlign="center" maxW="800px">
        <Heading as="h1" size="2xl" mb={4}>
          My Resume
        </Heading>
        <Text fontSize="lg">
          Here is my professional background and experience. Download or view the detailed PDF below for a comprehensive overview of my work.
        </Text>
      </Box>

      <Stack spacing={6} justify="center">
        <Box>
          <Heading as="h2" size="md" mb={2}>Experience Overview</Heading>
          <Text>
            My journey includes roles at Solution Stream, The Insurance Box, and BYU-Pathways, where I developed key technical and leadership skills.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="md" mb={2}>Skills</Heading>
          <Text>Proficient in React, Python, AWS, GitHub, and more.</Text>
        </Box>
      </Stack>

      {/* PDF Viewer Section */}
      <Box width="100%" maxW="800px" height="500px" mt={8}>
        <embed
          src="/resume.pdf" // Ensure this path correctly reflects the location of your PDF
          width="100%"
          height="100%"
          type="application/pdf"
        />
      </Box>
    </VStack>
  );
};

export default Resume;
