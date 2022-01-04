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
import MatDialog from '../Common/MatDialog';
import DataTable from './DataTable.jsx';
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
import Paper from '@mui/material/Paper';
import '../../style/style.css';
function PaperComponent(props) {
  return <Paper {...props} />;
}
const Home = () => {
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
                  <Typography variant="h2">Users</Typography>
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Create User
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
                <DataTable
                  PermissionOpen={PermissionhandleClickOpen}
                  ClickOpen={handleClickOpen}
                  viewOpen={viewHandleOpen}
                  dialogOpen={dialogHandleOpen}
                />
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
        title="User"
        handleClose={handleClose}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <Box
          component="form"
         
          noValidate
          autoComplete="off"
        >
          
         
        </Box>
        <Box
          component="form"
         
          noValidate
          autoComplete="off"
        >



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
          label="User Name"
          type="Text"
        />

        <TextField
          id="outlined-password-input"
          label="First Name"
          type="Text"
        />

        <TextField
          id="outlined-password-input"
          label="Last Name"
          type="Text"
        />

        <TextField
          id="outlined-password-input"
          label="Email"
          type="Text"
        />
        <TextField
          id="outlined-password-input"
          label="Department"
          type="Text"
        />
        
        <TextField
          id="outlined-password-input"
          label="User Role"
          type="Text"
        />
        


      </div>
    </Box>



         
        </Box>
      </MatDialog>
      <MatDialog
        open={viewOpen}
        title="Role"
        handleClose={viewHandleClose}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <Box component="form" noValidate autoComplete="off">
          <Typography className="text-row">
            <label>Role Name</label> Role1
          </Typography>

          <Typography className="text-row">
            <label>Role Description</label> Role1
          </Typography>
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
        <Typography className="text-row">
          <label>Role Name</label> <span>Power User | BD Team</span>
        </Typography>

        <Typography className="text-row">
          <label>Role Description</label>{' '}
          <span>Access to Everything (excl. Configuration, Manage</span>
        </Typography>

        <Typography className="text-row">
          <label>Permission</label>
        </Typography>

        <Box
          className="box-tag"
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
            onKeyDown={handleTaggedChange}
          />
          {tags.map((tag) => (
            <Item key={tag} className="box-btn tag">
              <IconButton>
                <CloseIcon />
              </IconButton>
              {tag}
            </Item>
          ))}
        </Box>
      </MatDialog>
      <Dialog
        open={dialogOpen}
        onClose={dialogHandleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want delete this records?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="box-btn left">
            close
          </Button>
          <Button onClick={handleClose} className="box-btn ">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;
