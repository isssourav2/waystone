import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import SearchIcon from '@mui/icons-material/Search';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';

import Menu from './components/menu';

import profile from './images/profile.png';
import logo from './images/logo.png';
import style from './style/style.css';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

import EastIcon from '@mui/icons-material/East';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import NotificationsIcon from '@mui/icons-material/Notifications';

import Dataextract from './data-extract.jsx';

import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon3 from './images/icon-3.png';
import icon4 from './images/icon-4.png';
import icon5 from './images/icon-5.png';


<link rel="stylesheet" href="{style}"></link>




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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
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
          <Typography variant="h6" noWrap component="div">
          
          </Typography>

          <div class="profile-box">
             <img src={profile} alt="profile" /><div class="profile-name"> <span >Hi,</span> Abdalla</div>  
          </div>  

          <div class="header-right">
          <form get="post">
            <div class="search-box">
              <SearchIcon />
                <input type="search" placeholder="Global search by keyword..."/>
                
              
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
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        <DrawerHeader>
        <img src={logo} alt="logo" />

        
          
        </DrawerHeader>
        <Divider />

        <List>
          <div class="spacer"></div>
           <h3>Main Menu</h3>
            <ul>
              <li><a href="home.jsx"> <HomeIcon /> Dashboard</a></li>
            </ul>
   
        </List>
        <List>
          
           <h3>Work Space</h3>
            <ul>
              <li><a src={Dataextract}> <DeviceHubIcon /> Data Extract</a></li>
              <li><a href="data-extract.jsx"> <ArticleIcon /> Rules Engine</a></li>
              <li><a href="#"> <AssessmentIcon /> Regulary Reporting</a></li>
              <li><a href="#"> <TimelineIcon /> Investment Risk</a></li>
              <li><a href="#"> <AssessmentIcon /> Investor Reports</a></li>
              <li><a href="#"> <AssignmentIcon /> Internar Reporting</a></li>
              <li><a href="#"> <AddLinkIcon /> Connectors</a></li>
              <li><a href="#"> <AssignmentIcon /> Custom Reporting</a></li>
              <li><a href="#"> <AccountBalanceIcon /> Structured Finance</a></li>
              <li><a href="#"> <AttachFileIcon /> ITC</a></li>
              <li><a href="#"> <AdminPanelSettingsIcon /> Administration</a></li>
            </ul>

        </List>
        
        <Divider />

                      
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      <div class="content-box">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
          <Typography> <h2>Welcome,</h2> </Typography>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={8}>
            <Typography><h4>New Feature Release</h4></Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography><h4>Help</h4></Typography>
          </Grid>
          <Grid item xs={8}>
            
              <div class="col-box">
                <div class="col-box-content">
                  <h3>Release Notes Version 3.23.0 - Insight</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ipsum ex. Quisque fringilla ornare ligula pharetra suscipit. Donec lectus urna, tempor at accumsan nec, aliquet a erat.</p>
                </div>
                <SimCardDownloadIcon />

              </div>
              <div class="col-box">
                <div class="col-box-content">
                  <h3>Release Notes Version 3.23.0 - Insight</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ipsum ex. Quisque fringilla ornare ligula pharetra suscipit. Donec lectus urna, tempor at accumsan nec, aliquet a erat.</p>
                </div>
                <SimCardDownloadIcon />

              </div>
              <div class="col-box">
                <div class="col-box-content">
                  <h3>Release Notes Version 3.23.0 - Insight</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ipsum ex. Quisque fringilla ornare ligula pharetra suscipit. Donec lectus urna, tempor at accumsan nec, aliquet a erat.</p>
                </div>
                <SimCardDownloadIcon />

              </div>
              <div class="col-box">
                <div class="col-box-content">
                  <h3>Release Notes Version 3.23.0 - Insight</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ipsum ex. Quisque fringilla ornare ligula pharetra suscipit. Donec lectus urna, tempor at accumsan nec, aliquet a erat.</p>
                </div>
                <SimCardDownloadIcon />

              </div>
              <div class="col-box">
                <div class="col-box-content">
                  <h3>Release Notes Version 3.23.0 - Insight</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ipsum ex. Quisque fringilla ornare ligula pharetra suscipit. Donec lectus urna, tempor at accumsan nec, aliquet a erat.</p>
                </div>
                <SimCardDownloadIcon />

              </div>
             
           
          </Grid>
          <Grid item xs={4}>
          
              <div class="col-box-small">
                <div class="icon-box-fist">
                  <AssignmentIcon />
                </div>
                  <h3>User Guide Insight</h3>
                  <a href="#" class="icon-box-small">
                  <EastIcon/> 
                  </a>
              </div>

              <div class="heading-box"><h4>Resources</h4></div>

              <div class="col-box-group">

                <div class="col-box-gp">
                  <div class="icon-box-fist">
                   <img src={icon1} alt="icon-1" />
                  </div>
                    <div class="content-box-gp">
                      <p>Waystone - Services to the Asset Management Industry</p>
                    </div>
                    <a href="#" class="icon-box-small">
                    <EastIcon/> 
                    </a>
                </div>

                <div class="col-box-gp">
                  <div class="icon-box-fist">
                   <img src={icon2} alt="icon-2" />
                  </div>
                    <div class="content-box-gp">
                      <p>Jira Software</p>
                    </div>
                    <a href="#" class="icon-box-small">
                    <EastIcon/> 
                    </a>
                </div>

                <div class="col-box-gp">
                  <div class="icon-box-fist">
                   <img src={icon3} alt="icon-3" />
                  </div>
                    <div class="content-box-gp">
                      <p>Department for international Tax Cooperation</p>
                    </div>
                    <a href="#" class="icon-box-small">
                    <EastIcon/> 
                    </a>
                </div>

                <div class="col-box-gp">
                  <div class="icon-box-fist">
                   <img src={icon4} alt="icon-4" />
                  </div>
                    <div class="content-box-gp">
                      <p>Central Bank of Ireland</p>
                    </div>
                    <a href="#" class="icon-box-small">
                    <EastIcon/> 
                    </a>
                </div>


                <div class="col-box-gp">
                  <div class="icon-box-fist">
                   <img src={icon5} alt="icon-5" />
                  </div>
                    <div class="content-box-gp">
                      <p>Department for International Tax Cooperation</p>
                    </div>
                    <a href="#" class="icon-box-small">
                    <EastIcon/> 
                    </a>
                </div>



              </div>

            
          </Grid>

            
        <Grid item xs={12}>
          <a href="" class="link-btn" >More released features <KeyboardArrowRightIcon/></a>
        </Grid>
        
        </Grid>
      </Box>
    </div>


    
      </Box>
    </Box>
  );
}

