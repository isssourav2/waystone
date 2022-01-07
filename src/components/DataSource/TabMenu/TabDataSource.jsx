import React from 'react';
import Box from '@mui/material/Box';
import Home from './home';
import Header from '../../Common/Header';
const TabDataSource = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Home />
    </Box>
  );
};

export default TabDataSource;
