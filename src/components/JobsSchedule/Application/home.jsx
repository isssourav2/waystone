import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Item, muiBox, paperItem } from './styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import MatDialog from '../../Common/MatDialog';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Popover from '@mui/material/Popover';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Autocomplete from '@mui/material/Autocomplete';

import { MuiDataGrid } from '../../../DataTable';
import Paper from '@mui/material/Paper';
import '../../../style/style.css';
function PaperComponent(props) {
  return <Paper {...props} />;
}
const Home = () => {
  const columns = [
    {
      field: 'userName',
      headerName: 'Application Name',
      width: 600,
      editable: true,
    },

    {
      field: 'lastName',
      headerName: 'Application Description',
      width: 300,
      editable: true,
    },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 1,
      disableClickEventBubbling: true,
      getActions: (params) => [
        <IconButton
          className="link-tool"
          onClick={() => console.log(params.row)}
        >
          <RemoveRedEyeIcon />
        </IconButton>,
        <IconButton
          className="link-tool"
          onClick={() => console.log(params.row)}
        >
          <EditIcon />
        </IconButton>,
        <IconButton
          className="link-tool"
          onClick={() => console.log(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>,
      ],
    },
  ];

  const rows = [
    {
      id: 1,
      userName: 'Insight',
      lastName: '',
      active: true,
    },
    {
      id: 2,
      userName: 'Internal',
      lastName: '',
      active: true,
    },
    {
      id: 3,
      userName: 'OpsCore',
      lastName: '',
      active: true,
    },
    {
      id: 4,
      userName: 'Rabbit',
      lastName: '',
      active: true,
    },
    {
      id: 5,
      userName: 'RiskCore',
      lastName: '',
      active: true,
    },
  ];
  const doctype = [
    { label: 'Select' },
    { label: 'Import' },
    { label: 'Export' },
  ];

  const protocoltype = [
    { label: 'SMB Share' },
    { label: 'SFTP' },
    { label: 'Email' },
    { label: 'FTP' },
  ];

  //Role Modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //Dialog Modal
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const dialogHandleClose = () => {
    setdialogOpen(false);
  };
  const dialogHandleOpen = () => {
    setdialogOpen(true);
  };
  //View Role Modal
  const [viewOpen, setviewOpen] = React.useState(false);

  const viewHandleOpen = () => {
    setviewOpen(true);
  };

  const viewHandleClose = () => {
    setviewOpen(false);
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
  const [value, setValue] = React.useState('');

  const tagged = [];
  const [tags, setTags] = React.useState([]);

  const handleTagChange = (tag) => {
    console.log(tag);
    setTags((oldtag) => [...oldtag, tag]);
    setAnchorEl(null);
  };
  console.log(tags);
  tagged.push('Dashboard');
  tagged.push('Role Creation');
  tagged.push('User Creation');
  tagged.push('Connection');
  tagged.push('Notification');
  tagged.push('Setup');
  tagged.push('Source');
  tagged.push('Application');
  tagged.push('Insight');
  tagged.push('Job Creation');
  tagged.push('Tags');
  tagged.push('Fields');

  const handleTaggedChange = (event) => {
    if (event.key == 'Enter') {
      setValue(event.nativeEvent.target.value);
      setAnchorEl(event.currentTarget);
    }
  };
  const taggedOpen = Boolean(anchorEl);
  const handleTaggedClose = () => {
    setAnchorEl(null);
  };
  const id = open ? 'simple-popover' : undefined;
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
                  <Typography variant="h2">Application</Typography>
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Create
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={6}>
                
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
                {/* <DataTable
                  PermissionOpen={PermissionhandleClickOpen}
                  ClickOpen={handleClickOpen}
                  viewOpen={viewHandleOpen}
                  dialogOpen={dialogHandleOpen}
                /> */}
                {<MuiDataGrid rows={rows} columns={columns} />}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
      <Popover
        id={id}
        open={taggedOpen}
        anchorEl={anchorEl}
        onClose={handleTaggedClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'grid',
            gridTemplateColumns: { md: '1fr' },
            gridTemplateRows: { md: '1fr' },
            cursor: 'pointer',
            gap: 2,
          }}
        >
          {tagged.map((tag) => (
            <paperItem
              key={tag}
              elevation={tag}
              onClick={() => handleTagChange(tag)}
            >
              {tag}
            </paperItem>
          ))}
        </Box>
      </Popover>
      <MatDialog
        open={open}
        title="Application"
        handleClose={handleClose}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <Box component="form" noValidate autoComplete="off"></Box>
        <Box component="form" noValidate autoComplete="off">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-password-input"
                label="Application Name"
                type="Text"
              />

              <TextField
                id="outlined-password-input"
                label="Application Description"
                type="Text"
              />
            </div>
          </Box>
        </Box>
      </MatDialog>
    </>
  );
};

export default Home;
