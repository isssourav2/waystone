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
import { useHistory } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from '@mui/material/Link';

import Linkbord from '../linkbord.jsx';

import EditIcon from '@mui/icons-material/Edit';

const Home = () => {
  const history = useHistory();
  const CreateJobs=()=>{
    history.push("/TabJobsheduling");
  }
  const AddSource=()=>{
    history.push("/DataSource");
  }
   const AddConfig=()=>{
    history.push("/Settings");
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div class="content-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                <h2>About PPM</h2>
                <p style={{textAlign:'justify'}}>
                The PPM (Pre-Processing Module) is a Data Retrieval & Data ETL (Extract, Transform, Load) platform, the main goal of the platform is to retrieve files from different SDP's (data providers), transform those files in-flight as per the business requirement and then pushes the data from those files downstream to Risk and Reporting applications.{' '}
                </p>
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
                      primary="Version 1.8.4"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                           
                          </Typography>
                          {
                            "Release notes created on January 31, 2022"
                          }
                        </React.Fragment>
                      }
                    />

                    <div className="icon-box">
                      <Link href="http://localhost:3000/documents/PPM Release Notes - V.1.8.4.pdf" download>
                        <SimCardDownloadIcon />
                      </Link>
                    </div>
                  </ListItem>

                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Version 1.8.3"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                           
                          </Typography>
                          {"Release notes created on November 12, 2021"}
                        </React.Fragment>
                      }
                    />
                    <div className="icon-box">
                    <Link href="http://localhost:3000/documents/PPM Release Notes - V.1.8.3.pdf" download>
                        <SimCardDownloadIcon />
                      </Link>
                    </div>
                  </ListItem>

                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Version 1.8.2"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                           
                          </Typography>
                          {
                            'Release notes created on October 04, 2021'
                          }
                        </React.Fragment>
                      }
                    />
                    <div className="icon-box">
                    <Link href="http://localhost:3000/documents/PPM Release Notes - V.1.8.2.pdf" download>
                        <SimCardDownloadIcon />
                      </Link>
                    </div>
                  </ListItem>
                </List>

                <div class="panel-box-link">
                  <Link class="btn-link" href="#">
                    {' '}
                    View more <ArrowForwardIcon />
                  </Link>
                </div>
              </div>
              <div class="panel-box link-small">
                <h3>Where to next?</h3>
                <br />
                <List sx={{ width: '100%', bgcolor: 'background.paper' }} >
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Create Jobs" />

                    <div className="icon-box">
                      {/* <Link href={onClick={LogoutHandler}}>
                        {' '} */}
                        <ArrowForwardIcon onClick={CreateJobs}/>
                      {/* </Link> */}
                    </div>
                  </ListItem>

                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Add Config" />

                    <div className="icon-box">
                    <ArrowForwardIcon onClick={AddConfig}/>
                    </div>
                  </ListItem>

                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Add Source" />

                    <div className="icon-box">
                       <ArrowForwardIcon onClick={AddSource}/>
                    </div>
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12} sx={12} xl={6} xs={12}>
              <div class="panel-box">
                <Linkbord />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default Home;
