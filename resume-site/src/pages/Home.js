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

      {/* Header and Typewriter Text positioned higher with responsive scaling */}
      <Flex
        align="baseline"
        mb={4}
        position="absolute"
        top="5%" // Adjust this value to control how high it appears on the screen
        right="10%" // Optional: adjust if you want slight right alignment
        zIndex="2"
      >
        <Heading
          as="h1"
          fontSize={{ base: '6vw', md: '3xl', lg: '4xl' }} // Responsive font sizes for scaling
          fontWeight="bold"
          mr={2}
          color={textColor}
        >
          Benjamin Bell:
        </Heading>

        {/* Typewriter Text Container with responsive font size */}
        <Box
          display="flex"
          alignItems="baseline"
          width={{ base: '150px', md: '250px' }} // Adjust width responsively
          height="48px"
          textAlign="left"
          whiteSpace="nowrap"
        >
          <TypewriterText
            color={textColor}
            fontSize={{ base: '6vw', md: '3xl', lg: '4xl' }} // Match responsive scaling
            fontWeight="bold"
          />
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
