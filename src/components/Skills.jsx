import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import { FaAws, FaJava, FaReact } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { SiOracle, SiIntellijidea, SiTailwindcss, SiJavascript, SiBootstrap, SiMysql, SiSpringboot, SiGithub, SiDocker, SiJenkins } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const skillCategories = {
  Frontend: [
    { name: 'React JS', icon: <FaReact size={40} /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} /> },
  ],
  Backend: [
    { name: 'Java', icon: <FaJava size={40} /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} /> },
    { name: 'Microservices', icon: <BiNetworkChart size={40} /> },
    { name: 'WebSocket', icon: <MdWeb size={40} /> },
  ],
  Database: [
    { name: 'MySQL', icon: <SiMysql size={40} /> },
    { name: 'Oracle', icon: <SiOracle size={40} /> },
  ],
  Tools: [
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea size={40} /> },
    { name: 'GitHub', icon: <SiGithub size={40} /> },
  ],
  'Cloud & DevOps': [
    { name: 'Docker', icon: <SiDocker size={40} /> },
    { name: 'AWS', icon: <FaAws size={40} /> },
    { name: 'Jenkins', icon: <SiJenkins size={40} /> },
  ],
};

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const cardBg = isDark ? '#1e1e1e' : '#f9f9f9';
  const textColor = isDark ? '#00CFC8' : '#1976d2';

  return (
    <MotionBox
      id="skills"
      sx={{ py: 8, px: 2 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: textColor, mr: 2 }}
        >
          Skills
        </Typography>
        <Box sx={{ flexGrow: 2, height: 1, backgroundColor: '#3c3c3c' }} />
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

      {/* Category Sections */}
      {Object.entries(skillCategories).map(([category, skills]) => (
        <Box key={category} sx={{ mb: 6, textAlign: '120px', px: { xs: 4, sm: 5 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              mb: 2,
              color: textColor,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {category}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {skills.map((skill, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <MotionCard
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 12px ${textColor}`,
                  }}
                  sx={{
                    minWidth: 160,
                    backgroundColor: cardBg,
                    borderRadius: 2,
                    border: `1px solid ${isDark ? '#333' : '#ccc'}`,
                    color: textColor,
                    transition: 'all 0.3s ease-in-out',
                  }}
                  elevation={3}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    {skill.icon}
                    <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
                      {skill.name}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </MotionBox>
  );
}
