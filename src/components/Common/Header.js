import React from 'react';
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
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Menu from '../menu';



import profile from '../../images/profile.png';
import logo from '../../images/logo.png';

import StarIcon from '@mui/icons-material/Star';

import NotificationsIcon from '@mui/icons-material/Notifications';

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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
              <span>Hi,</span> Abdalla
            </div>
          </div>

          <div class="header-right">
            <form get="post">
              <div class="search-box">
                <SearchIcon />
                <input
                  type="search"
                  placeholder="Global search by keyword..."
                />
              </div>
            </form>

            <IconButton
              size="large"
              aria-label="show 8 new notifications"
              color="inherit"
            >
              <Badge badgeContent={9} color="success">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Menu />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <IconButton onClick={handleDrawerClose}>
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

        <List>
          <div class="spacer"></div>
          <h3>Main Menu</h3>
          <ul>
            <li>
              <Link to="/">
                {' '}
                <HomeIcon /> Dashboard
              </Link>
            </li>
          </ul>
        </List>
        <List>
          <h3>Work Space</h3>
          <ul>
            <li>
              <Link to="/DataExtracter">
                {' '}
                <StarIcon /> Data Pipelines
              </Link>
            </li>
            <li>
              <a href="#">
                {' '}
                <ArticleIcon /> Schemas / Models
              </a>
            </li>
            <li>
              <a href="#">
                {' '}
                <AssessmentIcon /> Sources
              </a>
            </li>
            <li>
              <a href="#">
                {' '}
                <TimelineIcon /> Destinations
              </a>
            </li>
            <li>
              <a href="#">
                {' '}
                <AssessmentIcon /> Fund Admins
              </a>
            </li>
            
          </ul>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default Header;
