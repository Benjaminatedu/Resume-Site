// src/pages/Home.js
import React from 'react';
import { Box, Heading, Flex, useColorModeValue, Image } from '@chakra-ui/react';
import TypewriterText from '../components/TypewriterText';
import lightBackground from '../assets/aaabstractlight.webp';
import darkBackground from '../assets/aaabstractdark.webp';
import profileLight from '../assets/profilelight.PNG';
import profileDark from '../assets/profiledark.PNG';

const Home = () => {
  const textColor = useColorModeValue('grey', 'white');
  const bgImage = useColorModeValue(lightBackground, darkBackground);
  const profileImage = useColorModeValue(profileLight, profileDark);

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
        bgImage={`url(${bgImage})`}
        bgSize={{ base: 'cover', md: 'contain', lg: 'cover' }}
        bgRepeat="no-repeat"
        bgPosition="center"
        zIndex="-1"
        pointerEvents="none"
      />

      {/* Main Content Section */}
      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack column on small screens, row on larger
        align={{ base: 'center', md: 'flex-start' }} // Center align on small, align to the top on larger
        justify="space-between"
        px={{ base: 6, md: 10 }}
        width="100vw"
        height="100vh"
        pt={{ base: 16, md: 24 }} // Increase top padding to move content down
        zIndex="1"
      >
        {/* Header and Typewriter Text positioned on the top */}
        <Flex
          flexDirection="row" // Set to row to align the text and typewriter on the same line
          alignItems="center" // Center-align items vertically
          mb={{ base: 4, md: 0 }} // Add margin bottom on small screens
        >
          <Heading
            as="h1"
            fontSize={{ base: '6vw', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            mr={2} // Margin between heading and typewriter text
            color={textColor}
          >
            Benjamin Bell:
          </Heading>

          {/* Typewriter Text aligned horizontally next to the header */}
          <TypewriterText
            color={textColor}
            fontSize={{ base: '6vw', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
          />
        </Flex>

        {/* Image positioned below the text on small screens */}
        <Image
          src={profileImage}
          alt="Profile"
          boxSize={{ base: '40vw', md: '25vw', lg: '20vw' }} // Scale image relative to viewport width
          objectFit="cover"
          borderRadius="full"
          mt={{ base: 4, md: 0 }} // Add margin top on small screens to separate text and image
        />
      </Flex>
    </Box>
  );
};

export default Home;
