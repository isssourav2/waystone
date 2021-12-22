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
import Link from '@mui/material/Link';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function ComplexGrid() {
  const classes = useStyles();
  return (
    
    <Paper sx={{ p: 1, margin: 'auto', maxWidth: 700, flexGrow: 5 }}>
      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <CheckCircleIcon/>
          </ButtonBase>
        </Grid>
        <Grid item container lg={11} md={11} sm={11} sx={11} xl={11} xs={11}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               2 incomplete Pipelines need your attention
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Link class="btn-link" href="#"> Review</Link>
          </Grid>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <CachedIcon/>
          </ButtonBase>
        </Grid>
        <Grid item container lg={11} md={11} sm={11} sx={11} xl={11} xs={11}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               2 Pipelines Schedule required
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
          <Link class="btn-link" href="#"> Review</Link>
          </Grid>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <ErrorIcon/>
          </ButtonBase>
        </Grid>
        <Grid item container lg={11} md={11} sm={11} sx={11} xl={11} xs={11}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              2 Pipelines are failing since last 2 weeks
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
          <Link class="btn-link" href="#"> Review</Link>
          </Grid>
        </Grid>
      </Grid>

     
      

      

    </Paper>
  
  );
}
