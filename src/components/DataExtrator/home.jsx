import React from 'react';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DataGridPro from '../DataGridPro';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Stapper from '../Stapper';
import Calender from '../calender';
import Chart from '../chart';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import Link from '@mui/material/Link';

import Linkbord from '../../components/linkbord.jsx';

import EditIcon from '@mui/icons-material/Edit';


const home = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div class="content-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
              <h2>About PPM</h2>
              <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis est nunc, at tempus orci commodo quis. Nullam convallis malesuada orci, quis tincidunt urna tempor vitae. Quisque nulla ligula, feugiat in congue quis, dignissim at elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eleifend neque id commodo gravida. </p>
             </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} sx={12} xl={6} xs={12}>
              <div class="panel-box">
                <div class="panel-heading">
                  <span class="icon-cell">
                    {' '}
                    <AssessmentIcon />
                  </span>
                  <h3> Release Notes</h3>
                </div>

                

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
       
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
       
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


    <Link class="btn-link" href="#"> View more <DoubleArrowIcon/></Link>

    </div>
    <div class="panel-box">
          <h3>Where to next?</h3>
        <br/>
          <Link class="btn-link" href="#"> View Dashborad  <EditIcon/> </Link>

          <Link class="btn-link" href="#"> Create Data Pipeline <EditIcon/></Link>

          <Link class="btn-link" href="#"> Add Source <EditIcon/></Link>

              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} sx={12} xl={6} xs={12}>
              <div class="panel-box">
                
                
                <Linkbord/>

              </div>
            </Grid>
          </Grid>

          
        </Box>
      </div>
    </Box>
  );
};

export default home;
