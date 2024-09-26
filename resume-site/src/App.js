// src/App.js
import { Routes, Route } from 'react-router-dom';
import { Box, Grid, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme/themes';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Grid
        templateAreas={`"header header"
                        "sidebar main"
                        "footer footer"`}
        gridTemplateRows="auto 1fr auto"
        gridTemplateColumns="auto 1fr"
        minHeight="100vh"
        overflowX="hidden"
        position="relative"
      >
        <Box gridArea="header" zIndex="2" position="relative">
          <Header />
        </Box>
        <Sidebar />
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
          zIndex="1"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
        <Box gridArea="footer" w="100%" zIndex="1">
          <Footer />
        </Box>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
