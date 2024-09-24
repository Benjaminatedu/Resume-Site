// src/components/SkillsList.js
import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const SkillsList = ({ title, skills }) => {
  return (
    <Box mt={4}>
      <Text fontWeight="bold">{title}:</Text>
      <UnorderedList mt={2}>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <strong>{skill.name}</strong>: {skill.description}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default SkillsList;
