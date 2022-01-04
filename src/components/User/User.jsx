import React from 'react';
import Home from './home';
import Header from '../Common/Header';
import Box from '@mui/material/Box';
const User = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Home />
    </Box>
  );
};

export default User;