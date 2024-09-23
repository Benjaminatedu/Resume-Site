import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="Resume-Site/" element={<Home />} />
        <Route path="Resume-Site/about" element={<About />} />
        <Route path="Resume-Site/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
