
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function App({ toggleTheme, mode }) {
  return (
    <Box>
      <Navbar toggleTheme={toggleTheme} mode={mode} />
      <Container maxWidth="lg">
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </Box>
  );
}