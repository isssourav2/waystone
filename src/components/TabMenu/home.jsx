import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TabMenuContext } from '../../Context/TabMenuContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Home = () => {
  const tabMenu = useContext(TabMenuContext);
  const tabMenuOpenIndex = tabMenu.state.TabMenuOpen;

  // const [value, setValue] = React.useState(0);
  console.log('Menu Index', tabMenuOpenIndex);
  const handleChange = (event, newValue) => {
    //setValue(newValue);
    switch (newValue) {
      case 0:
        tabMenu.dispatch({ type: 'Tab1' });
        break;
      case 1:
        tabMenu.dispatch({ type: 'Tab2' });
        break;
      case 2:
        tabMenu.dispatch({ type: 'Tab3' });
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%', marginTop: '4em' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabMenuOpenIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={tabMenuOpenIndex} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={tabMenuOpenIndex} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tabMenuOpenIndex} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default Home;
