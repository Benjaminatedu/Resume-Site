// src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import topography from '../assets/aaabstractlight.webp'; // Ensure this path is correct
import TypewriterText from '../components/TypewriterText'; // Import the TypewriterText component

const Home = () => {
  const textColor = useColorModeValue('grey');

  return (
    <Box
      bg="transparent"
      minHeight="100vh"
      color={textColor}
      overflowX="hidden"
      p="0"
      m="0"
      position="relative"
    >
      {/* Background Image Layer */}
      <Box
        as="section"
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bgImage={`url(${topography})`}
        bgSize="cover"
        bgRepeat="repeat"
        bgPosition="center"
        zIndex="-1"
        pointerEvents="none"
      />

      {/* Header and Typewriter Text positioned higher and further to the right */}
      <Flex
        align="baseline"
        mb={4}
        position="absolute"
        top="10%" // Adjust this value to position it higher on the screen
        zIndex="2"
      >
        <Heading as="h1" fontSize="4xl" fontWeight='regular' mr={2} color={textColor}>
          Benjamin Bell:
        </Heading>

        {/* Typewriter Text Container with fixed width */}
        <Box
          display="flex"
          alignItems="baseline"
          width="250px" // Fixed width based on the longest word
          height="48px"
          textAlign="left"
          whiteSpace="nowrap"
        >
          <TypewriterText color={textColor} fontSize="4xl" fontWeight="light" />
        </Box>
      </Flex>

      {/* Main Content Section */}
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        textAlign="center"
        maxWidth="600px"
        mx="auto"
        minHeight="100vh"
        position="relative"
        zIndex="1"
      >
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
