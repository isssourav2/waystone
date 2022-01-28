import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Dashboard } from '../..';
import { Roles, User, Tags, Email, Application } from '../../../components';
import { TabMenuContext } from '../../../Context/TabMenuContext';
import BasicButtons from '../../Stapper';

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
  const tabMenuOpenIndex = tabMenu.state.TabJobSchedule;

  // const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    //setValue(newValue);
    console.log('JobSchedule_Jobs', newValue);
    switch (newValue) {
      case 0:
        tabMenu.dispatch({ type: 'JobScheduling_Jobs' });
        break;
      case 1:
        tabMenu.dispatch({ type: 'JobScheduling_Schedule' });
        break;
      case 2:
        tabMenu.dispatch({ type: 'JobScheduling_Calender' });
        break;
      case 3:
        tabMenu.dispatch({ type: 'JobScheduling_Application' });
        break;
      case 4:
        tabMenu.dispatch({ type: 'JobScheduling_ApplicationTemplate' });
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
          <Tab label="Jobs" {...a11yProps(0)} />
          <Tab label="Schedules" {...a11yProps(1)} />
          <Tab label="Calendar" {...a11yProps(2)} />
          <Tab label="Application" {...a11yProps(3)} />
          <Tab label="Application Template" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <TabPanel value={tabMenuOpenIndex} index={0} className="frame">
        <BasicButtons/>
      </TabPanel>
      <TabPanel value={tabMenuOpenIndex} index={1} className="frame">
        Scheduled
      </TabPanel>
      <TabPanel value={tabMenuOpenIndex} index={2} className="frame">
        Calendar
      </TabPanel>
      <TabPanel value={tabMenuOpenIndex} index={3} className="frame">
        <Application />
      </TabPanel>
      <TabPanel value={tabMenuOpenIndex} index={4} className="frame">
        Application Template
      </TabPanel>
    </Box>
  );
};

export default Home;
