import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { ListItemText, ListItemIcon, ListItem, Collapse } from '@mui/material';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom-latest';
import Menu from '../menu';
import NearMeIcon from '@mui/icons-material/NearMe';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import profile from '../../images/profile.png';
import logo from '../../images/logo.png';
import AppsIcon from '@mui/icons-material/Apps';
import StarIcon from '@mui/icons-material/Star';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom-latest';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { TabMenuContext } from '../../Context/TabMenuContext';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
//icons
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DashboardIcon from '@mui/icons-material/Dashboard';
const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function Header() {
  //GET FROM LOCALSTORAGE
  const loginName = localStorage.getItem('loginName');

  const tabMenu = useContext(TabMenuContext);
  const [open, setOpen] = React.useState(false);
  const [dashboardSubOpen, setdashboardSubOpen] = React.useState(false);
  const [dataSourceSubOpen, setdataSourceSubOpen] = React.useState(false);
  const [jobScheduleSubOpen, setjobScheduleSubOpen] = React.useState(false);
  const [SettingsSubOpen, setSettingsSubOpen] = React.useState(false);
  // const navigate = useNavigate();
  const history = useHistory();
  // const [SubActiveValue, setSubActiveValue] = React.useState(0);
  const SubActiveValue = tabMenu.state.SubActiveValue;
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const dashboardMenu = (menu) => {
    setOpen(false);
    if (menu == 'dashboard') {
      setdashboardSubOpen(!dashboardSubOpen);
      setdataSourceSubOpen(false);
      setjobScheduleSubOpen(false);
      setSettingsSubOpen(false);
    }
    if (menu == 'dataSource') {
      setdataSourceSubOpen(!dataSourceSubOpen);
      setdashboardSubOpen(false);
      setjobScheduleSubOpen(false);
      setSettingsSubOpen(false);
    }
    if (menu == 'jobScedule') {
      setdataSourceSubOpen(false);
      setdashboardSubOpen(false);
      setjobScheduleSubOpen(!jobScheduleSubOpen);
      setSettingsSubOpen(false);
    }
    if (menu == 'settings') {
      setdataSourceSubOpen(false);
      setdashboardSubOpen(false);
      setjobScheduleSubOpen(false);
      setSettingsSubOpen(!SettingsSubOpen);
    }
  };

  const handleSubMenu = (menu) => {
    dashboardMenu(menu);
    setOpen(true);
  };
  useEffect(() => {
    if (SubActiveValue == 0 || SubActiveValue == 1) {
      setdashboardSubOpen(true);
      setdataSourceSubOpen(false);
      setjobScheduleSubOpen(false);
      setSettingsSubOpen(false);
      setOpen(true);
    } else if (
      SubActiveValue == 9 ||
      SubActiveValue == 10 ||
      SubActiveValue == 11 ||
      SubActiveValue == 12
    ) {
      setdashboardSubOpen(false);
      setdataSourceSubOpen(false);
      setjobScheduleSubOpen(false);
      setSettingsSubOpen(true);
      setOpen(true);
    } else if (SubActiveValue == 9 || SubActiveValue == 10) {
      setdashboardSubOpen(false);
      setdataSourceSubOpen(true);
      setjobScheduleSubOpen(false);
      setSettingsSubOpen(false);
      setOpen(true);
    } else {
      setdashboardSubOpen(false);
      setdataSourceSubOpen(false);
      setjobScheduleSubOpen(false);
      setSettingsSubOpen(false);
      setOpen(false);
    }
  }, [SubActiveValue]);

  const helpHandleClick = () => {
    setOpen(!open);
    //navigate('/help');
    history.push('/help');
  };

  // const handleDashboardSubMenu = () => {
  //   setdashboardSubOpen(!dashboardSubOpen);
  //   setOpen(true);
  // };
  // const handleDataSourceSubMenu = () => {
  //   setdataSourceSubOpen(!dataSourceSubOpen);
  //   setOpen(true);
  // };
  // const handlejobScheduleSubMenu = () => {
  //   setjobScheduleSubOpen(!jobScheduleSubOpen);
  //   setOpen(true);
  // };
  // const handleSettingsSubMenu = () => {
  //   setSettingsSubOpen(!SettingsSubOpen);
  //   setOpen(true);
  // };
  const LogoutHandler = () => {
    debugger;
    history.push('/');
  };
  const handleChange = (newValue) => {
    //setValue(newValue);
    // setSubActiveValue(newValue);

    setOpen(true);
    switch (newValue) {
      case 0:
        tabMenu.dispatch({ type: 'Dashboard_Insight' });
        history.push('/TabMenu');
        //navigate('/TabMenu');
        break;
      case 1:
        tabMenu.dispatch({ type: 'Dashboard_RemedialAction' });
        history.push('/TabMenu');
        //navigate('/TabMenu');
        break;
      case 9:
        tabMenu.dispatch({ type: 'Settings_Config' });
        history.push('/Settings');
        // navigate('/Settings');
        break;
      case 10:
        tabMenu.dispatch({ type: 'Settings_User' });
        history.push('/Settings');
        //navigate('/Settings');
        break;
      case 11:
        tabMenu.dispatch({ type: 'Settings_Roles' });
        history.push('/Settings');
        // navigate('/Settings');
        break;
      case 12:
        tabMenu.dispatch({ type: 'Settings_Tag' });
        history.push('/Settings');
        // navigate('/Settings');
        break;
      case 13:
        tabMenu.dispatch({ type: 'DataSource_Source' });
        history.push('/DataSource');
        // navigate('/Settings');
        break;
      case 14:
        tabMenu.dispatch({ type: 'DataSource_Connection' });
        history.push('/DataSource');
        // navigate('/Settings');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>

          <div class="profile-box">
            <img src={profile} alt="profile" />
            <div class="profile-name">
              {' '}
              <span>Hi,</span> {loginName}
            </div>
          </div>

          <div class="header-right">
            <IconButton
              size="large"
              aria-label="show 8 new notifications"
              color="inherit"
            >
              <Badge badgeContent={9} color="success">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* <Menu /> */}
            <IconButton
              size="large"
              aria-label="show 8 new notifications"
              color="inherit"
              onClick={LogoutHandler}
            >
              <LogoutIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <IconButton onClick={handleDrawerClose} className="arrow-btn">
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
        <DrawerHeader>
          <img src={logo} alt="logo" />
        </DrawerHeader>
        <Divider />
        <div class="menu-link">
          <List component="nav">
            <ul onClick={() => handleSubMenu('dashboard')}>
              <li>
                <DashboardIcon /> <span>Dashboard</span>
                {dashboardSubOpen ? (
                  <ExpandMore style={{ marginLeft: '2em' }} />
                ) : (
                  <ChevronRightIcon className="icon-next" />
                )}
              </li>
            </ul>

            <Collapse
              in={dashboardSubOpen}
              timeout="auto"
              unmountOnExit
              sx={{ marginLeft: '0.6em' }}
            >
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(0)}
                  selected={SubActiveValue === 0}
                >
                  <ListItemText primary="Insights" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(1)}
                  selected={SubActiveValue === 1}
                >
                  <ListItemText primary="Remedial Action" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <List component="nav">
            <ul onClick={() => handleSubMenu('dataSource')}>
              <li>
                <MenuIcon /> <span>Data Source</span>
                {dataSourceSubOpen ? (
                  <ExpandMore style={{ marginLeft: '2em' }} />
                ) : (
                  <ChevronRightIcon className="icon-next" />
                )}
              </li>
            </ul>

            <Collapse
              in={dataSourceSubOpen}
              timeout="auto"
              unmountOnExit
              sx={{ marginLeft: '0.6em' }}
            >
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(13)}
                  selected={SubActiveValue === 13}
                >
                  <ListItemText primary="Source" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(14)}
                  selected={SubActiveValue === 14}
                >
                  <ListItemText primary="Connection" />
                </ListItem>
              </List>
            </Collapse>
          </List>

          <List component="nav">
            <ul onClick={() => handleSubMenu('jobScedule')}>
              <li>
                <ScheduleIcon /> <span>Job Scheduling</span>
                {jobScheduleSubOpen ? (
                  <ExpandMore style={{ marginLeft: '2em' }} />
                ) : (
                  <ChevronRightIcon className="icon-next" />
                )}
              </li>
            </ul>

            <Collapse
              in={jobScheduleSubOpen}
              timeout="auto"
              unmountOnExit
              sx={{ marginLeft: '0.6em' }}
            >
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(0)}
                  selected={SubActiveValue === 0}
                >
                  <ListItemText primary="Jobs" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(1)}
                  selected={SubActiveValue === 1}
                >
                  <ListItemText primary="Schedules" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(1)}
                  selected={SubActiveValue === 1}
                >
                  <ListItemText primary="Calender" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(1)}
                  selected={SubActiveValue === 1}
                >
                  <ListItemText primary="Application" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(1)}
                  selected={SubActiveValue === 1}
                >
                  <ListItemText primary="Application Template" />
                </ListItem>
              </List>
            </Collapse>
          </List>

          <Divider />
          <List component="nav">
            <ul onClick={() => handleSubMenu('settings')}>
              <li>
                <SettingsIcon /> <span>Settings</span>
                {SettingsSubOpen ? (
                  <ExpandMore style={{ marginLeft: '2em' }} />
                ) : (
                  <ChevronRightIcon className="icon-next" />
                )}
              </li>
            </ul>

            <Collapse
              in={SettingsSubOpen}
              timeout="auto"
              unmountOnExit
              sx={{ marginLeft: '0.6em' }}
            >
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(9)}
                  selected={SubActiveValue === 9}
                >
                  <ListItemText primary="Config" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(10)}
                  selected={SubActiveValue === 10}
                >
                  <ListItemText primary="Users" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(11)}
                  selected={SubActiveValue === 11}
                >
                  <ListItemText primary="Roles" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(12)}
                  selected={SubActiveValue === 12}
                >
                  <ListItemText primary="Tags" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <List component="nav">
            {/* <h3>Help</h3> */}
            <ul>
              <li onClick={helpHandleClick}>
                <HelpIcon /> Help
              </li>
            </ul>
          </List>
          {/* <List>
            <h3>Work Space</h3>
            <ul>
              <li>
                <Link to="/Roles">
                  {' '}
                  <AccountBalanceIcon /> Roles
                </Link>
              </li>
              <li>
                <a href="#">
                  {' '}
                  <AccountBalanceIcon /> Schemas / Models
                </a>
              </li>
              <li>
                <a href="#">
                  {' '}
                  <FolderIcon /> Sources
                </a>
              </li>
              <li>
                <a href="#">
                  {' '}
                  <NearMeIcon /> Destinations
                </a>
              </li>
              <li>
                <a href="#">
                  {' '}
                  <PersonIcon /> Fund Admins
                </a>
              </li>
            </ul>
          </List> */}
        </div>
        <Divider />
      </Drawer>
    </>
  );
}

export default Header;
