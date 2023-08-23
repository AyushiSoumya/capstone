import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

function RolesPage() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('http://localhost:8080/v1/roles')
      .then((response) => {
        setRoles(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
      });
  }, []);

  const pageStyle = {
      backgroundColor: '#27445C',
    color: 'white', // White text color
      
     // Professional blue background color
    minHeight: '100vh', // Full-page height
  };

  const navbarStyle = {
    backgroundColor: '#f0f8ff', // Light blue navbar background color
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const cardStyle = {
    backgroundColor: 'navy', // Navy blue background color for cards
    color: 'white', // White text color
  };

  const cardContentStyle = {
    backgroundColor: '#f0f8ff', // Very light blue background color for card content
    color: 'navy', // Navy text color
    minHeight: '120px', // Adjust the minimum height as needed
  };

  return (
    <div style={pageStyle}>
      
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Roles
        </Typography>
        <Grid container spacing={2}>
          {roles.map((role) => (
            <Grid item xs={12} sm={6} md={4} key={role.roleId}>
              <Card style={cardStyle}>
                <CardContent style={cardContentStyle}>
                  <Typography variant="h6" component="div">
                    {role.roleName}
                  </Typography>
                  <Typography color="textSecondary">{role.roleDescription}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RolesPage;
