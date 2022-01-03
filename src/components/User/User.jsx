import React from 'react';
import Home from './home';
import Header from '../Common/Header';
import Box from '@mui/material/Box';
const Roles = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Home />
    </Box>
  );
};

export default Roles;