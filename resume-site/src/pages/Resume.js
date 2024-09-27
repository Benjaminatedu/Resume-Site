// src/pages/Resume.js
import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

const Resume = () => {
  const bgColor = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Box
      p={4}
      minHeight="100vh"
      bg={bgColor}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {/* Header Section */}
      <Heading as="h2" size="lg" mb={4} color={textColor} textAlign="center">
        Welcome to my Resume
      </Heading>

      {/* Responsive iframe to display the PDF */}
      <iframe
        src="/Resume-Site/resume.pdf#zoom=page-width" // Ensures the PDF starts scaled to fit the width
        style={{
          width: '90vw', // Adjust to fit the viewport width responsively
          height: '80vh', // Adjust to fit the viewport height responsively
          border: 'none',
        }}
        title="Resume"
      />
    </Box>
  );
};

export default Resume;
