import React from 'react';
import { Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';
import logo from './logo.png';

export function Signin() {
  const logoStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    left: '20px',
  };

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          {/* Left Side - Logo and Website Name */}
          <div style={logoStyle}>
          <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </div>
      <Grid item xs={12} sm={6} md={4} >
        
        <Typography variant="h2" style={{ marginLeft: '130px' }}>
          Sign In To
        </Typography>
        <Typography variant="h4" style={{ marginLeft: '130px' }}>
          CASEWISE
        </Typography>
        <div style={{ marginLeft: '130px' }}>
          Dont have an Account? <Link href="/register">Register Now</Link>
        </div>
      </Grid>

      {/* Right Side - Sign-in Form */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', borderRadius: '0', height: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Sign In
          </Typography>
          <form style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              variant="outlined"
              required
              InputProps={{
                style: { backgroundColor: '#f0f8ff', border: 'none', marginBottom: '16px' } // Light blue background and no border
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
                style: { backgroundColor: '#f0f8ff', border: 'none', marginBottom: '16px' } // Light blue background and no border
              }}
            />
            <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginBottom: '16px' }}>
              Sign In
            </Button>
            <Link href="#" variant="body2">
              Sign in with Google
            </Link>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signin;
