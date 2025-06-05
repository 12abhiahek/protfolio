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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
        Hey there! 👋 I’m Abhishek Kumar Singh — a Java Developer fueled by curiosity, creativity, and a passion for crafting high-performance backend systems that solve real-world problems.

        With over 4 years of professional experience, I specialize in building scalable, secure, and efficient software solutions using Java, Spring Boot, and Microservices architecture. My journey has taken me through exciting roles at companies like Oaza Energy and Natlov Technologies, where I engineered EV charging solutions using OCPP, designed real-time simulators, and integrated advanced API security with OAuth2 and JWT.

        I believe great software is a mix of clean code, smart design, and reliable performance. Whether it’s implementing RESTful APIs, optimizing databases (MySQL, PostgreSQL, Oracle), or managing cloud deployments on AWS, I bring deep technical expertise and a collaborative mindset to every project.

        🚀 Highlights of what I bring to the table:
        - Expert in Java, Spring Boot, Microservices & REST APIs
        - Real-world experience with Docker, Jenkins, Git, and CI/CD pipelines
        - Built full-stack applications with React and Angular
        - Agile enthusiast with a DevOps mindset
        - Hands-on with real-time systems, e-commerce, and EV infrastructure

        I thrive in dynamic, fast-paced environments where innovation and ownership are valued. My coding philosophy is simple: write clean, readable, testable code — and have fun while doing it.

        Outside of code, I’m a lifelong learner constantly exploring the latest tech trends and best practices. Whether I’m debugging WebSocket connections or mentoring peers on architecture design, I bring enthusiasm, clarity, and a deep commitment to excellence.

        Let’s build something amazing together! ✨
      </Typography>
    </MotionBox>
  );
}
