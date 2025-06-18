
import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const MotionBox = motion(Box);

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qc7e4za', 'template_n5i433t', form.current, '6O7XwsA4yxDcgSaJP')
      .then(() => {
        alert('Message sent!');
      }, (error) => {
        alert('Failed to send message: ' + error.text);
      });
  };

  return (
    <MotionBox
      id="contact"
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
          Contact Me
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
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, px: { xs: 2, sm: 5 }, textAlign: 'left' }}>
        Feel free to reach out to me via email or phone.
      </Typography>

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          width: '100%',
          maxWidth: 500,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField name="user_name" label="Your Name " fullWidth required />
        <TextField name="user_email" label="Your Email " type="email" fullWidth required />
        {/* <TextField name="user_phone" label="Phone Number " type="tel" fullWidth required /> */}
        <TextField
  name="user_phone"
  label="Phone Number"
  type="tel"
  fullWidth
  required
  inputProps={{
    maxLength: 10,
    inputMode: 'numeric',
    pattern: '[0-9]{10}'
  }}
 
/>

        <TextField name="message" label="Message " multiline rows={5} fullWidth required />
        <Button type="submit" variant="contained" sx={{ bgcolor: '#00E676' }}>Send</Button>
      </Box>
    </MotionBox>
  );
}

  
