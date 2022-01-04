import React from 'react';
import Home from './home';
import Header from '../Common/Header';
import Box from '@mui/material/Box';
const Email = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Home />
    </Box>
  );
};

export default Email;