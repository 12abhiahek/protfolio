
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Navbar({ toggleTheme, mode }) {
  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Abhishek Singh
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>

          {/* ✅ Resume Download Button using anchor tag */}
          <a
            href="/Abhishek_Resume.pdf"
            download
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained">Resume</Button>
          </a>

          <FormControlLabel
            control={<Switch onChange={toggleTheme} checked={mode === 'dark'} />}
            label={mode === 'dark' ? 'Dark' : 'Light'}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
