import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Feel free to reach out to me via email or phone.
      </Typography>
      <Button variant="contained" href="mailto:abhishek184april@gmail.com">Email Me</Button>
    </Box>
  );
}

  