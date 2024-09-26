// src/pages/Resume.js
import React from 'react';
import { VStack, Divider, Box, useColorModeValue } from '@chakra-ui/react';
import ResumeSection from '../components/ResumeSection';
import ExperienceItem from '../components/ExperienceItem';
import SkillsList from '../components/SkillsList';
import lightBackground from '../assets/aaabstractlight.webp';
import darkBackground from '../assets/aaabstractdark.webp'; // Ensure you have a dark version of the background

const Resume = () => {
  const bgImage = useColorModeValue(lightBackground, darkBackground);
  const textColor = useColorModeValue('black', 'white');

  return (
    <Box
      minHeight="100vh"
      position="relative"
      bg="transparent"
      color={textColor}
      overflowX="hidden"
      py={10}
    >
      {/* Background Image Layer */}
      <Box
        as="section"
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgRepeat="repeat"
        bgPosition="center"
        opacity="1"
        zIndex="-1"
        pointerEvents="none"
      />

      <VStack spacing={8} align="center" maxW="800px" mx="auto">
        <ResumeSection
          title="Benjamin Bell"
          subtitle="Phone: (570) 665-1452 | Email: dtytrewq@hotmail.com"
        />

        <Divider />

        {/* Education Section */}
        <ResumeSection title="Education">
          <ExperienceItem
            title="Brigham Young University-Idaho, Rexburg, Idaho"
            details="Bachelor’s Degree – Software Engineering and Software Management"
            date="September 2024"
          />
          <ExperienceItem
            details="Computer Programming Certificate - 2023"
            subtitle="Brigham Young University - Idaho Fall 2023 Hackathon"
          />
          <SkillsList
            title="Programming Languages"
            skills={[
              { name: 'React', description: 'Expertise in building dynamic, responsive single-page applications.' },
              { name: 'Python', description: 'Proficient in backend development, data analysis, and machine learning.' },
              // Add more skills as needed
            ]}
          />
          {/* Add additional skills as needed */}
        </ResumeSection>

        <Divider />

        {/* Professional Experience Section */}
        <ResumeSection title="Professional Experience">
          {/* Add your experience items here */}
        </ResumeSection>

        <Divider />
      </VStack>
    </Box>
  );
};

export default Resume;
