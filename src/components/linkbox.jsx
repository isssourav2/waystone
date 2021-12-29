import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <div className="link-box">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          View Data Pipelines
        </Typography>
      
      </CardContent>
   
    <CardActions>
        <AddCircleIcon/>
    </CardActions>
    </div>
    <div className="link-box">
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         View Data Pipelines
      </Typography>
     
    </CardContent>
    
    <CardActions>
        <EditRoadOutlinedIcon/>
    </CardActions>
    </div>
    <div className="link-box">
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         View Data Pipelines
      </Typography>
     
    </CardContent>
    <CardActions>
        <EditRoadOutlinedIcon/>
    </CardActions>
    </div>

  </React.Fragment>
  
);





export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
   
  );
}