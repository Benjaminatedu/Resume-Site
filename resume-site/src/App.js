// src/App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Box, Grid } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                      "sidebar main"
                      "footer footer"`}
      gridTemplateRows="auto 1fr auto"
      gridTemplateColumns="12.5vw 1fr"
      minHeight="100vh"
      overflowX="hidden" // Prevents horizontal overflow on the main grid
    >
      <Box gridArea="header">
        <Header />
      </Box>
      <Box gridArea="sidebar" position="relative" zIndex="1">
        <Sidebar />
      </Box>
      <Box
        gridArea="main"
        p="4"
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="100%"
        maxW="1200px"
        mx="auto"
        overflowX="hidden" // Ensures no overflow occurs within the main content
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
      <Box gridArea="footer" w="100%">
        <Footer />
      </Box>
    </Grid>
  );
}

export default App;
