import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Group Chat App',
    description: 'Real-time chat with Spring Boot & WebSocket.',
    link: 'https://github.com/12abhiahek/Group-Chat-Application',
  },
  {
    title: 'Bank App',
    description: 'File-based Java banking system.',
    link: 'https://github.com/12abhiahek/BankApplication',
  },
  {
    title: 'Hotel API',
    description: 'REST API for hotel reviews with microservices.',
    link: 'https://github.com/12abhiahek/RestApi',
  },
];

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Projects() {
  return (
    <MotionBox
      id="projects"
      sx={{ py: 8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >

           
             {/* Heading */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#00CFC8', mr: 2 }}
        >
          Projects
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

      <Grid container spacing={4}>
        {projects.map((proj, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <MotionCard
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContent>
                <Typography variant="h6">{proj.title}</Typography>
                <Typography variant="body2" color="text.secondary">{proj.description}</Typography>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00e676' }}>View Code</a>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
}
