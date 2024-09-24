// src/components/ResumeSection.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const ResumeSection = ({ title, subtitle, children }) => {
  return (
    <Box align="left" w="100%">
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      {subtitle && <Text fontSize="lg" mb={4}>{subtitle}</Text>}
      {children}
    </Box>
  );
};

export default ResumeSection;
