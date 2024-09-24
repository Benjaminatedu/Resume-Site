// src/App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
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
      gridTemplateColumns="auto 1fr"
      minHeight="100vh"
      overflowX="hidden"
    >
      <Box gridArea="header">
        <Header />
      </Box>
      <Sidebar /> {/* Sidebar will be hidden initially and slides out when toggled */}
      <Box
        gridArea="main"
        p="4"
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="100%"
        maxW="1200px"
        mx="auto"
        overflowX="hidden"
        flex="1"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
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
