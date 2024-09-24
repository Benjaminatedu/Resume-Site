// src/pages/Resume.js
import React from 'react';
import { VStack, Divider } from '@chakra-ui/react';
import ResumeSection from '../components/ResumeSection';
import ExperienceItem from '../components/ExperienceItem';
import SkillsList from '../components/SkillsList';

const Resume = () => {
  return (
    <VStack spacing={8} align="center" py={10} maxW="800px" mx="auto">
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
        <ExperienceItem
          title="AI Intelligent Software Development Intern | Solution Stream, Lehi, Utah"
          date="June 2024 – September 2024"
          details={[
            'Developed timelines and project boards for website applications using Jira.',
            'Implemented AI tools that engineered over 10 application features.',
            'Completed backend engineering for financial budgeting applications.',
            'Navigated complex merge conflicts, bugs, and errors with Pytest and GitHub.',
          ]}
        />
        <ExperienceItem
          title="Business Development Representative Salesman | The Insurance Box, Lehi, Utah"
          date="July 2023 – October 2023"
          details={[
            'Scheduled over 200 meetings with potential clients.',
            'Engaged with over 500 insurance professionals regarding product offerings.',
            'Utilized Google Meets, Gusto, and Hubspot for client interactions.',
            'Provided support to over 600 customers, resolving complex issues professionally.',
          ]}
        />
        <ExperienceItem
          title="Digital Technician Agent | Brigham Young University-Pathways, Rexburg, Idaho"
          date="April 2022 – May 2023"
          details={[
            'Coordinated with senior developers to plan future projects.',
            'Managed documentation and notations on coding files.',
            'Trained new employees on communication with senior developers.',
            'Resolved customer complaints with technical explanations and solutions.',
          ]}
        />
        <ExperienceItem
          title="Painter Laborer | JMS Painting, Scranton, Pennsylvania"
          date="May 2020 – August 2020"
        />
        <ExperienceItem
          title="Document Specialist | HODT Drug Testing, Abington, Pennsylvania"
          date="2015 – 2018"
        />
      </ResumeSection>

      <Divider />
    </VStack>
  );
};

export default Resume;
