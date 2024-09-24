// src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import heroImage from '../assets/heroimagetest.webp'; // Ensure this path is correct

const Home = () => {
  const background = useColorModeValue('brand.background', '#6A7164');
  const text = useColorModeValue('brand.text', '#EDF0E5');

  return (
    <Box bg={background} minHeight="100vh" color={text} overflowX="hidden" p="0" m="0">
      {/* Hero Image Section */}
      <Box
        as="section"
        width="100vw"
        height="400px"
        overflow="hidden"
        position="absolute" // Set to absolute to ensure it covers the full top
        top="0"
        left="0"
         // Places the image behind other content if necessary
      >
        <Image src={heroImage} alt="Hero Image" objectFit="cover" width="100vw" height="100%" />
      </Box>

      {/* Main Content Section with Header Text */}
      <Flex
        alignItems="center"
        justifyContent="center"
        p={8}
        flexDirection="column"
        textAlign="center"
        maxWidth="600px"
        mx="auto"
        mt="400px" // Ensures content appears below the hero image
      >
        <Heading as="h1" size="2xl" mb={4} fontWeight="bold">
          Welcome to My Portfolio
        </Heading>
        <Text fontSize="lg" mb={4}>
          Hi, I’m Benjamin Bell, a passionate software developer with a knack for designing intuitive
          and functional web applications. I specialize in front-end and back-end development,
          bringing creative ideas to life with clean, efficient code.
        </Text>
        <Text fontSize="md" mb={6}>
          Explore my latest projects, learn more about my skills, and feel free to reach out if
          you’d like to collaborate or discuss potential opportunities.
        </Text>
      </Flex>
    </Box>
  );
};

export default Home;
