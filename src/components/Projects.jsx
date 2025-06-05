// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';

// const projects = [
//   { title: 'Group Chat App', description: 'Real-time chat with Spring Boot & WebSocket.', link: 'https://github.com/12abhiahek/Group-Chat-Application' },
//   { title: 'Bank App', description: 'File-based Java banking system.', link: 'https://github.com/12abhiahek/BankApplication' },
//   { title: 'Hotel API', description: 'REST API for hotel reviews with microservices.', link: 'https://github.com/12abhiahek/RestApi' }
// ];

// export default function Projects() {
//   return (
//     <Box id="projects" sx={{ py: 8 }}>
//       <Typography variant="h4" gutterBottom>Projects</Typography>
//       <Grid container spacing={4}>
//         {projects.map((proj, i) => (
//           <Grid item xs={12} sm={6} md={4} key={i}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6">{proj.title}</Typography>
//                 <Typography variant="body2" color="text.secondary">{proj.description}</Typography>
//                 <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00e676' }}>View Code</a>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
  

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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Typography variant="h4" gutterBottom>Projects</Typography>
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
