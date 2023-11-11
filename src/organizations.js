// organizations.js

import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import organizationsImage from './organizations.png';

function Organizations() {
  const searchBarStyle = {
    backgroundColor: '#27445C',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center',
    height: '100%',
  };

  const imageStyle = {
    width: '100%',  // Make the image width 100%
    height: '100vh',  // Set the height to 100% of the viewport height
    borderRadius: '30%',
    margin: '0 auto',
    display: 'block',
  };

    const searchStyle = {
    width: '80%',
    padding: '15px',
    margin: '15px 0', // Add space around the input
    borderRadius: '20px', // Rounded edges
    border: 'none',
    backgroundColor: '#ADD8E6', // Input background color
    color: '#27445C', // Input text color
    fontSize: '16px', // Input text size
  };
  const rootStyle = {
    backgroundColor: '#27445C',
    padding: '64px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row', // Display children components in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
  };

  return (
    <div style={rootStyle}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        
          <Typography variant="h5" gutterBottom style={{ color: '#ADD8E6' ,padding:'30px'}}>
            Browse Organizations within the City
          </Typography>
          {/* Add your search bar component here */}
          <input type="text" placeholder="Search organizations..." style={searchStyle} />
          {/* Add other search-related components as needed */}
        
      </div>
      <div style={{ width: '50%' }}>
        <img src={organizationsImage} alt="Organizations" style={imageStyle} />
      </div>
    </div>
  );
}

export default Organizations;
