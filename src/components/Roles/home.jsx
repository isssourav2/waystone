import React from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Item, muiBox } from './styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

import DataTable from '../../components/DataTable.jsx';

import '../../style/style.css';



const home = () => {
  return (
    <>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div class="content-box">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              
              display: 'flex',
            }}
          >
            <Typography variant="h2">Settings: Roles</Typography>
            <Button className="box-btn" variant="contained" sx={{ marginLeft: 3 }} size="small">
              <AddIcon /> Create Roles
            </Button>
          </Box>
      
         
        </Grid>

        <Grid item xs={6}>

         <IconButton className="print-box">
            <PrintIcon />
          </IconButton>

        </Grid>

        </Grid>

      </Box>

      <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={10}></Grid>
        <Grid item xs={2}>
          <div className="search-box">
            <TextField
              style={{ backgroundColor: 'white', height: '1em' }}
              id="filled-basic"
              placeholder="Filled"
              variant="filled"
            />
            <SearchIcon style={{ textAlign: 'right' }} />
          </div>
        </Grid>

        </Grid>

        </Box>

        <Grid item xs={12}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <DataTable/>
        </Grid> 
        
        

        <Grid item xs={9}>
          <Grid className="pagination-count">
            <Typography sx={{ textAlign: 'left' }} variant="h6">
              {' '}
              showing 1 to 5
            </Typography>{' '}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid className="pagination-box">
            {' '}
            <Stack>
              <Pagination count={10} shape="rounded" />
            </Stack>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
     </div>
      </Box>
    </>
  );
};

export default home;
