// src/components/TypewriterText.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Text, Box } from '@chakra-ui/react';

const descriptions = ['Developer', 'Designer', 'Creator', 'Innovator', 'Problem Solver'];

const TypewriterText = ({ color = 'inherit', fontSize = '4xl', fontWeight = 'bold' }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pauseDuration = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = descriptions[index];

      if (!isDeleting) {
        if (text.length < currentText.length) {
          setText(currentText.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (text.length > 0) {
          setText(currentText.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <motion.div
      style={{ display: 'flex', alignItems: 'baseline' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Text
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        display="inline-block"
      >
        {text}
      </Text>
      <Box
        as="span"
        display="inline-block"
        ml="2px"
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        animation="blink 1s step-end infinite"
        css={{
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        }}
      >
        |
      </Box>
    </motion.div>
  );
};

export default TypewriterText;
