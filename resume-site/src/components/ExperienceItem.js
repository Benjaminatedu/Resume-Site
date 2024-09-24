// src/components/ExperienceItem.js
import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const ExperienceItem = ({ title, date, details, subtitle }) => {
  return (
    <Box mb={4}>
      {title && <Text fontWeight="bold">{title}</Text>}
      {subtitle && <Text>{subtitle}</Text>}
      {date && <Text fontSize="sm" color="gray.600">{date}</Text>}
      {Array.isArray(details) ? (
        <UnorderedList mt={2}>
          {details.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      ) : (
        <Text mt={2}>{details}</Text>
      )}
    </Box>
  );
};

export default ExperienceItem;
