import React from 'react';
import { Box, Heading, Text, VStack, Stack } from '@chakra-ui/react';

const About = () => {
  return (
    <VStack spacing={8} align="center" py={10}>
      <Box textAlign="center" maxW="800px">
        <Heading as="h1" size="2xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">
          I am Benjamin Bell, a dedicated software engineer with a strong background in various programming languages and a passion for technology-driven solutions. 
          I have gained valuable experience in AI software development, backend engineering, and sales in the tech industry.
        </Text>
      </Box>

      <Stack spacing={6} justify="center">
        <Box>
          <Heading as="h2" size="md" mb={2}>Experience Overview</Heading>
          <Text>
            My professional journey has included internships and roles at Solution Stream, The Insurance Box, and BYU-Pathways, where I honed my technical and soft skills.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="md" mb={2}>Skills</Heading>
          <Text>Proficient in React, Python, C, AWS, GitHub, and more.</Text>
        </Box>
      </Stack>
    </VStack>
  );
};

export default About;
