// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// export default function Contact() {
//   return (
//     <Box id="contact" sx={{ py: 8 }}>
//       <Typography variant="h4" gutterBottom>Contact Me</Typography>
//       <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
//         Feel free to reach out to me via email or phone.
//       </Typography>
//       <Button variant="contained" href="mailto:abhishek184april@gmail.com">Email Me</Button>
//     </Box>
//   );
// }


import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Contact() {
  return (
    <MotionBox
      id="contact"
      sx={{ py: 8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Feel free to reach out to me via email or phone.
      </Typography>
      <Button variant="contained" href="mailto:abhishek184april@gmail.com">Email Me</Button>
    </MotionBox>
  );
}


  