import React, { useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const MotionBox = motion(Box);

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact({ contactRef }) {
  const form = useRef();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qc7e4za',
        'template_n5i433t',
        form.current,
        '6O7XwsA4yxDcgSaJP'
      )
      .then(
        () => {
          setSnackbar({
            open: true,
            message: 'Message sent successfully!',
            severity: 'success',
          });
        },
        (error) => {
          setSnackbar({
            open: true,
            message: 'Failed to send message: ' + error.text,
            severity: 'error',
          });
        }
      );
  };

  return (
    <MotionBox
      id="contact"
      ref={contactRef}
      sx={{ py: 8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // Animate on every scroll
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            color: '#00CFC8',
            mr: 2,
          }}
        >
          Contact Me
        </Typography>
        <Box sx={{ flexGrow: 2, height: 1, backgroundColor: '#3c3c3c' }} />
      </Box>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, px: { xs: 2, sm: 5 }, textAlign: 'left' }}
      >
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
        <TextField name="user_name" label="Your Name" fullWidth required />
        <TextField
          name="user_email"
          label="Your Email"
          type="email"
          fullWidth
          required
        />
        <TextField
          name="user_phone"
          label="Phone Number"
          type="tel"
          fullWidth
          required
          inputProps={{
            maxLength: 10,
            inputMode: 'numeric',
            pattern: '[0-9]{10}',
          }}
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={5}
          fullWidth
          required
        />
        <Button type="submit"
              variant="contained"
              sx={{
                bgcolor: '#00E676',
                color: '#000',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#00C853', // darker green
                  transform: 'scale(1.05)', // subtle zoom effect
                },
              }}
            >
          Send
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Snackbar shows on top
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </MotionBox>
  );
}

