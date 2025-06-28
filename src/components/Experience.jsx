import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemText,
  Fade,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const experienceData = [
  {
    company: 'Zynka Technologies.ai',
    role: 'Java Developer',
    location: 'Remote',
    duration: 'Oct 2024 – Present',
    description: [
      'Worked extensively on the OCPP (Open Charge Point Protocol), implementing communication between EV charging stations and the CMS using Web Sockets.',
      'Developed a charge point simulator using Sketch to test different charging scenarios and analyze real-time data.',
      'Building, testing, and maintaining efficient, reusable, and reliable Java code for new and existing applications to support business operations.',
      'Identifying, troubleshooting, and resolving technical issues in a timely manner to maintain uninterrupted services.',
    ],
  },
  {
    company: 'Natlov Technologies Pvt. Ltd.',
    role: 'Java Developer',
    location: 'Remote',
    duration: 'July 2024 – Oct 2024',
    description: [
      'Develop and maintain Java-based applications using Spring Boot, ensuring high performance and responsiveness to requests from front-end systems.',
      'Design and implement RESTful APIs to enable communication between distributed services and external systems.',
      'A team player with a proven track record in delivering high-performance, scalable solutions within Agile environments.',
    ],
  },
  {
    company: 'Adroit Agencies Pvt. Ltd. Delhi',
    role: 'Software Engineer Intern',
    location: 'Onsite',
    duration: 'Dec 2023 – May 2024',
    description: [
      'Developed a high-performance e-commerce application using Angular technology, resulting in a 50% decrease in page load times and a 30% increase in conversion rates.',
      'Implement Angular for Single Page Application development to enhance user experience and maximize performance.',
      'Develop and maintain clean, efficient code, following best practices and industry standards.',
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => setActiveTab(newValue);
  const current = experienceData[activeTab];

  return (
    <>
      {/* Animated Heading */}
      <MotionBox
        sx={{ display: 'flex', alignItems: 'center', mb: 4 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }} // Animate on every scroll
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: '#00CFC8',
            mr: 2,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          My Work Experiences
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
                      width: '50%',
                      height: 2,
                      backgroundColor: '#333',
                      transform: 'translateY(-50%)',
                    }}
                  />
                  
                  
                </Box>
      </MotionBox>

      {/* Experience Section */}
      <MotionBox
        id="experience"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          py: 8,
          gap: 4,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }} 
      >
        {/* Tabs */}
        <Box sx={{ minWidth: 220 }}>
          <Tabs
            orientation="vertical"
            value={activeTab}
            onChange={handleChange}
            TabIndicatorProps={{ style: { backgroundColor: '#00CFC8' } }}
            textColor="inherit"
          >
            {experienceData.map((exp, index) => (
              <Tab
                key={index}
                label={exp.company}
                sx={{
                  alignItems: 'flex-start',
                  color: activeTab === index ? '#00CFC8' : '#ccc',
                  textTransform: 'none',
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Divider */}
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ display: { xs: 'none', md: 'block' }, borderColor: '#333' }}
        />

        {/* Details */}
        <Box sx={{ flexGrow: 1 }}>
          <Fade in timeout={500}>
            <Box>
              <Typography variant="h6" gutterBottom>
                {current.role}{' '}
                <Typography component="span" sx={{ fontWeight: 'bold', color: '#00CFC8' }}>
                  @ {current.company}
                </Typography>
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {current.location} | {current.duration}
              </Typography>
              <List dense>
                {current.description.map((point, i) => (
                  <ListItem key={i} sx={{ pl: 0 }}>
                    <ListItemText primary={`• ${point}`} sx={{ color: '#ddd' }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Fade>
        </Box>
      </MotionBox>
    </>
  );
}
