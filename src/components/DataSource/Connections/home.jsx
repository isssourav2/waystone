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
import axios from 'axios';
import '../../../style/style.css';
import { MuiDataGrid } from '../../../DataTable';
import Autocomplete from '@mui/material/Autocomplete';
import ConnectionTab from './ConnectionTab/ConnectionTab';
function PaperComponent(props) {
  return <Paper {...props} />;
}

const Home = () => {
  //Crud operation
  const [Connection, SetConnection] = React.useState({
    createdBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    updatedBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    createdDate: '2022-02-01T06:13:53.218Z',
    updatedDate: '2022-02-01T06:13:53.218Z',
    id: 0,
    name: '',
    source: '',
    protocol: '',
    host: '',
    port: 0,
    ConnectionName: '',
    password: '',
  });
  //set column
  const [Name, setName] = React.useState('');
  const [Source, setSource] = React.useState('');
  const [Protocol, setProtocol] = React.useState('');
  const [Host, setHost] = React.useState('');
  const [Port, setPort] = React.useState(0);
  const [UserName, setUserName] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [SahFingerPrint, setSahFingerPrint] = React.useState('');
  //validation function
  const [validationName, setvalidationName] = React.useState(false);
  const [validationProtocol, setvalidationProtocol] = React.useState(false);
  const [validationPort, setvalidationPort] = React.useState(false);
  const [validationPassword, setvalidationPassword] = React.useState(false);
  const [validateCount, setValidateCount] = React.useState(1);
  var i = 0;

  const onNameChange = (val) => {
    if (val === '') {
      setvalidationName(true);
      setValidateCount(++i);
    } else {
      setvalidationName(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setName(val);
    //user.userName = val;
  };
  const onSourceChange = (val) => {
    setSource(val);
  };
  const onProtocolChange = (val) => {
    if (val === '') {
      setvalidationProtocol(true);
      setValidateCount(++i);
    } else {
      setvalidationProtocol(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setProtocol(val);
    //user.userName = val;
  };
  const onHostChange = (val) => {
    setHost(val);
  };
  const onPortChange = (val) => {
    if (val === '') {
      setvalidationPort(true);
      setValidateCount(++i);
    } else {
      setvalidationPort(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setPort(val);
    //user.userName = val;
  };
  const onUserNameChange = (val) => {
    setUserName(val);
  };
  const onPasswordChange = (val) => {
    if (val === '') {
      setvalidationPassword(true);
      setValidateCount(++i);
    } else {
      setvalidationPassword(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setPassword(val);
    //user.userName = val;
  };
  const onSahFingerPrintChange = (val) => {
    setSahFingerPrint(val);
  };

  const SaveConnection = async (connection) => {
    const res = await axios.post(
      'https://localhost:7056/api/Connection',
      connection
    );
    return res.data;
  };
  const UpdateConnection = async (connection) => {
    console.log('11');
    const res = await axios.put(
      'https://localhost:7056/api/Connection',
      connection
    );
    return res.data;
  };

  const submitHandler = () => {
    if (Validation(Name, Protocol, Port, Password)) {
      Connection.name = Name;
      Connection.source = Source;
      Connection.protocol = Protocol;
      Connection.host = Host;
      Connection.port = Port;
      Connection.userName = UserName;
      Connection.password = Password;
      Connection.sahFingerPrint = SahFingerPrint;

      console.log('insert', Connection);
      const response = SaveConnection(Connection);
      response.then(() => {
        GetConnectionData();
        window.alert('Insert Successfully done!!');
        clearData();
        // InsertAlert('Insert Successfully done!!');
        handleClose();
      });
    }
  };

  const UpdateHandler = () => {
    debugger;
    if (Validation(Name, Protocol, Port, Password)) {
      Connection.id = row.id;
      Connection.name = Name;
      Connection.source = Source;
      Connection.protocol = Protocol;
      Connection.host = Host;
      Connection.port = Port;
      Connection.userName = UserName;
      Connection.password = Password;
      Connection.sahFingerPrint = SahFingerPrint;
      const response = UpdateConnection(Connection);
      response.then(() => {
        window.alert('Update Successfully done!!');
        GetConnectionData();
        clearData();
        handleClose();
      });
    }
  };

  const Validation = (Name, Protocol, Port, Password) => {
    if (Name == '') {
      setvalidationName(true);
      setValidateCount(++i);
      return false;
    } else if (Protocol == '') {
      setvalidationProtocol(true);
      setValidateCount(++i);
      return false;
    } else if (Port == '') {
      setvalidationPort(true);
      setValidateCount(++i);
      return false;
    } else if (Password == '') {
      setvalidationPassword(true);
      setValidateCount(++i);
      return false;
    } else {
      setValidateCount(0);
      return true;
    }
  };
  //Grid Rows
  const [rows, setRows] = React.useState([]);
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
  //grid column
  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    {
      field: 'protocol',
      headerName: 'Protocol',
      width: 180,
      editable: true,
    },
    { field: 'host', headerName: 'Host', width: 180, editable: true },
    {
      field: 'port',
      headerName: 'Port',
      width: 180,
      editable: true,
    },
    { field: 'userName', headerName: 'UserName', width: 180, editable: true },
    { field: 'password', headerName: 'Password', width: 180, editable: true },
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
  const GetConnectionData = () => {
    fetch('https://localhost:7056/api/Connection')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setRows(result);
      });
  };
  //useEffect
  React.useEffect(() => {
    GetConnectionData();
  }, [0]);

  //Edit functionality
  const EditHandler = (param) => {
    setRow(param);
    setName(param.name);
    setSource(param.source);
    setProtocol(param.protocol);
    setHost(param.host);
    setPort(param.port);
    setUserName(param.userName);
    setPassword(param.password);
    setSahFingerPrint(param.sahFingerPrint);
    //setRole(param);
    setOpen(true);
  };
  const DeleteConnection = async (connection) => {
    const res = await axios.delete(
      `https://localhost:7056/api/Connection/${connection.id}`
    );
    return res.data;
  };
  const clearData = () => {
    row.id = 0;
    Connection.id = 0;
    setvalidationName(false);
    setvalidationProtocol(false);
    setvalidationPort(false);
    setvalidationPassword(false);
    setName('');
    setSource('');
    setProtocol('');
    setHost('');
    setPort(0);
    setUserName('');
    setPassword('');
    setSahFingerPrint('');
    setValidateCount(0);
  };
  //row
  const [row, setRow] = React.useState({ id: 0 });

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
  const deleteHandler = (param) => {
    setRow(param);
  };
  const deleteHandleClose = () => {
    debugger;
    console.log('delete data:', row);
    DeleteConnection(row).then((del) => {
      GetConnectionData();
      clearData();
      window.alert('Delete Successfully done!!');
      dialogHandleClose();
    });
  };
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const dialogHandleClose = () => {
    setdialogOpen(false);
  };
  const dialogHandleOpen = (param) => {
    deleteHandler(param);
    setdialogOpen(true);
  };
  //View Role Modal
  const [viewOpen, setviewOpen] = React.useState(false);

  const viewHandleOpen = (param) => {
    setRow(param.row);
    setviewOpen(true);
  };

  const viewHandleClose = () => {
    setviewOpen(false);
  };

  let ConnectionObject = {
    validationName,
    validationProtocol,
    validationPort,
    validationPassword,
    Name,
    Source,
    Protocol,
    Host,
    Port,
    UserName,
    Password,
    SahFingerPrint,
    onNameChange,
    onSourceChange,
    onProtocolChange,
    onHostChange,
    onPortChange,
    onUserNameChange,
    onPasswordChange,
    onSahFingerPrintChange,
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
                  <Typography variant="h2">Connections</Typography>
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
                {
                  <MuiDataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection="true"
                    disableSelectionOnClick="true"
                  />
                }
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
        title="Connections"
        handleClose={handleClose}
        onHandleClick={row.id === 0 ? submitHandler : UpdateHandler}
        isAction="true"
        isCancel="true"
        isSubmit="true"
      >
        <ConnectionTab
          {...ConnectionObject}

          //   {
          //     ()
          //   }
        />
      </MatDialog>
      <MatDialog
        open={viewOpen}
        title="Connection"
        handleClose={viewHandleClose}
      >
        <Box component="form" noValidate autoComplete="off">
          <Typography className="text-row">
            <label>Name</label>
            {row && row.name}
          </Typography>
          {row.source != '' && (
            <Typography className="text-row">
              <label>Source</label> {row.source}
            </Typography>
          )}

          <Typography className="text-row">
            <label>Protocol</label>
            {row && row.protocol}
          </Typography>
          <Typography className="text-row">
            <label>Host</label>
            {row && row.host}
          </Typography>
          <Typography className="text-row">
            <label>Port</label>
            {row && row.port}
          </Typography>
          <Typography className="text-row">
            <label>UserName</label>
            {row && row.userName}
          </Typography>
          <Typography className="text-row">
            <label>Password</label>
            {row && row.password}
          </Typography>
          {row.sahFingerPrint != '' && (
            <Typography className="text-row">
              <label>Password</label>
              {row && row.sahFingerPrint}
            </Typography>
          )}
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
