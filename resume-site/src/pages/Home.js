import React from 'react';
import { Box, Grid, Heading, Text, useColorModeValue, Image, Flex, keyframes } from '@chakra-ui/react';
import TypewriterText from '../components/TypewriterText';
import LanguageIcons from '../components/LanguageIcons'; // Import Language Icons component
import lightBackground from '../assets/aaabstractlight.webp';
import darkBackground from '../assets/aaabstractdark.webp';
import profileLight from '../assets/profilelight.webp';
import profileDark from '../assets/profiledark.webp';
import headshotImage from '../assets/headshot.webp'; // WebP format headshot

// Keyframes for animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const Home = () => {
  const textColor = useColorModeValue('light.text', 'dark.text');
  const bgImage = useColorModeValue(lightBackground, darkBackground);
  const profileImage = useColorModeValue(profileLight, profileDark);

  return (
    <Box bg="transparent" minHeight="400vh" color={textColor} position="relative">
      {/* Background Image */}
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bgImage={`url(${bgImage})`}
        bgSize={{ base: 'cover', md: 'contain', lg: 'cover' }}
        bgRepeat="no-repeat"
        bgPosition="center"
        zIndex="-2"
        pointerEvents="none"
      />

      {/* Main Content */}
      <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(17, 1fr)" gap="2vw" width="100vw" px="5vw" py="5vh">
        {/* Header and Typewriter Text */}
        <Box gridColumn={{ base: '1 / span 12', md: '2 / span 5' }} gridRow="2 / 4" animation={`${fadeIn} 1s ease-in-out`}>
          <Flex flexDirection="row" alignItems="center">
            <Heading fontSize={{ base: '5vw', md: '2.5vw', lg: '2vw' }} fontWeight="bold" mr="1vw" color={textColor}>
              Benjamin Bell:
            </Heading>
            <TypewriterText fontSize={{ base: '5vw', md: '2.5vw', lg: '2vw' }} fontWeight="bold" whiteSpace="nowrap" animation={`${fadeIn} 1.5s ease-in-out`} />
          </Flex>
        </Box>

        {/* Profile Image */}
        <Box gridColumn={{ base: '1 / span 12', md: '10 / span 4' }} gridRow="4 / 6" animation={`${bounce} 3s infinite ease-in-out`} _hover={{ animation: `${bounce} 1.5s infinite ease-in-out` }}>
          <Image src={profileImage} alt="Profile" boxSize={{ base: '35vw', md: '25vw', lg: '20vw' }} objectFit="cover" borderRadius="full" />
        </Box>

        {/* Welcome Text */}
        <Box gridColumn={{ base: '1 / span 12', md: '4 / span 6' }} gridRow="6 / 7" textAlign="center" animation={`${fadeIn} 2s ease-in-out`}>
          <Text fontSize={{ base: '5vw', md: '2.5vw', lg: '2vw' }} fontWeight="bold" color={textColor}>
            Welcome to My Site! Explore and learn more about my journey.
          </Text>
        </Box>

        {/* Headshot Image */}
        <Box gridColumn={{ base: '1 / span 12', md: '1 / span 3' }} gridRow="7 / 9" animation={`${bounce} 3s infinite ease-in-out`} _hover={{ animation: `${bounce} 1.5s infinite ease-in-out` }}>
          <Image src={headshotImage} alt="Headshot" boxSize={{ base: '35vw', md: '20vw', lg: '15vw' }} objectFit="cover" borderRadius="full" />
        </Box>

        {/* Languages Section Header */}
        <Box gridColumn="1 / span 12" gridRow="10 / 11" textAlign="center" mb="3vh">
          <Heading fontSize={{ base: '6vw', md: '3vw', lg: '2.5vw' }} fontWeight="bold" color={textColor}>
            Languages
          </Heading>
        </Box>

        {/* Programming Language Icons */}
        <Box gridColumn="1 / span 12" gridRow="11 / 13" px="5vw" py="5vh" textAlign="center">
          <LanguageIcons /> {/* Reusable component for language icons */}
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
