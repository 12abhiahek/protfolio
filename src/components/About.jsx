import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function About() {
  return (
    <MotionBox
      id="about"
      sx={{ py: 8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
           {/* Heading */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#00CFC8', mr: 2 }}
        >
          About Me
        </Typography>
        <Box
          sx={{
            flexGrow: 2,
            height: 1,
            backgroundColor: '#3c3c3c',
          }}
        />
        
        <Box sx={{ position: 'relative', width: '70%', height: 24 }}>
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              width: '70%',
              height: 2,
              backgroundColor: '#333',
              transform: 'translateY(-50%)',
            }}
          />
          
          
        </Box>
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
       I’m a passionate Java Developer with 1 year of hands-on experience building scalable and efficient backend applications. I specialize in developing RESTful APIs, integrating with relational databases (MySQL, PostgreSQL), and crafting clean, maintainable code using Java and Spring Boot.

At Zynka Technologies, I’ve worked on real-world projects involving EV charging infrastructure using OCPP, designed real-time simulators, and secured APIs using OAuth2 and JWT. I'm also familiar with tools like Docker, Git, and Jenkins, and have contributed to full-stack projects using React and Angular.

With a strong foundation in object-oriented programming and a mindset for continuous learning, I’m committed to delivering high-quality software solutions that solve real-world problems. I enjoy working in collaborative, fast-paced environments where I can grow, contribute, and build impactful systems.


      </Typography>
    </MotionBox>
  );
}
