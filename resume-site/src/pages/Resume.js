// src/pages/Resume.js
import React from 'react';
import { VStack, Divider, Box } from '@chakra-ui/react';
import ResumeSection from '../components/ResumeSection';
import ExperienceItem from '../components/ExperienceItem';
import SkillsList from '../components/SkillsList';
import topography from '../assets/aaabstractlight.webp'; // Ensure this path is correct

const Resume = () => {
  return (
    <Box
      minHeight="100vh"
      position="relative"
      bg="transparent"
      color="black"
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
        bgImage={`url(${topography})`}
        bgSize="cover"
        bgRepeat="repeat"
        bgPosition="center"
        opacity="1"
        zIndex="-1"
        pointerEvents="none"
      />

      <VStack spacing={8} align="center" maxW="800px" mx="auto">
        <ResumeSection title="Benjamin Bell" subtitle="Phone: (570) 665-1452 | Email: dtytrewq@hotmail.com" />

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
              { name: 'C Languages', description: 'Familiar with C, C++, and C# for systems programming and game development.' },
              { name: 'Markdown', description: 'Used for writing clear and organized documentation.' },
              { name: 'Kotlin', description: 'Experience in mobile development with Android Studio.' },
              { name: 'Erlang', description: 'Knowledge of distributed systems, emphasizing fault tolerance.' },
              { name: 'HTML/CSS', description: 'Strong skills in HTML5 and CSS3, including Flexbox and Grid.' },
              { name: 'GD Script', description: 'Used in game development with the Godot engine.' },
            ]}
          />
          <SkillsList
            title="Platforms"
            skills={[
              { name: 'AWS', description: 'Hands-on experience with cloud services including EC2, S3, and Lambda.' },
              { name: 'GitHub', description: 'Proficient in version control, branch management, and CI/CD integration.' },
              { name: 'Jira', description: 'Used for project management and team collaboration.' },
              { name: 'Expo', description: 'Familiar with using Expo for rapid prototyping and deployment.' },
              { name: 'Unreal Engine 5', description: 'Knowledgeable in high-fidelity game development.' },
              { name: 'Godot', description: 'Experienced in 2D and 3D game development using Godot.' },
            ]}
          />
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
