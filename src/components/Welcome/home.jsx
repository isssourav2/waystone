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

import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from '@mui/material/Link';

import Linkbord from '../linkbord.jsx';

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
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />

                    <div className="icon-box">
                      <Link href="#">
                        <SimCardDownloadIcon />
                      </Link>
                    </div>
                  </ListItem>

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
                    <div className="icon-box">
                      <Link href="#">
                        <SimCardDownloadIcon />
                      </Link>
                    </div>
                  </ListItem>

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
                          {
                            ' — Do you have Paris recommendations? Have you ever…'
                          }
                        </React.Fragment>
                      }
                    />
                    <div className="icon-box">
                      <Link href="#">
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
                    <ListItemText primary="View Dashborad " />

                    <div className="icon-box">
                      <Link href="#">
                        {' '}
                        <ArrowForwardIcon />
                      </Link>
                    </div>
                  </ListItem>

                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Create Data Pipeline" />

                    <div className="icon-box">
                      <Link href="#">
                        {' '}
                        <ArrowForwardIcon />
                      </Link>
                    </div>
                  </ListItem>

                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Add Source" />

                    <div className="icon-box">
                      <Link href="#">
                        {' '}
                        <ArrowForwardIcon />
                      </Link>
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

export default home;
