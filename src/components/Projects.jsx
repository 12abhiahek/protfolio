// import React from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
// } from '@mui/material';
// import { motion } from 'framer-motion';

// const MotionBox = motion(Box);
// const MotionCard = motion(Card);

// const projects = [
//   {
//     title: 'Group Chat App',
//     description: `A real-time group chat application built using Spring Boot and WebSocket technology to enable instant bi-directional communication between users. This web-based platform provides a seamless messaging experience and supports multiple users in the same chat room.`,
//     Backend: 'Java, Spring Boot, WebSocket',
//     Frontend: 'HTML, CSS, JavaScript',
//     link: 'https://github.com/12abhiahek/Group-Chat-Application',
//   },
//   {
//     title: 'Bank App',
//     description: `Developed a console-based Java banking system that enables users to perform essential banking operations such as deposits, withdrawals, balance checks, and transaction history tracking using file I/O for persistent data storage.`,
//     Backend: 'Java, File I/O',
//     Frontend: 'Console-based',
//     link: 'https://github.com/12abhiahek/BankApplication',
//   },
//   {
//     title: 'Q&A Application',
//     description: `Built a dynamic Q&A web application leveraging the power of Google Gemini API to deliver intelligent, real-time responses. The system uses a clean separation of concerns between frontend and backend, ensuring high performance and maintainability.`,
//     Backend: 'Java, Spring Boot, Spring AI (Gemini API)',
//     Frontend: 'React, Material-UI',
//     link: 'https://github.com/12abhiahek/GeminiChat_Application',
//   },
// ];

// export default function Projects() {
//   return (
//     <MotionBox
//       id="projects"
//       sx={{ py: 8 }}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.3 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Section Header */}
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: 600,
//             fontFamily: 'Poppins, sans-serif',
//             color: '#00CFC8',
//             mr: 2,
//           }}
//         >
//          Projects
//         </Typography>
//         <Box sx={{ flexGrow: 1, height: 1, backgroundColor: '#3c3c3c' }} />

//               <Box sx={{ position: 'relative', width: '70%', height: 24 }}>
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       left: 0,
//                       top: '50%',
//                       width: '70%',
//                       height: 2,
//                       backgroundColor: '#333',
//                       transform: 'translateY(-50%)',
//                     }}
//                   />
                  
                  
//                 </Box>
//       </Box>

//       {/* Project Grid */}
//       <Grid container spacing={4}>
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <MotionCard
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.2 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               sx={{
//                 backgroundColor: '#1e1e1e',
//                 color: '#fff',
//                 height: '100%',
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 2,
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 1 }}>
//                   {project.title}
//                 </Typography>

//                 <Typography variant="body2" sx={{ fontWeight: 600, color: '#aaa' }}>
//                   Backend:
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 1 }}>
//                   {project.Backend}
//                 </Typography>

//                 <Typography variant="body2" sx={{ fontWeight: 600, color: '#aaa' }}>
//                   Frontend:
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 2 }}>
//                   {project.Frontend}
//                 </Typography>

//                 <Typography variant="body2" sx={{ fontWeight: 600, color: '#aaa' }}>
//                   Description:
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 2 }}>
//                   {project.description}
//                 </Typography>

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     color: '#00e676',
//                     textDecoration: 'underline',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   View Code
//                 </a>
//               </CardContent>
//             </MotionCard>
//           </Grid>
//         ))}
//       </Grid>
//     </MotionBox>
//   );
// }



import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const projects = [
  {
    title: 'Group Chat App',
    description: `A real-time group chat application built using Spring Boot and WebSocket technology to enable instant bi-directional communication between users. This web-based platform provides a seamless messaging experience and supports multiple users in the same chat room.`,
    Backend: 'Java, Spring Boot, WebSocket',
    Frontend: 'HTML, CSS, JavaScript',
    link: 'https://github.com/12abhiahek/Group-Chat-Application',
  },
  {
    title: 'Bank App',
    description: `Developed a console-based Java banking system that enables users to perform essential banking operations such as deposits, withdrawals, balance checks, and transaction history tracking using file I/O for persistent data storage.`,
    Backend: 'Java, File I/O',
    Frontend: 'Console-based',
    link: 'https://github.com/12abhiahek/BankApplication',
  },
  {
    title: 'Q&A Application',
    description: `Built a dynamic Q&A web application leveraging the power of Google Gemini API to deliver intelligent, real-time responses. The system uses a clean separation of concerns between frontend and backend, ensuring high performance and maintainability.`,
    Backend: 'Java, Spring Boot, Spring AI (Gemini API)',
    Frontend: 'React, Material-UI',
    link: 'https://github.com/12abhiahek/GeminiChat_Application',
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      {/* Animated Section Header */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        sx={{ display: 'flex', alignItems: 'center', mb: 6 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            color: '#00CFC8',
            mr: 2,
          }}
        >
          Projects
        </Typography>
        <Box sx={{ flexGrow: 1, height: 1, backgroundColor: '#3c3c3c' }} />
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
      </MotionBox>

      {/* Animated Grid */}
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionBox
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  height: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#aaa' }}>
                    Backend:
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {project.Backend}
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#aaa' }}>
                    Frontend:
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.Frontend}
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#aaa' }}>
                    Description:
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#00e676',
                      textDecoration: 'underline',
                      fontWeight: 'bold',
                    }}
                  >
                    View Code
                  </a>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
