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
const home = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div class="content-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

          <Grid item xs={3}>
            <h3>About PPM</h3>

          </Grid>


            
            <Grid item xs={6}>
              <div class="panel-box">
                <div class="panel-heading">
                  <span class="icon-cell">
                    {' '}
                    <AssessmentIcon />
                  </span>
                  <h3> Reports status</h3>
                </div>

                <Stapper />
              </div>
            </Grid>


            <Grid item xs={6}>
              <div class="panel-box">
                <div class="panel-heading">
                  <span class="icon-cell">
                    {' '}
                    <AssessmentIcon />
                  </span>
                  <h3> Reports status</h3>
                </div>

                <Stapper />
              </div>
            </Grid>

            

         
        </Box>
      </div>
    </Box>
  );
};

export default home;
