import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const skills = [
  'Java',
  'Spring Boot',
  'React',
  'MySQL',
  'Tailwind CSS',
  'Git',
  'OCPP',
  'WebSockets',
];

const hoverEffectSkills = new Set([
    'Java',
    'Spring Boot',
  'React',
  'MySQL',
  'Tailwind CSS',
  'Git',
  'OCPP',
  'WebSockets',
]);

export default function Skills() {
  return (
    <MotionBox
      id="skills"
      sx={{ py: 8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#00CFC8', mr: 2 }}
        >
          Skills
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

      {/* Cards */}
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <MotionCard
              whileHover={hoverEffectSkills.has(skill) ? { scale: 1.05, boxShadow: '0px 0px 12px #00CFC8' } : {}}
              sx={{
                minWidth: 160,
                backgroundColor: '#1e1e1e',
                borderRadius: 2,
                border: '1px solid #333',
                color: '#fff',
                transition: 'all 0.3s ease-in-out',
              }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: 'center', fontWeight: 500, color: '#00CFC8' }}
                >
                  {skill}
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
}
