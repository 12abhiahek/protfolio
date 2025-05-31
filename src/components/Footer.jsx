import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: 'center', mt: 6, borderTop: '1px solid #333' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Abhishek Singh. All rights reserved.
      </Typography>
    </Box>
  );
}