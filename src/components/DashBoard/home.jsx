import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Calender from '../../components/calender.jsx';

import Boxrow from '../../components/Boxrow.jsx';
import Itemcol from '../../components/itemcol.jsx';
import Linkbox from '../../components/linkbox.jsx';
import Allert from '../../components/allert.jsx';
import Systems from '../../components/Systems.jsx';



import Link from '@mui/material/Link';

import '../../style/style.css';
{
  /* <link rel="stylesheet" href="{style}"></link>; */
}

export default function Home() {
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box >
      <CssBaseline />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div class="content-box">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={6} sx={12} xl={4} xs={12} >
                <Typography className="title-space">
                  {' '}
                  <h3>Jobs Overview </h3> <Calender />  {' '}
                </Typography>
                <div class="col-box">
                 
                  <CssBaseline />
                  <div class="box-row">
                  <Boxrow />
                 
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={6} sx={12} xl={4} xs={12} >
                <Typography>
                  {' '}
                  <h3>Recent Jobs</h3>{' '}
                </Typography>
                <div class="col-box">
                  
                  <div class="box-row">
                  <Itemcol />
                 
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12} sx={12} xl={4} xs={12} >
              
                <Typography>
                  {' '}
                  <h3>Quick Links</h3>{' '}
                </Typography>
                <div class="box-row">
                  <div class="col-box">
                    
                    <Linkbox />
                  </div>
                </div>
              </Grid>
             
              
              

             
            </Grid>
          </Box>
        </div>
      </Box>

     

    
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>
                  {' '}
                  <h3>Jobs Overview</h3>{' '}
                </Typography>
                <div class="col-box">
                 
                  <CssBaseline />
                  <div class="box-row">
                  <Allert />
                 
                  </div>
                </div>
              </Grid>
             
            </Grid>
          </Box>


         
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <Typography>
                    {' '}
                    <h3>System Overview</h3>{' '}
                  </Typography>
                </Grid>
              </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>   
               
                 
                  <CssBaseline />

                  <Grid item xs={12}>
                  <div class="box-row">
                  <Systems />
                 
                  </div>
                  </Grid>
             
            </Grid>
          </Box>
      </Box>


      </Box>
    


  );
}
