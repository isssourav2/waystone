import React, { useContext } from 'react';
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
import { Link } from 'react-router-dom';
import Menu from '../menu';
import NearMeIcon from '@mui/icons-material/NearMe';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import profile from '../../images/profile.png';
import logo from '../../images/logo.png';
import AppsIcon from '@mui/icons-material/Apps';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { TabMenuContext } from '../../Context/TabMenuContext';
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
  const tabMenu = useContext(TabMenuContext);
  const [open, setOpen] = React.useState(false);
  const [subOpen, setSubOpen] = React.useState(false);
  const navigate = useNavigate();
  // const [SubActiveValue, setSubActiveValue] = React.useState(0);
  const SubActiveValue = tabMenu.state.SubActiveValue;
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubMenu = () => {
    setSubOpen(!subOpen);
    setOpen(true);
  };

  const handleChange = (newValue) => {
    //setValue(newValue);
    // setSubActiveValue(newValue);
    navigate('/TabMenu');
    setOpen(true);
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
        <div class="menu-link">
          <List component="nav">
            <div class="spacer"></div>
            <h3>Main Menu</h3>
            <ul>
              <li>
                <Link to="/">
                  {' '}
                  <HomeIcon /> <span>Dashboard</span>
                </Link>
              </li>
            </ul>
          </List>
          <Divider />
          <List component="nav">
            <div class="spacer"></div>
            <ul>
              <li>
                <Link to="/Application">
                  {' '}
                  <AppsIcon /> <span>Application</span>
                </Link>
              </li>
            </ul>
          </List>
          <List component="nav">
            <ul onClick={handleSubMenu}>
              <li>
                <InboxIcon /> <span>Report</span>
                {subOpen ? (
                  <ExpandLess style={{ marginLeft: '2em' }} />
                ) : (
                  <ExpandMore style={{ marginLeft: '2em' }} />
                )}
              </li>
            </ul>
            {/* <ListItem button onClick={handleSubMenu}>
              <ListItemIcon
              // style={{ marginLeft: '-1.2em' }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Report"
                // style={{ marginLeft: '-1.2em', marginRight: '6.5em' }}
              />
              {subOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem> */}
            <Collapse
              in={subOpen}
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
                  <ListItemIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root">
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Item One" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(1)}
                  selected={SubActiveValue === 1}
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Item Two" />
                </ListItem>
              </List>
              <List component="ul" disablePadding>
                <ListItem
                  button
                  onClick={() => handleChange(2)}
                  selected={SubActiveValue === 2}
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Item Three" />
                </ListItem>
              </List>
            </Collapse>
          </List>

          <List>
            <h3>Work Space</h3>
            <ul>
            <li>
                <a href="#">
                  {' '}
                  <AccountBalanceIcon /> Roles
                </a>
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
          </List>
        </div>
        <Divider />
      </Drawer>
    </>
  );
}

export default Header;
