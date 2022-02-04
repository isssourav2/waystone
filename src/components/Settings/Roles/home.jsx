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
import Autocomplete from '@mui/material/Autocomplete';
import { FixedTags } from '../../';
import axios from 'axios';
import '../../../style/style.css';

function PaperComponent(props) {
  return <Paper {...props} />;
}

const Home = () => {
  //Crud operation
  const submitHandler = () => {
    if (Validation(roleName, roleDescription)) {
      Role.roleName = roleName;
      Role.roleDescription = roleDescription;

      const response = SaveRoll(Role);
      response.then((save) => {
        GetRollData();
        window.alert('Insert Successfully done!!');
        clearData();
        // InsertAlert('Insert Successfully done!!');
        handleClose();
      });
    }
  };
  const Validation = (roleName, roleDescription) => {
    if (roleName == '') {
      setvalidationRoleNameId(true);
      setValidateCount(++i);
      return false;
    } else if (roleDescription == '') {
      setValidationDescriptionId(true);
      setValidateCount(++i);
      return false;
    } else {
      return true;
    }
  };
  //Alert
  // function Alerts({ alert, color, message }) {
  //   return (
  //     <Alert severity={alert} color={color}>
  //       {message}
  //     </Alert>
  //   );
  // }

  const InsertAlert = (successMessage) => {
    return <Alert severity="success">{successMessage}</Alert>;
  };
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
        result.map((res) => {
          res['id'] = res.roleId;
        });
        setRows(result);
      });
  };
  const GetMenuForTag = () => {
    fetch('https://localhost:7056/api/Menu')
      .then((res) => res.json())
      .then((result) => {
        result.map((res) => {
          res['name'] = res.roleName;
        });
        setTagged(result);
      });
  };
  const [validateCount, setValidateCount] = React.useState(1);
  React.useEffect(() => {
    GetRollData();
    GetMenuForTag();
  }, [0]);

  const UpdateHandler = () => {
    if (Validation(roleName, roleDescription)) {
      Role.roleName = roleName;
      Role.roleDescription = roleDescription;
      Role.roleId = row.roleId;

      const response = UpdateRoll(Role);
      response.then((save) => {
        window.alert('Update Successfully done!!');
        GetRollData();
        clearData();
        handleClose();
      });
    }
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
    const res = await axios.delete(
      `https://localhost:7056/api/Role/${role.roleId}`
    );
    return res.data;
  };
  const deleteHandler = (param) => {
    setRow(param);
  };

  const clearData = () => {
    row.roleId = 0;
    Role.roleId = 0;
    setValidationDescriptionId(false);
    setvalidationRoleNameId(false);
    setRoleName('');
    setValidateCount(0);
    setRoleDescription('');
  };

  var i = 0;
  const onRoleNameChange = (val) => {
    if (val === '') {
      setvalidationRoleNameId(true);
      setValidateCount(++i);
    } else {
      setvalidationRoleNameId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setRoleName(val);
    //Role.roleName = val;
  };
  const onRoleDescriptionChange = (val) => {
    //Role.roleDescription = val;
    if (val === '') {
      setValidationDescriptionId(true);
      setValidateCount(++i);
      // setBtnDisabled(true);
    } else {
      setValidationDescriptionId(false);
      setValidateCount(0);
      // setBtnDisabled(false);
    }
    setRoleDescription(val);
  };

  const [rows, setRows] = React.useState([]);
  //Crud operation
  const [Tagged, setTagged] = React.useState([]);
  console.log('Tag Records:', Tagged);
  // const [menuMasterTag, setMenuMasterTag] = React.useState([]);
  //Post MenuMasterTag
  const PermissionSaveRole = async (MenuMasterPermission) => {
    const res = await axios.post(
      'https://localhost:7056/api/MenuwithRole',
      MenuMasterPermission
    );
    return res.data;
  };
  const menuMasterPosting = () => {
    const menuMasterTag = [];
    tagValue.map((tag, i) => {
      const menuTag = {};
      // menuTag.menuMaster = tag;
      // menuTag.role = perRow;
      menuTag.roleId = perRow.roleId;
      menuTag.menuId = tag.menuId;
      menuMasterTag.push(menuTag);
    });

    const Response = PermissionSaveRole(menuMasterTag);
    Response.then((save) => {
      alert('permission Saved Successfully!!');
      GetRollData();
      setPermissionOpen(false);
    });
    // console.log('Tag Object:', menuMasterTag);
    //console.log('Role Object:', perRow);
  };
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
      field: 'permissionCount',
      headerName: 'Permission',
      width: 180,
      renderCell: (params) => (
        <strong>
          <span
            onClick={() => PermissionhandleClickOpen(params)}
            className="count"
          >
            {params.row.permissionCount}
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

  //Role Modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    clearData();
    setOpen(false);
  };

  //Dialog Modal
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const dialogHandleClose = () => {
    clearData();
    setdialogOpen(false);
  };
  const deleteHandleClose = () => {
    DeleteRoll(row).then((save) => {
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
    clearData();
    setviewOpen(false);
  };
  //Permision Modal
  const [PermissionOpen, setPermissionOpen] = React.useState(false);
  const [perRow, setPerRow] = React.useState({});
  const PermissionhandleClickOpen = (param) => {
    console.log(param);
    setPerRow(param.row);
    setRow(param.row);
    setPermissionOpen(true);
  };

  const PermissionhandleClose = () => {
    clearData();
    setPermissionOpen(false);
  };
  //tagged collection
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const [value, setValue] = React.useState('');

  const tagged = [];
  const [tags, setTags] = React.useState([]);

  const handleTagChange = (tag) => {
    setTags((oldtag) => [...oldtag, tag]);
    setAnchorEl(null);
  };

  // tagged.push({ Id: 1, Name: 'Dashboard' });
  // tagged.push({ Id: 2, Name: 'Role Creation' });
  // tagged.push({ Id: 3, Name: 'User Creation' });
  // tagged.push({ Id: 4, Name: 'Connection' });
  // tagged.push({ Id: 5, Name: 'Notification' });
  // tagged.push({ Id: 6, Name: 'Setup' });
  // tagged.push({ Id: 7, Name: 'Source' });
  // tagged.push({ Id: 8, Name: 'Application' });
  // tagged.push({ Id: 9, Name: 'Insight' });
  // tagged.push({ Id: 10, Name: 'Job Creation' });
  // tagged.push({ Id: 11, Name: 'Tags' });
  // tagged.push({ Id: 12, Name: 'Fields' });
  const fixedOptions = [Tagged[0]];
  const [tagValue, setTagValue] = React.useState([...fixedOptions, Tagged[5]]);
  const handleTaggedChange = (event, newValue) => {
    debugger;
    if (newValue[0].name === 'All') {
      setTagValue([
        // ...fixedOptions,
      ]);
    } else {
      setTagValue([
        // ...fixedOptions,
        ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
      ]);
    }
  };

  const taggedOpen = Boolean(anchorEl);
  const handleTaggedClose = () => {
    setAnchorEl(null);
  };
  const id = open ? 'simple-popover' : undefined;
  //let validationDescriptionId = false;
  const [validationDescriptionId, setValidationDescriptionId] =
    React.useState(false);
  const [validationRoleNameId, setvalidationRoleNameId] = React.useState(false);
  const [btnDisabled, setBtnDisabled] = React.useState(false);

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
                    placeholder="Search"
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
        isSubmitDisable={btnDisabled}
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
          {validationRoleNameId ? (
            <TextField
              error
              id="outlined-error"
              label="Role Name"
              type="Text"
              value={roleName}
              onInput={(e) => onRoleNameChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Role Name"
              type="Text"
              value={roleName}
              onInput={(e) => onRoleNameChange(e.target.value)}
            />
          )}
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          {validationDescriptionId ? (
            <TextField
              error
              id="outlined-error"
              label="Role Description"
              type="Text"
              value={roleDescription}
              onInput={(e) => onRoleDescriptionChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Role Description"
              type="Text"
              value={roleDescription}
              onInput={(e) => onRoleDescriptionChange(e.target.value)}
            />
          )}
        </Box>
      </MatDialog>
      <MatDialog open={viewOpen} title="Role" handleClose={viewHandleClose}>
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
        onHandleClick={menuMasterPosting}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <Typography className="text-row">
          <label>Role Name</label> <span>{row && row.roleName}</span>
        </Typography>

        <Typography className="text-row">
          <label>Role Description</label>{' '}
          <span>{row && row.roleDescription}</span>
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
          <FixedTags tags={Tagged} onTagChangeHandler={handleTaggedChange} />
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
