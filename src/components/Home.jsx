import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const MotionGrid = motion(Grid);

export default function Home({ contactRef }) {
  const handleScrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box id="home" sx={{ py: 10 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Text Section */}
        <MotionGrid
          item
          xs={12}
          md={7}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <TypeAnimation
              sequence={[
                "Hi 👋, I'm\nAbhishek Kumar Singh", 1500,
                '', 500
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: '2.2rem',
                fontWeight: 'bold',
                color: '#1976d2',
                whiteSpace: 'pre-line',
                lineHeight: 1.5,
                minHeight: '100px',
              }}
              repeat={Infinity}
            />

           <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
              Meet Abhishek
              a driven software engineer with a passion<br />
              for tackling challenging projects.<br />
              With 1+ years of valuable experience<br />
              under their belt, they thrive on pushing boundaries<br />
              and solving complex problems.
            </Typography>
            
             <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mt: 4, flexWrap: 'wrap' }}>
              <Button href="https://linkedin.com/in/abhishek-singh-38b2bb1b9" target="_blank" variant="outlined" startIcon={<FaLinkedin />}></Button>
              <Button href="https://github.com/12abhiahek" target="_blank" variant="outlined" startIcon={<FaGithub />}></Button>
              <Button href="mailto:abhishek184april@gmail.com" variant="outlined" startIcon={<FaEnvelope />}></Button>
              <Button href="tel:+919696481593" variant="outlined" startIcon={<FaPhone />}></Button>
            </Stack>

            <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mt: 4 }}>
              <Button
                variant="outlined"
                startIcon={<span style={{ transform: 'rotate(20deg)', display: 'inline-block' }}></span>}
                onClick={handleScrollToContact}
              >
                Say Hi
              </Button>
              <Button
                variant="outlined"
                startIcon={<FaDownload />}
                href="/Abhishek_Resume.pdf"
                download
                >
                  Resume
                </Button>
            </Stack>
          </Box>
        </MotionGrid>
        

        {/* Image Section */}
        <MotionGrid
          item
          xs={12}
          md={5}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            component="img"
            src="/coding-concept-illustration.png"
            alt="Abhishek Singh"
            sx={{
              width: '100%',
              maxWidth: 500,
              height: 'auto',
              display: 'block',
            }}
          />
        </MotionGrid>

      </Grid>
    </Box>
  );
}
