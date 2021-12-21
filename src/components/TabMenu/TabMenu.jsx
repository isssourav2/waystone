import React from 'react';
import Box from '@mui/material/Box';
import Home from './home';
import Header from '../Common/Header';
const TabMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Home value1={value} />
    </Box>
  );
};

export default TabMenu;
