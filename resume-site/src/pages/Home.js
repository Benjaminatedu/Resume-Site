// src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import topography from '../assets/aaabstractlight.webp'; // Ensure this path is correct

const Home = () => {
  const text = useColorModeValue('brand.text', '#EDF0E5');

  return (
    <Box bg="transparent" minHeight="100vh" color={text} overflowX="hidden" p="0" m="0" position="relative">
      {/* Background Image Layer */}
      <Box
        as="section"
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bgImage={`url(${topography})`}
        bgSize="cover"
        bgRepeat="repeat"
        bgPosition="center"
        opacity="1"
        zIndex="-1" // Ensure it stays behind all content
        pointerEvents="none"
      />

      {/* Main Content Section with Transparent Background */}
      <Flex
        alignItems="center"
        justifyContent="center"
        p="0" // Ensure no padding creates an unwanted background
        m="0" // Remove any margin that could create an unwanted effect
        flexDirection="column"
        textAlign="center"
        maxWidth="600px"
        mx="auto"
        minHeight="100vh"
        position="relative"
        zIndex="1"
        bg="transparent" // Ensures the content box is fully transparent
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
