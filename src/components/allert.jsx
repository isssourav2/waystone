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

import Box from '@mui/material/Box';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
     <Grid item  sm container lg={12} md={12} sm={12} sx={12} xl={12} xs={12}  className="boxrow arrow">
     

       <Grid item xs container direction="column" spacing={0}>
         <Grid item xs>
           <Typography gutterBottom variant="subtitle1" component="div">
            <h3>2 Pipelines are failing since last 2 weeks </h3>
           </Typography>
           
         </Grid>
       
       </Grid>
       <Grid item>
         <Typography variant="subtitle1" component="div">
         <Link class="btn-link" href="#"> Review  <ArrowForwardIcon/> </Link>       
        </Typography>
       </Grid>
     </Grid>
     </Grid>



     <Grid container spacing={2}>
     <Grid item  sm container lg={12} md={12} sm={12} sx={12} xl={12} xs={12}  className="boxrow arrow">
     

       <Grid item xs container direction="column" spacing={0}>
         <Grid item xs>
           <Typography gutterBottom variant="subtitle1" component="div">
            <h3>2 Pipelines are failing since last 2 weeks </h3>
           </Typography>
           
         </Grid>
       
       </Grid>
       <Grid item>
         <Typography variant="subtitle1" component="div">
         <Link class="btn-link" href="#"> Review  <ArrowForwardIcon/> </Link>       
        </Typography>
       </Grid>
     </Grid>
     </Grid>


     <Grid container spacing={2}>
     <Grid item  sm container lg={12} md={12} sm={12} sx={12} xl={12} xs={12}  className="boxrow arrow">
     

       <Grid item xs container direction="column" spacing={0}>
         <Grid item xs>
           <Typography gutterBottom variant="subtitle1" component="div">
            <h3>2 Pipelines are failing since last 2 weeks </h3>
           </Typography>
           
         </Grid>
       
       </Grid>
       <Grid item>
         <Typography variant="subtitle1" component="div">
         <Link class="btn-link" href="#"> Review  <ArrowForwardIcon/> </Link>       
        </Typography>
       </Grid>
     </Grid>
     </Grid>


  




    
   </Paper>


  
  );
}
