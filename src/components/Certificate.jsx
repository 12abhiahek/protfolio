import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Java Developer Certificate',
    provider: 'NareshIT',
    href: '/239.pdf',
  },
  {
    title: 'SQL Developer Certificate',
    provider: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/f9204fb30823',
  },
  {
    title: 'Docker For Java Developer',
    provider: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-2c7c2401-043d-4880-8d26-753815d9fa21/',
  },
];

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Certificate() {
  return (
    <MotionBox
      id="certificates"
      sx={{ py: 8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#00CFC8', mr: 2 }}
        >
          Certificates
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

      {/* Grid of Certificates */}
      <Grid container spacing={4}>
        {certificates.map((cert, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <MotionCard
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              sx={{ minHeight: 150 }}
            >
              <CardContent>
                <Typography variant="h6">{cert.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {cert.provider}
                </Typography>
                <Button
                    variant="outlined"
                    href={cert.href || cert.link}
                    target="_blank"
                    sx={{
                      color: '#00e676',
                      borderColor: '#00e676',
                      '&:hover': {
                        backgroundColor: '#00e676',
                        color: '#000',
                      },
                    }}
                  >
                    View Certificate
                  </Button> 
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
}
