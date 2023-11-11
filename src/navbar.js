import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import {Link} from 'react-router-dom'
const navbarStyle = {
  backgroundColor: '#ADD8E6',
  display: 'flex',
  justifyContent: 'space-between',
    alignItems: 'center',
  color:'white' // Align items vertically in the center
};

const Navbar = () => {
  return (
    <AppBar position='fixed' >
      
        <div position="static" style={navbarStyle}>
         <div>
                 <h3> CASEWISE</h3>
                  </div>
              <div>
                  <Link to="/services">
                      <Button >Services</Button>
                  </Link>
                  <Link to="/about">
                  
                      <Button >About Us</Button>
                  </Link>
                  <Link to="/">
                      
                  <Button >Login</Button>
                  </Link>
                  
          </div>
              </div>
          
     
    </AppBar>
  );
};

export default Navbar;
