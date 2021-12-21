import React from 'react';
import Home from './home';
import Header from '../Common/Header';
import Box from '@mui/material/Box';
const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Home />
      </Box>
  );
};

export default Dashboard;
