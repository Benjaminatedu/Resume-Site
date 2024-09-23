// src/App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex direction="column" minHeight="100vh"> {/* Flex container with column direction */}
      <Header />
      <Box flex="1"> {/* Main content area that grows */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
      <Footer /> {/* Footer will stay at the bottom */}
    </Flex>
  );
}

export default App;
