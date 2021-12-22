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

import EditIcon from '@mui/icons-material/Edit';

export default function ComplexGrid() {

  return (
    
    <Paper sx={{ p: 1, margin: 'auto', maxWidth: 700, flexGrow: 5 }}>
      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <CheckCircleIcon/>
          </ButtonBase>
        </Grid>
        <Grid item  sm container lg={11} md={11} sm={11} sx={11} xl={11} xs={11} >
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Scheduled Jobs
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              203
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <CachedIcon/>
          </ButtonBase>
        </Grid>
        <Grid item sm container lg={11} md={11} sm={11} sx={11} xl={11} xs={11}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              Completed
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
             170
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <ErrorIcon/>
          </ButtonBase>
        </Grid>
        <Grid item  sm container lg={11} md={11} sm={11} sx={11} xl={11} xs={11}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              Failed
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
             2
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <AccessAlarmsIcon/>
          </ButtonBase>
        </Grid>
        <Grid item  sm container lg={11} md={11} sm={11} sx={11} xl={11} xs={11}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               Overdue
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              5
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={1} md={1} sm={1} sx={1} xl={1} xs={1}>
          <ButtonBase sx={{ width: 20, height: 50 }}>
            <CheckCircleIcon/>
          </ButtonBase>
        </Grid>
        <Grid item sm container lg={11} md={11} sm={11} sx={11} xl={11} xs={11}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              Pending
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              26
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    </Paper>
  );
}
