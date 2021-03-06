import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Dashboard } from '../..';
import { TabMenuContext } from '../../../Context/TabMenuContext';

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
  const handleChange = (event, newValue) => {
    //setValue(newValue);
    switch (newValue) {
      case 0:
        tabMenu.dispatch({ type: 'Dashboard_Insight' });
        break;
      case 1:
        tabMenu.dispatch({ type: 'Dashboard_RemedialAction' });
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%', marginTop: '4em', marginLeft: '1.4em' }}>
      <Box
        className="tabDashboard"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tabs
          value={tabMenuOpenIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Insights" {...a11yProps(0)} />
          <Tab label="Remedial Action" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={tabMenuOpenIndex} index={0} className="frame">
        <Dashboard />
      </TabPanel>
      <TabPanel value={tabMenuOpenIndex} index={1}>
        Remedial Action
      </TabPanel>
    </Box>
  );
};

export default Home;
