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
const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
  { id: 4, col1: 'Hello', col2: 'World' },
  { id: 5, col1: 'XGrid', col2: 'is Awesome' },
  { id: 6, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns = [
  { field: 'id', hide: true },
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];
const home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              marginTop: '6em',
              marginLeft: 3,
              display: 'flex',
            }}
          >
            <Typography variant="h4">Applications</Typography>
            <Button variant="contained" sx={{ marginLeft: 3 }} size="small">
              <AddIcon /> Create
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <IconButton>
            <PrintIcon />
          </IconButton>
        </Grid>

        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Item>
            <TextField
              style={{ backgroundColor: 'white' }}
              id="filled-basic"
              label="Filled"
              variant="filled"
            />
            <SearchIcon style={{ textAlign: 'right' }} />
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Typography sx={{ textAlign: 'left' }} variant="h6">
              {' '}
              showing 1 to 5
            </Typography>{' '}
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {' '}
            <Stack>
              <Pagination count={10} shape="rounded" />
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default home;
