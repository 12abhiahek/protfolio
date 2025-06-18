// // File: /src/pages/Home.jsx
// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';
// import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';


// export default function Home() {
//   return (
//     <Box id="home" sx={{ py: 10 }}>
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={7}>
//           <Typography variant="h4">Hi 👋, I'm</Typography>
//           <Typography variant="h2" color="primary" fontWeight="bold">
//             Abhishek Kumar Singh
//           </Typography>
//           <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
//             Java Developer | Spring Boot | Microservices | React | AWS | 4+ Years of Experience
//           </Typography>

//           <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
//             <Button href="https://linkedin.com/in/abhishek-singh-38b2bb1b9" target="_blank" variant="outlined" startIcon={<FaLinkedin />}>LinkedIn</Button>
//             <Button href="https://github.com/12abhiahek" target="_blank" variant="outlined" startIcon={<FaGithub />}>GitHub</Button>
//             <Button href="mailto:abhishek184april@gmail.com" variant="outlined" startIcon={<FaEnvelope />}>Email</Button>
//             <Button href="tel:+919696481593" variant="outlined" startIcon={<FaPhone />}>Call</Button>
//           </Stack>
//         </Grid>

//         <Grid item xs={12} md={5}>
//           <Avatar
//             alt="Coding Illustration"
//             src="/sketchimage.jpg"
//             sx={{ width: 300, height: 300, margin: '0 auto' }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }



import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <Box id="home" sx={{ py: 10 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h4">Hi 👋, I'm</Typography>
          <Typography variant="h2" color="primary" fontWeight="bold">
            Abhishek Kumar Singh
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
            Java Developer | Spring Boot | Microservices | React | AWS | 4+ Years of Experience
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button href="https://linkedin.com/in/abhishek-singh-38b2bb1b9" target="_blank" variant="outlined" startIcon={<FaLinkedin />}>LinkedIn</Button>
            <Button href="https://github.com/12abhiahek" target="_blank" variant="outlined" startIcon={<FaGithub />}>GitHub</Button>
            <Button href="mailto:abhishek184april@gmail.com" variant="outlined" startIcon={<FaEnvelope />}>Email</Button>
            <Button href="tel:+919696481593" variant="outlined" startIcon={<FaPhone />}>Call</Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="/sketchimage.jpg"
            alt="Abhishek Singh"
            sx={{
              width: 300,
              height: 'auto',
              display: 'block',
              mx: 'auto',
              borderRadius: 3, // no rounding
              boxShadow: 20 // no shadow or border
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}


  