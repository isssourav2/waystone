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
import DateRangeIcon from '@mui/icons-material/DateRange';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

      
        <Typography item>
        <div class="panel-heading">
            <span class="icon-cell">
              {' '}
              <DateRangeIcon />
            </span>
            <h3>Help</h3>
          </div>
        </Typography>
      




      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               <strong>User guide</strong>
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
          <Link class="btn-link" href="http://localhost:3000/documents/PPM%20User%20Manual%20-%20V.1.4.pdf" target="_blank"> <ArrowForwardIcon/></Link>
          </Grid>
        </Grid>
      </Grid>

   
      <Typography item>
        <div class="panel-heading">
            <span class="icon-cell">
              {' '}
              <DateRangeIcon />
            </span>
            <br/>
            <h3>Resources</h3>
          </div>
        </Typography>


        <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               <strong>Waystone Application Support (JIRA)</strong>
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
          <Link class="btn-link" href="https://waystone-it.atlassian.net/jira/projects" target="_blank"> <ArrowForwardIcon/></Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               <strong>Insight</strong>
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
          <Link class="btn-link" href="10.200.100.43/Insight/" target="_blank" > <ArrowForwardIcon/></Link>
          </Grid>
        </Grid>
      </Grid>
       
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               <strong>RiskCore</strong>
              </Typography>
              
            </Grid>
           
          </Grid>
          <Grid item>
          <Link class="btn-link" href="https://riskcore-test.dmsgovernance.com/" target="_blank"> <ArrowForwardIcon/></Link>
          </Grid>
        </Grid>
      </Grid>


      

      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               <strong>OpsCore</strong>
              </Typography>
             </Grid>
           
          </Grid>
          <Grid item>
          <Link class="btn-link" href="http://opscore.uat.dmsgovernance.com:9998/" target="_blank"><ArrowForwardIcon/></Link>
          </Grid>
        </Grid>
      </Grid>



      

    </Paper>
  
  );
}
