import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Navbar({ toggleTheme, mode }) {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Day and Time */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            variant="body2"
            sx={{
               color: mode === 'dark' ? 'white' : 'black',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {dateTime.toLocaleDateString(undefined, { weekday: 'long' })}{' '}
            {dateTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            })}
          </Typography>
        </Stack>

        {/* Right: Nav Links + Resume + Theme */}
        <Stack direction="row" spacing={2} alignItems="center">
          {['Home', 'About', 'Projects', 'Contact'].map((label) => (
            <Button
              key={label}
              color="inherit"
              href={`#${label.toLowerCase()}`}
              sx={{
                fontWeight: 'normal',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: 'primary.main',
                  fontWeight: 'bold',
                },
              }}
            >
              {label}
            </Button>
          ))}

          <a href="/Abhishek_Resume.pdf" download style={{ textDecoration: 'none' }}>
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
