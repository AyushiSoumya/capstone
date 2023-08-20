import React from 'react';
import { Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';
import logo from './logo.png';

export function Register()  {
  const logoStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    left: '20px',
  };

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" styles={{ height: '100vh' }}>
      {/* Left Side - Logo and Website Name */}
       <div style={logoStyle}>
          <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </div>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h2" styles={{ marginLeft: '130px' }}>
          Sign Up To
        </Typography>
        <Typography variant="h4" styles={{ marginLeft: '130px' }}>
          CASEWISE
        </Typography>
        <div styles={{ marginLeft: '130px' }}>
          Already have an account? <Link href="/">Login Now</Link>
        </div>
      </Grid>

      {/* Right Side - Registration Form */}
      <Grid item xs={12} sm={6} md={4}>
        {/* <Paper elevation={3} styles={{ padding: '20px', textAlign: 'center', borderRadius: '0', height: '100%' }}> */}
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
          <form styles={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              required
              InputProps={{
                style: { backgroundColor: '#f0f8ff', border: 'none', marginBottom: '16px' }
              }}
            />
            <TextField
              label="Create Username"
              fullWidth
              margin="normal"
              variant="outlined"
              required
              InputProps={{
                style: { backgroundColor: '#f0f8ff', border: 'none', marginBottom: '16px' }
              }}
            />
            <TextField
              label="Contact Number"
              fullWidth
              margin="normal"
              variant="outlined"
              required
              InputProps={{
                style: { backgroundColor: '#f0f8ff', border: 'none', marginBottom: '16px' }
              }}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              required
              InputProps={{
                style: { backgroundColor: '#f0f8ff', border: 'none', marginBottom: '16px' }
              }}
            />
            <TextField
              label="Confirm Password"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              required
              InputProps={{
                style: { backgroundColor: '#f0f8ff', border: 'none', marginBottom: '16px' }
              }}
            />
            <Button variant="contained" color="primary" fullWidth type="submit" styles={{ marginBottom: '16px' }}>
              Register
            </Button>
          </form>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
};


