import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CachedIcon from '@mui/icons-material/Cached';
import ErrorIcon from '@mui/icons-material/Error';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

import CancelIcon from '@mui/icons-material/Cancel';

import AddTaskIcon from '@mui/icons-material/AddTask';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ComplexGrid() {

  return (
    
    <Paper sx={{ p: 1, margin: 'auto', maxWidth: 700, flexGrow: 5 }}>
      <Grid container spacing={2}>
        <Grid item lg={2} md={2} sm={2} sx={2} xl={2} xs={2}>
          <ButtonBase sx={{ width: 50, height: 50 }}>
            <AddTaskIcon/>
          </ButtonBase>
        </Grid>
        <Grid item container lg={10} md={10} sm={10} sx={10} xl={10} xs={10}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <h3>SEI Data Pipeline</h3>
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            Completed
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item lg={2} md={2} sm={2} sx={2} xl={2} xs={2}>
          <ButtonBase sx={{ width: 50, height: 50 }}>
            <SettingsIcon/>
          </ButtonBase>
        </Grid>
        <Grid item container lg={10} md={10} sm={10} sx={10} xl={10} xs={10}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <h3> Apex Data Pipeline</h3>
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            In Progress
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item lg={2} md={2} sm={2} sx={2} xl={2} xs={2}>
          <ButtonBase sx={{ width: 50, height: 50 }}>
            <CancelIcon/>
          </ButtonBase>
        </Grid>
        <Grid item container lg={10} md={10} sm={10} sx={10} xl={10} xs={10}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <h3>Nine Masts Pipeline</h3>
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
             
              Failed
            </Typography>
          </Grid>
        </Grid>
      </Grid>

     

    </Paper>
  );
}
