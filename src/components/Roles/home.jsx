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
import MatDialog from '../Common/MatDialog';
import DataTable from './DataTable.jsx';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Popover from '@mui/material/Popover';
import '../../style/style.css';

const Home = () => {
  //Role Modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //Permision Modal
  const [PermissionOpen, setPermissionOpen] = React.useState(false);

  const PermissionhandleClickOpen = () => {
    setPermissionOpen(true);
  };

  const PermissionhandleClose = () => {
    setPermissionOpen(false);
  };
  //tagged collection
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTaggedChange = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTaggedClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="content-box">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                  }}
                >
                  <Typography variant="h2">Settings: Roles</Typography>
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
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
                <DataTable PermissionOpen={PermissionhandleClickOpen} />
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleTaggedClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
      <MatDialog
        open={open}
        title="Role"
        handleClose={handleClose}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Role Name</InputLabel>
            <Input id="component-simple" />
          </FormControl>
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Description</InputLabel>
            <Input id="component-simple" />
          </FormControl>
        </Box>
      </MatDialog>
      <MatDialog
        open={PermissionOpen}
        title="Permission"
        handleClose={PermissionhandleClose}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 200 }}
            onKeyPress={handleTaggedChange}
          />
        </Box>
      </MatDialog>
    </>
  );
};

export default Home;