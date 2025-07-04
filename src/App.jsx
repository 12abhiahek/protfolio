import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificate from './components/Certificate';


export default function App({ toggleTheme, mode }) {
  const contactRef = useRef(null);

  return (
    <Box>
      <Navbar toggleTheme={toggleTheme} mode={mode} />
      <Container maxWidth="lg">
        <Home contactRef={contactRef} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificate />
        <Contact contactRef={contactRef} />
      </Container>
      <Footer />
    </Box>
  );
}
