import * as React from 'react';
import Home from './home';
import Box from '@mui/material/Box';

import Header from '../Common/Header';
export default function Welcome() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Home />
    </Box>
  );
}
