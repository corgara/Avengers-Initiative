import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {

  return (
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Avengers Initiative
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/team">Team</Button>
        </Toolbar>
      </AppBar>
    
  );
}