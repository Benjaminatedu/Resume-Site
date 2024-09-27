import React from 'react';
import { Box, Text, Heading, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  // Set the text color based on the current color mode
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Box
      p={6}
      minHeight="100vh"
      bg="transparent"
      color={textColor}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h1" fontSize="4xl" mb={4}>
        About Me
      </Heading>
      <Text fontSize="lg" maxWidth="800px">
        Welcome to the About page! Here, you can learn more about who I am and what I do. I'm a
        passionate software developer who enjoys creating intuitive and engaging web applications. My
        expertise spans across front-end and back-end technologies, allowing me to bring innovative
        ideas to life. Outside of coding, I love exploring new technologies, reading, and spending
        time with family and friends. Stay tuned for more updates!
      </Text>
    </Box>
  );
};

export default About;
