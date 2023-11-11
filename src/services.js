import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import organizations from './organizations.png';

function ServicesPage() {
  const cardStyle = {
    backgroundColor: 'linear-gradient(to bottom, #27445C, #ffffff)',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center',
    position: 'relative',
    height: '100%',
  };

  const imageStyle = {
    maxWidth: '100%', // Ensure the image doesn't exceed the container width
    maxHeight: '100%', // Ensure the image doesn't exceed the container height
    borderRadius: '30%', // Rounded image
    margin: '0 auto', // Center the image horizontally
    display: 'block',
  };

  const circleStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '2px solid #27445C',
    position: 'absolute',
    top: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const rootStyle = {
    backgroundColor: '#27445C',
    padding: '64px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column', // Display children components in a column
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underlines from the Link components
  };

  return (
    <div style={rootStyle}>
      <Typography variant="h4" gutterBottom style={{ color: 'white', padding: '30px' }}>
        Select your service
      </Typography>
      <Grid container spacing={3} alignItems="stretch" justify="center">
        <Grid item xs={12} sm={4}>
          <Link to='/organizations' style={linkStyle}>
            <Paper elevation={3} style={cardStyle}>
              <div style={circleStyle}>1</div>
              <Typography variant="h6" gutterBottom>
                Choose Organization
              </Typography>
              <Typography>
                Select the organization best suited towards your needs and requirements based on the city of the organization.
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link to='/myCases' style={linkStyle}>
            <Paper elevation={3} style={cardStyle}>
              <div style={circleStyle}>2</div>
              <Typography variant="h6" gutterBottom>
                View Case Documents
              </Typography>
              <Typography>
                View the case documents and case details pertaining to your case.
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link to='/submit-case-docs' style={linkStyle}>
            <Paper elevation={3} style={cardStyle}>
              <div style={circleStyle}>3</div>
              <Typography variant="h6" gutterBottom>
                Submit Case Documentation
              </Typography>
              <Typography>
                Case-wise document details submission and uploading.
              </Typography>
            </Paper>
          </Link>
        </Grid>
       
      </Grid>
    </div>
  );
}

export default ServicesPage;