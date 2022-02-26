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
import Checkbox from '@mui/material/Checkbox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import axios from 'axios';
import '../../../style/style.css';
import { MuiDataGrid } from '../../../DataTable';
function PaperComponent(props) {
  return <Paper {...props} />;
}

const Home = () => {
  //Crud operation
  const [User, setUser] = React.useState({
    userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    roleId: 0,
    roleName: '',
    isActive: false,
    entryDate: '2022-01-07T00:00:00',
    updateDate: null,
  });
  const SaveUser = async (user) => {
    const res = await axios.post('https://localhost:7056/api/User', user);
    return res.data;
  };
  const UpdateUser = async (user) => {
    console.log('11');
    const res = await axios.put('https://localhost:7056/api/User', user);
    return res.data;
  };
  const GetUserData = () => {
    fetch('https://localhost:7056/api/User')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        result.map((res) => {
          res['id'] = res.userId;
        });
        setRows(result);
      });
  };
  const DeleteUser = async (user) => {
    const res = await axios.delete(
      `https://localhost:7056/api/User/${user.userId}`
    );
    return res.data;
  };
  const deleteHandler = (param) => {
    setRow(param);
  };

  const submitHandler = () => {
    if (Validation(UserName, FirstName, LastName, Email, RoleId)) {
      User.userName = UserName;
      User.firstName = FirstName;
      User.lastName = LastName;
      User.email = Email;
      User.roleId = RoleId;
      User.department = Department;
      console.log('insert', User);
      const response = SaveUser(User);
      response.then((save) => {
        GetUserData();
        window.alert('Insert Successfully done!!');
        clearData();
        // InsertAlert('Insert Successfully done!!');
        handleClose();
      });
    }
  };
  const EditHandler = (param) => {
    setRow(param);
    setselectRole(param.roleId);
    setUserName(param.userName);
    setFirstName(param.firstName);
    setLastName(param.lastName);
    setEmail(param.email);
    setDepartment(param.department);
    setIsActive(param.isActive);
    setRoleId(param.roleId);
    //setRole(param);
    setOpen(true);
  };
  const UpdateHandler = () => {
    alert(User.userId);
    console.log('update');
    if (Validation(UserName, FirstName, LastName, Email, RoleId)) {
      User.userName = UserName;
      User.firstName = FirstName;
      User.lastName = LastName;
      User.email = Email;
      User.roleId = RoleId;
      User.department = Department;
      User.userId = row.userId;
      User.isActive = IsActive;
      const response = UpdateUser(User);
      response.then((save) => {
        window.alert('Update Successfully done!!');
        GetUserData();
        clearData();
        handleClose();
      });
    }
  };
  const deleteHandleClose = () => {
    console.log('delete data:', row);
    DeleteUser(row).then((del) => {
      GetUserData();
      clearData();
      window.alert('Delete Successfully done!!');
      dialogHandleClose();
    });
  };

  const Validation = (UserName, FirstName, LastName, Email, RoleId) => {
    // debugger;;
    if (UserName == '') {
      setvalidationUserName(true);
      setValidateCount(++i);
      return false;
    } else if (FirstName == '') {
      setvalidationFirstName(true);
      setValidateCount(++i);
      return false;
    } else if (LastName == '') {
      setvalidationLastName(true);
      setValidateCount(++i);
      return false;
    } else if (Email == '') {
      setvalidationEmail(true);
      setValidateCount(++i);
      return false;
    } else if (RoleId == '' || RoleId == 0) {
      setvalidationRoleId(true);
      setValidateCount(++i);
      return false;
    } else {
      setValidateCount(0);
      return true;
    }
  };

  const clearData = () => {
    row.userId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    User.userId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    setvalidationUserName(false);
    setvalidationFirstName(false);
    setvalidationLastName(false);
    setvalidationEmail(false);
    setUserName('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setDepartment('');
    setselectRole(0);
    setIsActive(false);
    setEntryDate(new Date());
    setUpdateDate(new Date());
    setValidateCount(0);
  };

  //set column
  const [RoleId, setRoleId] = React.useState(0);
  const [UserName, setUserName] = React.useState('');
  const [FirstName, setFirstName] = React.useState('');
  const [LastName, setLastName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Department, setDepartment] = React.useState('');
  const [IsActive, setIsActive] = React.useState(false);
  const [EntryDate, setEntryDate] = React.useState(new Date());
  const [UpdateDate, setUpdateDate] = React.useState(new Date());
  //validation function
  const [validationUserName, setvalidationUserName] = React.useState(false);
  const [validationFirstName, setvalidationFirstName] = React.useState(false);
  const [validationLastName, setvalidationLastName] = React.useState(false);
  const [validationEmail, setvalidationEmail] = React.useState(false);
  const [validationRoleId, setvalidationRoleId] = React.useState(false);

  const [btnDisabled, setBtnDisabled] = React.useState(false);
  const [validateCount, setValidateCount] = React.useState(1);
  //assign Methode for onchanges
  var i = 0;
  const onUserNameChange = (val) => {
    if (val === '') {
      setvalidationUserName(true);
      setValidateCount(++i);
    } else {
      setvalidationUserName(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setUserName(val);
    //user.userName = val;
  };
  const onUserFirstName = (val) => {
    if (val === '') {
      setvalidationFirstName(true);
      setValidateCount(++i);
    } else {
      setvalidationFirstName(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setFirstName(val);
    //Role.roleName = val;
  };
  const onUserLastNameChange = (val) => {
    if (val === '') {
      setvalidationLastName(true);
      setValidateCount(++i);
    } else {
      setvalidationLastName(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setLastName(val);
    //Role.roleName = val;
  };
  const onEmailChange = (val) => {
    if (val === '') {
      setvalidationEmail(true);
      setValidateCount(++i);
    } else {
      setvalidationEmail(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setEmail(val);
    //Role.roleName = val;
  };
  const onDepartmentChange = (val) => {
    setDepartment(val);
    //Role.roleName = val;
  };
  const onRoleIdChange = (val) => {
    // debugger;;
    if (val === '' || val === 0) {
      setvalidationRoleId(true);
      setValidateCount(++i);
    } else {
      setvalidationRoleId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setselectRole(val);
    setRoleId(val);
  };
  const onIsActiveChange = (val) => {
    setIsActive(val);
  };
  const onEntryDateChange = (val) => {
    setEntryDate(val);
  };
  const onUpdateDateChange = (val) => {
    setUpdateDate(val);
  };

  const columns = [
    { field: 'userName', headerName: 'User Name', width: 180, editable: true },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 180,
      editable: true,
    },
    { field: 'lastName', headerName: 'Last Name', width: 180, editable: true },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 180,
      editable: true,
    },
    {
      field: 'roleName',
      headerName: 'User User',
      width: 180,
      editable: true,
    },
    {
      field: 'isActive',
      headerName: 'Active',
      width: 180,
      renderCell: (params) => (
        <>
          {params.row.isActive === true ? (
            <Checkbox
              checked
              onChange={(e) => {
                // debugger;;
                rows.filter((r) => r.id === params.row.id)[0].isActive =
                  e.target.checked;
                //filterval[0].isActive = e.target.checked || true;
                setRows([...rows]);

                // setRows(filterval[0]);
              }}
            />
          ) : (
            <Checkbox
              onChange={(e) => {
                // debugger;;
                rows.filter((r) => r.id === params.row.id)[0].isActive =
                  e.target.checked;
                //filterval[0].isActive = e.target.checked || true;
                setRows([...rows]);
                //setRows(filterval);
              }}
            />
          )}
        </>
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
  const rollData = async () => {
    const res = await axios.get('https://localhost:7056/api/Role');
    return res.data;
  };
  const [rows, setRows] = React.useState([]);
  // const [userName, setUserName] = React.useState('');

  const [SelectOptions, setSelectOptions] = React.useState([]);
  const [selectRole, setselectRole] = React.useState(0);
  const [row, setRow] = React.useState({
    userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  });

  React.useEffect(() => {
    GetUserData();
    //call roll data
    GetRoll();
  }, [0]);

  const GetRoll = () => {
    rollData().then((result) => {
      //console.log('data', result);
      // const options = result.map((d) => ({
      //   value: d.roleId,
      //   label: d.roleName,
      // }));
      // result.map((d) => {
      //   SelectOptions.push(d);
      // });
      const Options = [{ roleId: 0, roleName: 'Select User' }, ...result];
      //console.log('options value', Options);
      setSelectOptions(Options);
    });
  };
  console.log('select Option value', SelectOptions);
  //User Modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    row.id = 0;
    setOpen(true);
  };
  const handleClose = () => {
    clearData();
    setOpen(false);
  };
  //Dialog Modal
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const dialogHandleClose = () => {
    setdialogOpen(false);
  };
  const dialogHandleOpen = (param) => {
    deleteHandler(param);
    setdialogOpen(true);
  };
  //View User Modal
  const [viewOpen, setviewOpen] = React.useState(false);

  const viewHandleOpen = (param) => {
    setRow(param.row);
    setviewOpen(true);
  };

  const viewHandleClose = () => {
    setviewOpen(false);
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
                {/* <MuiDataGrid /> */}
              </Grid>

              {/* <Grid item xs={9}>
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
              </Grid> */}
            </Grid>
          </Grid>
        </div>
      </Box>

      <MatDialog
        open={open}
        title="User"
        handleClose={handleClose}
        isSubmitDisable={btnDisabled}
        onHandleClick={
          row.userId === '3fa85f64-5717-4562-b3fc-2c963f66afa6'
            ? submitHandler
            : UpdateHandler
        }
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
              {validationUserName ? (
                <TextField
                  error
                  id="outlined-error"
                  label="User Name"
                  type="Text"
                  value={UserName}
                  onInput={(e) => onUserNameChange(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-password-input"
                  label="User Name"
                  type="Text"
                  value={UserName}
                  onInput={(e) => onUserNameChange(e.target.value)}
                />
              )}
              {validationFirstName ? (
                <TextField
                  error
                  id="outlined-error"
                  label="First Name"
                  type="Text"
                  value={FirstName}
                  onInput={(e) => onUserFirstName(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-password-input"
                  label="First Name"
                  type="Text"
                  value={FirstName}
                  onInput={(e) => onUserFirstName(e.target.value)}
                />
              )}
              {validationLastName ? (
                <TextField
                  error
                  id="outlined-error"
                  label="Last Name"
                  type="Text"
                  value={LastName}
                  onInput={(e) => onUserLastNameChange(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-password-input"
                  label="Last Name"
                  type="Text"
                  value={LastName}
                  onInput={(e) => onUserLastNameChange(e.target.value)}
                />
              )}
              {validationEmail ? (
                <TextField
                  error
                  id="outlined-error"
                  label="Email"
                  type="Text"
                  value={Email}
                  onInput={(e) => onEmailChange(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="Text"
                  value={Email}
                  onInput={(e) => onEmailChange(e.target.value)}
                />
              )}

              <TextField
                id="outlined-password-input"
                label="Department"
                type="Text"
                value={Department}
                onInput={(e) => onDepartmentChange(e.target.value)}
              />

              <FormControl fullWidth>
                {/* <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: 'User',
                    id: 'uncontrolled-native',
                  }}
                  onChange={(e) => onRoleIdChange(e.target.value)}
                > */}

                {validationRoleId ? (
                  <Select
                    error
                    value={selectRole}
                    onChange={(e) => onRoleIdChange(e.target.value)}
                  >
                    {SelectOptions.map((rol) => {
                      return (
                        <MenuItem value={rol.roleId}>{rol.roleName}</MenuItem>
                      );
                    })}
                  </Select>
                ) : (
                  <Select
                    value={selectRole}
                    onChange={(e) => onRoleIdChange(e.target.value)}
                  >
                    {SelectOptions.map((rol) => {
                      return (
                        <MenuItem value={rol.roleId}>{rol.roleName}</MenuItem>
                      );
                    })}
                  </Select>
                )}
                {/* {SelectOptions.map((rol) => {
                  return <option value={rol.roleId}>{rol.roleName}</option>;
                })} */}
                {/* </NativeSelect> */}
              </FormControl>

              {/* <TextField
                id="outlined-password-input"
                label="User User"
                type="Text"
              /> */}
            </div>
          </Box>
        </Box>
      </MatDialog>
      <MatDialog
        open={viewOpen}
        title="User"
        handleClose={viewHandleClose}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <Box component="form" noValidate autoComplete="off">
          <Typography className="text-row">
            <label>User Name</label>
            {row && row.userName}
          </Typography>

          <Typography className="text-row">
            <label>First Name</label> {row && row.firstName}
          </Typography>
          <Typography className="text-row">
            <label>Last Name</label> {row && row.lastName}
          </Typography>
          <Typography className="text-row">
            <label>Email</label> {row && row.email}
          </Typography>
          <Typography className="text-row">
            <label>Department</label> {row && row.department}
          </Typography>
          <Typography className="text-row">
            <label>Role Name</label> {row && row.roleName}
          </Typography>
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
            className="box-btn left"
          >
            close
          </Button>
          <Button onClick={deleteHandleClose} className="box-btn ">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;
