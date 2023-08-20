import React from 'react';
import { Grid, Paper, Button, Typography } from '@mui/material';
import cloud from './cloud.PNG';
import { Link } from 'react-router-dom';

export function LandingPage() {
  const pageStyle = {
    backgroundColor: '#27445C', // Professional blue background color
    
    minHeight: '100vh', // Full-page height
  };

  const navbarStyle = {
    backgroundColor: '#f0f8ff', // Light blue navbar background color
    display: 'flex',
      justifyContent: 'space-between',
     
    padding: '10px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '30%', // Rounded image
    margin: '0 auto', // Center the image horizontally
    display: 'block',
  };

  return (
    <div style={pageStyle}>
      {/* Navbar */}
      <div style={navbarStyle}>
        <div>
          <Typography variant="h6">CASEWISE</Typography>
        </div>
        <div>
          <Button variant="text" color="primary">
            Services
                  </Button>
                  <Link to='/'>
                  <Button variant="text" color="primary">
                      
            Login
                      </Button>
                      </Link>
        </div>
      </div>

      {/* Main Content */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '80vh', padding: '20px', color:'white' }} // Padding around the content and full-page height
      >
        {/* Left Grid */}
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" style={{ fontWeight: 'bold', lineHeight: '1.2' }}>
            Secure Storage for Legal Management
          </Typography>
          <div>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac justo eget augue vestibulum auctor.
              Vivamus vulputate vestibulum eros, vel bibendum metus tristique id. Nulla non bibendum justo, vel rhoncus
              nibh.
            </Typography>
          </div>
          <Button variant="contained" color="primary" style={{ borderRadius: '25px', marginTop: '20px' }}>
            GET STARTED
          </Button>
        </Grid>

        {/* Right Grid */}
        <Grid item xs={12} sm={6} md={6}>
          <img src={cloud} alt="Cloud" style={imageStyle} />
        </Grid>
      </Grid>
    </div>
  );
}