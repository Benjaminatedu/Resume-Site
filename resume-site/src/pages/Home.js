import React from 'react';
import { Box, Heading, Text, Button, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroimagetest.webp'; // Ensure this path is correct

const Home = () => {
  const background = useColorModeValue('brand.background', '#6A7164');
  const text = useColorModeValue('brand.text', '#EDF0E5');
  const buttonColor = useColorModeValue('brand.highlight', '#7B8C7B');

  return (
    <Box bg={background} minHeight="100vh" color={text}>
      {/* Hero Image Section */}
      <Box width="100%" height="400px" overflow="hidden">
        <Image src={heroImage} alt="Hero Image" objectFit="cover" width="100%" height="100%" />
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
        mt={4} // Adds some space between the image and text
      >
        <Heading
          as="h1"
          size="2xl"
          mb={4}
          fontWeight="bold"
        >
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
        <Link to="/projects">
          <Button colorScheme="green" variant="solid" bg={buttonColor} px={8}>
            View My Projects
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
