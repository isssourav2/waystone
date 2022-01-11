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
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MuiDataGrid } from '../../../DataTable';

import axios from 'axios';
import '../../../style/style.css';

function PaperComponent(props) {
  return <Paper {...props} />;
}

const Home = () => {
  //Crud operation
  const submitHandler = () => {
    Role.roleName = roleName;
    Role.roleDescription = roleDescription;
    console.log('insert data:', Role);
    const response = SaveRoll(Role);
    response.then((save) => {
      console.log('reponse:', save);
      GetRollData();
      window.alert('Insert Successfully done!!');
      clearData();
      // InsertAlert();
      handleClose();
    });
  };
  //Alert
  // function Alerts({ alert, color, message }) {
  //   return (
  //     <Alert severity={alert} color={color}>
  //       {message}
  //     </Alert>
  //   );
  // }

  // const InsertAlert = () => {
  //   Alert('success', 'blue', 'Insert Successfully done!');
  // };
  // const UpdateAlert = () => {
  //   Alert('info', 'green', 'Update Successfully done!');
  // };
  // const DeleteAlert = () => {
  //   Alert('error', 'blue', 'Delete Successfully done!');
  // };

  //Alert
  const GetRollData = () => {
    fetch('https://localhost:7056/api/Role')
      .then((res) => res.json())
      .then((result) => {
        console.log('Roles:', result);
        result.map((res) => {
          res['id'] = res.roleId;
        });
        setRows(result);
      });
  };
  React.useEffect(() => {
    GetRollData();
  }, [0]);

  const UpdateHandler = () => {
    Role.roleName = roleName;
    Role.roleDescription = roleDescription;
    Role.roleId = row.roleId;
    console.log('Update data:', Role);
    const response = UpdateRoll(Role);
    response.then((save) => {
      console.log('reponse:', save);
      window.alert('Update Successfully done!!');
      GetRollData();
      clearData();
      handleClose();
    });
  };
  const viewHandleOpen = (param) => {
    setRow(param.row);
    setviewOpen(true);
  };

  const EditHandler = (param) => {
    setRow(param);
    setRoleName(param.roleName);
    setRoleDescription(param.roleDescription);
    //setRole(param);
    setOpen(true);
  };
  //rows Model
  //const rows = React.useRef();
  const SaveRoll = async (role) => {
    const res = await axios.post('https://localhost:7056/api/Role', role);
    return res.data;
  };
  const UpdateRoll = async (role) => {
    const res = await axios.put('https://localhost:7056/api/Role', role);
    return res.data;
  };
  const DeleteRoll = async (role) => {
    console.log('delete function hitt');
    const res = await axios.delete(
      `https://localhost:7056/api/Role/${role.roleId}`
    );
    return res.data;
  };
  const deleteHandler = (param) => {
    setRow(param);
  };

  const clearData = () => {
    setRoleName('');
    setRoleDescription('');
  };
  //Crud operation
  const onRoleNameChange = (val) => {
    setRoleName(val);
    //Role.roleName = val;
  };
  const onRoleDescriptionChange = (val) => {
    //Role.roleDescription = val;
    setRoleDescription(val);
  };
  const [rows, setRows] = React.useState([]);
  //set particular row for edit and delete and view
  const [row, setRow] = React.useState({ roleId: 0 });
  const [Role, setRole] = React.useState({
    roleId: 0,
    roleName: '',
    roleDescription: '',
    isActive: false,
    entryDate: '2022-01-07T00:00:00',
    updateDate: null,
    userCount: 0,
  });
  const [roleName, setRoleName] = React.useState('');
  const [roleDescription, setRoleDescription] = React.useState('');

  const getRoleName = (params) => {
    console.log('Role Name', params);
    // return `${params..roleName}`
  };

  //render data
  const columns = [
    {
      field: 'roleName',
      headerName: 'Role Name',
      width: 180,
      editable: true,
    },
    {
      field: 'roleDescription',
      headerName: 'Role Description',
      width: 180,
      editable: true,
    },
    {
      field: 'isActive',
      headerName: 'Active',
      hide: true,
      width: 180,
      editable: true,
    },
    {
      field: 'entryDate',
      headerName: 'Entry Date',
      hide: true,
      width: 180,
      editable: true,
    },
    {
      field: 'userCount',
      headerName: 'Users',
      width: 180,
    },
    {
      field: 'updateDate',
      headerName: 'Update Date',
      hide: true,
      width: 180,
      hide: true,
      editable: true,
    },

    {
      field: 'Permission',
      headerName: 'Permission',
      width: 180,
      renderCell: (params) => (
        <strong>
          <span onClick={PermissionhandleClickOpen} className="count">
            4
          </span>
        </strong>
      ),
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
          onClick={() => viewHandleOpen(params)}
        >
          <RemoveRedEyeIcon />
        </IconButton>,
        <IconButton
          className="link-tool"
          onClick={() => EditHandler(params.row)}
        >
          <EditIcon />
        </IconButton>,
        <IconButton
          className="link-tool"
          onClick={() => dialogHandleOpen(params.row)}
        >
          <DeleteIcon />
        </IconButton>,
      ],
    },
  ];

  // const [Role, setRole] = React.useState({
  //   roleName: '',
  //   roleDescription: '',
  //   isActive: false,
  //   entryDate: '2022-01-07',
  // });

  // console.log(Role);
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
  const deleteHandleClose = () => {
    DeleteRoll(row).then((save) => {
      console.log('reponse:', save);
      GetRollData();
      clearData();
      window.alert('Delete Successfully done!!');
      dialogHandleClose();
    });
  };
  const dialogHandleOpen = (param) => {
    deleteHandler(param);
    setdialogOpen(true);
  };

  //View Role Modal
  const [viewOpen, setviewOpen] = React.useState(false);

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
    setTags((oldtag) => [...oldtag, tag]);
    setAnchorEl(null);
  };

  console.log(Role);
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
                  <Typography variant="h2"> Roles</Typography>
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Create Role
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={6}>
                {/* <IconButton className="print-box">
                  <PrintIcon />
                </IconButton> */}
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
                {<MuiDataGrid rows={rows} columns={columns} />}
                {/* <DataTable
                  PermissionOpen={PermissionhandleClickOpen}
                  ClickOpen={handleClickOpen}
                  viewOpen={viewHandleOpen}
                  dialogOpen={dialogHandleOpen}
                /> */}
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
        title="Role"
        handleClose={handleClose}
        onHandleClick={row.roleId === 0 ? submitHandler : UpdateHandler}
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
            <Input
              id="component-simple"
              name="roleName"
              value={roleName}
              onInput={(e) => onRoleNameChange(e.target.value)}
            />
            {/* <input
              type="text"
              value={row.roleName}
              onChange={(e) => onRoleNameChange(e.target.value)}
            /> */}
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
            <Input
              id="component-simple"
              name="roleDescription"
              value={roleDescription}
              onInput={(e) => onRoleDescriptionChange(e.target.value)}
            />
          </FormControl>
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
            <label>Role Name</label> {row && row.roleName}
          </Typography>

          <Typography className="text-row">
            <label>Role Description</label> {row && row.roleDescription}
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
          <Button
            autoFocus
            onClick={dialogHandleClose}
            className="box-btn-cancel"
          >
            close
          </Button>
          <Button onClick={deleteHandleClose} className="btn">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;
