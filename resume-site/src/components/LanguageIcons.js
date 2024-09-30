import React, { useState } from 'react';
import { Grid, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiNodeDotJs } from 'react-icons/si';

const iconsData = [
  { icon: SiJavascript, name: "JavaScript", bgGradient: "linear-gradient(135deg, #f7df1e 0%, #ff9900 90%)" },
  { icon: SiPython, name: "Python", bgGradient: "linear-gradient(135deg, #306998 0%, #1e4072 90%)" },
  { icon: SiHtml5, name: "HTML5", bgGradient: "linear-gradient(135deg, #e34c26 0%, #9f260f 90%)" },
  { icon: SiCss3, name: "CSS3", bgGradient: "linear-gradient(135deg, #264de4 0%, #1c3a91 90%)" },
  { icon: SiReact, name: "React", bgGradient: "linear-gradient(135deg, #61dafb 0%, #0d5a75 90%)" },
  { icon: SiNodeDotJs, name: "Node.js", bgGradient: "linear-gradient(135deg, #68a063 0%, #3b6e36 90%)" },
];

const LanguageIcons = () => {
  const [hovered, setHovered] = useState(null);

  // Use headerFooter for the icon color
  const iconTextColor = useColorModeValue('white', 'dark.headerFooter');

  // Calculate the opposite color of headerFooter for the title
  const titleColor = useColorModeValue('black', 'white');  // Opposite color for title text
  const titleBackgroundColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)');  // Semi-transparent background

  const handleMouseMove = (index, e) => {
    const icon = e.currentTarget;
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 80;
    const rotateY = -(x / rect.width) * 80;

    setHovered({ index, rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap="2vw" justifyContent="center">
      {iconsData.map((iconData, index) => (
        <Box
          key={index}
          position="relative"
          borderRadius="full"
          border="2px solid"
          borderColor={iconTextColor}  // Dynamic border color
          background={iconData.bgGradient}  // Fixed gradient background
          p="1.5vw"
          width="10vw"  // Relative width based on viewport width
          height="10vw"  // Relative height based on viewport width
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            transform: hovered?.index === index ? `rotateX(${hovered.rotateX}deg) rotateY(${hovered.rotateY}deg) scale(1.3)` : 'rotateX(0deg) rotateY(0deg) scale(1)',
            transition: 'transform 0.5s ease',  // Slightly longer transition for scaling
            perspective: '1000px',
          }}
          onMouseMove={(e) => handleMouseMove(index, e)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Circular Icon */}
          <iconData.icon size="5vw" color={iconTextColor} />  {/* Size of icon relative to viewport width */}

          {/* Centered Text with Smooth Fade-In Effect */}
          <Text
            position="absolute"
            fontSize="1.2vw"
            fontWeight="bold"
            color={titleColor}  // Opposite color for title text
            backgroundColor={titleBackgroundColor}  // Semi-transparent background
            borderRadius="md"
            px="0.5vw"
            py="0.2vw"
            textAlign="center"
            opacity={hovered?.index === index ? 1 : 0}  // Fade-in effect for text
            transition="opacity 0.5s ease-in-out"  // Smooth fade-in transition for the text
          >
            {iconData.name}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};

export default LanguageIcons;
