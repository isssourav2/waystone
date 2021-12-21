import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CachedIcon from '@mui/icons-material/Cached';

import ShareIcon from '@mui/icons-material/Share';
import GroupIcon from '@mui/icons-material/Group';
import MarginIcon from '@mui/icons-material/Margin';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import GppBadIcon from '@mui/icons-material/GppBad';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function GridAutoFlow() {
  return (
    <div class="cardstyle" style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(3, 1fr)',
         
          gap: 2,
        }}
      >
       <Grid container spacing={2}>
       <Grid item>
              <ButtonBase sx={{ width: 20, height: 50 }}>
                <GroupIcon/>
              </ButtonBase>
          </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                 <strong>203</strong> Total: Fund Admins
              </Typography>
              
            </Grid>
           
          </Grid>
         
        </Grid>
        <Grid item>
        <Link class="btn-link" href="#"> <DoubleArrowIcon/></Link>
          </Grid>
      </Grid>

      <Grid container spacing={2}>
          <Grid item>
              <ButtonBase sx={{ width: 20, height: 50 }}>
                <ShareIcon/>
              </ButtonBase>
          </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <strong>200</strong> Total: Sources
              </Typography>
              
            </Grid>
           
          </Grid>
          
        </Grid>
        <Grid item>
        <Link class="btn-link" href="#"> <DoubleArrowIcon/></Link>
          </Grid>
      </Grid>


      


      <Grid container spacing={2}>
           <Grid item>
              <ButtonBase sx={{ width: 20, height: 50 }}>
                <ShareIcon/>
              </ButtonBase>
          </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <strong>150/200</strong> Total: Destination
              </Typography>
              
            </Grid>
           
          </Grid>
           
        </Grid>
        <Grid item>
        <Link class="btn-link" href="#"> <DoubleArrowIcon/></Link>
          </Grid>
      </Grid>
        



      <Grid container spacing={2}>
          <Grid item>
              <ButtonBase sx={{ width: 20, height: 50 }}>
                <MarginIcon/>
              </ButtonBase>
          </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <strong>203</strong> Total: Data Pipelines
              </Typography>
              
            </Grid>
           
          </Grid>
            
        </Grid>
        <Grid item>
            <Link href="#"> <DoubleArrowIcon/></Link>
          </Grid>
      </Grid>
        


      <Grid container spacing={2}>
      <Grid item>
           <ButtonBase sx={{ width: 20, height: 50 }}>
             <AccessAlarmsIcon/>
           </ButtonBase>
         </Grid>
       <Grid item xs={12} sm container>
         <Grid item xs container direction="column" spacing={2}>
           <Grid item xs>
             <Typography gutterBottom variant="subtitle1" component="div">
             
             <strong>3000</strong> Total: Schedule Jobs
             </Typography>
             
           </Grid>
          
         </Grid>
         
       </Grid>
       <Grid item>
       <Link class="btn-link" href="#"> <DoubleArrowIcon/></Link>
          </Grid>
     </Grid>


     <Grid container spacing={2}>
      <Grid item>
           <ButtonBase sx={{ width: 20, height: 50 }}>
           <GppBadIcon/>
           </ButtonBase>
         </Grid>
       <Grid item xs={12} sm container>
         <Grid item xs container direction="column" spacing={2}>
           <Grid item xs>
             <Typography gutterBottom variant="subtitle1" component="div">
             
             <strong>03</strong> Todays Un-successful Jobs
             </Typography>
             
           </Grid>
          
         </Grid>
         
       </Grid>
       <Grid item>
       <Link class="btn-link" href="#"> <DoubleArrowIcon/></Link>
          </Grid>
     </Grid>





    
        
      </Box>

    </div>
    



  );
}
