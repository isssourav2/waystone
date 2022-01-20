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
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../style/style.css';
import { MuiDataGrid } from '../../../DataTable';
import axios from 'axios';
function PaperComponent(props) {
  return <Paper {...props} />;
}




const Home = () => {

  const submitHandler = () => {
    if (Validation(SourceName,SourceAddress,SourceEmail,SourcePhone)){
    Source.sourceName = SourceName;
    Source.sourceAddress = SourceAddress;
    Source.sourceEmail = SourceEmail;
    Source.sourcePhone = SourcePhone;

    const response = SaveSource(Source);
    response.then((save) => {
      console.log('reponse:', save);
      GetSourceData();
      window.alert('Insert Successfully done!!');
      clearData();
      handleClose();
    });
  }
  };

  const UpdateHandler = () => {
    if (Validation(SourceName,SourceAddress,SourceEmail,SourcePhone)){
      Source.sourceName = SourceName;
      Source.sourceAddress = SourceAddress;
      Source.sourceEmail = SourceEmail;
      Source.sourcePhone = SourcePhone;
      Source.sourceId = row.sourceId;
      Source.entryDate = EntryDate;

      console.log(Source);

    const response = UpdateTag(Source);
    response.then((save) => {
      window.alert('Update Successfully done!!');      
      clearData();
      handleClose();
      GetSourceData();
    });
  }
  };

  const deleteHandleClose = () => {

    DeleteTag(row).then((save) => {
      GetSourceData();
      clearData();
      window.alert('Delete Successfully done!!');
      dialogHandleClose();
    });
  };

  const EditHandler = (param) => {
    setRow(param);
    setSourceName(param.sourceName);
    setSourceAddress(param.sourceAddress);
    setSourceEmail(param.sourceEmail);
    setSourcePhone(param.sourcePhone);
    setEntryDate(param.entryDate);    
    setOpen(true);
  };


  const onSourceNameChange = (val) => {
    if (val === '') {
      setvalidationSourceName(true);
      setValidateCount(++i);
    } else {
      setvalidationSourceName(false);
      setValidateCount(0);
    }
    setSourceName(val);
  };

  const onSourceAddressChange = (val) => {
    if (val === '') {
      setvalidationSourceAddress(true);
      setValidateCount(++i);
    } else {
      setvalidationSourceAddress(false);
      setValidateCount(0);
    }
    setSourceAddress(val);
  };

  const onSourceEmailChange = (val) => {
    if (val === '') {
      setvalidationSourceEmail(true);
      setValidateCount(++i);
    } else {
      setvalidationSourceEmail(false);
      setValidateCount(0);
    }
    setSourceEmail(val);
  };

  const onSourcePhoneChange = (val) => {
    if (val === '') {
      setvalidationSourcePhone(true);
      setValidateCount(++i);
    } else {
      setvalidationSourcePhone(false);
      setValidateCount(0);
    }
    setSourcePhone(val);
  };

  const clearData = () => {
    row.sourceId = 0;
    Source.sourceId = 0;

    setvalidationSourceName(false);
    setvalidationSourceAddress(false);
    setvalidationSourceEmail(false);
    setvalidationSourcePhone(false);
    setSourceName('');
    setSourceAddress('');
    setSourceEmail('');
    setSourcePhone('');

    setValidateCount(0);

  };

  const columns = [
    { field: 'sourceName', headerName: 'Name', width: 180, editable: true },
    { field: 'sourceAddress', headerName: 'Address', width: 180, editable: true },
    { field: 'sourceEmail', headerName: 'Email', width: 180, editable: true },
    { field: 'sourcePhone', headerName: 'Phone', width: 180, editable: true },

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

  var i = 0;
  const [validateCount, setValidateCount] = React.useState(1);
  const [rows, setRows] = React.useState([]);
  const [row, setRow] = React.useState({ sourceId: 0 });
  const [Source, setSource] = React.useState({
    sourceId: 0,
    sourceName: '',
    sourceAddress: '',
    sourceEmail: '',
    sourcePhone: '',
    entryDate:null,
  });

  const [EntryDate, setEntryDate] = React.useState('');
  const [SourceName, setSourceName] = React.useState('');
  const [SourceAddress, setSourceAddress] = React.useState('');
  const [SourceEmail, setSourceEmail] = React.useState('');
  const [SourcePhone, setSourcePhone] = React.useState('');

  const GetSourceData = () => {
    fetch('https://localhost:7056/api/Source')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        result.map((res) => {
          res['id'] = res.sourceId;
        });
        setRows(result);
      });
  };
  React.useEffect(() => {
    GetSourceData();
  }, [0]);




  const SaveSource = async (source) => {
    const res = await axios.post('https://localhost:7056/api/Source', source);
    return res.data;
  };
  const UpdateTag = async (source) => {
    const res = await axios.put('https://localhost:7056/api/Source', source);
    return res.data;
  };
  const DeleteTag = async (source) => {
    const res = await axios.delete(
      `https://localhost:7056/api/Source/${source.sourceId}`
    );
    return res.data;
  };



  
  const [open, setOpen] = React.useState(false);

  const [validationSourceName, setvalidationSourceName] = React.useState(false);
  const [validationSourceAddress, setvalidationSourceAddress] = React.useState(false);
  const [validationSourceEmail, setvalidationSourceEmail] = React.useState(false);
  const [validationSourcePhone, setvalidationSourcePhone] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    clearData();
  };
  //Dialog Modal
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const dialogHandleClose = () => {
    setdialogOpen(false);
    clearData();
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

  const deleteHandler = (param) => {
    setRow(param);
  };

  const Validation = (SourceName,SourceAddress,SourceEmail,SourcePhone) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (SourceName == '') {
      setvalidationSourceName(true);
      setValidateCount(++i);
      return false;
    } else if (SourceAddress == '') {
      setvalidationSourceAddress(true);
      setValidateCount(++i);
      return false;
    } else if (SourceEmail == '') {
      setvalidationSourceEmail(true);
      setValidateCount(++i);
      return false;
    }else if(!regEmail.test(SourceEmail)){
      setvalidationSourceEmail(true);
      setValidateCount(++i);
      return false;
    }
    
    else if (SourcePhone == '') {
      setvalidationSourcePhone(true);
      setValidateCount(++i);
      return false;
    } else {
      setValidateCount(0);
      return true;
    }
  };

  const [value, setValue] = React.useState('');
  const sourced = [];
  const [sources, setSources] = React.useState([]);

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
                  <Typography variant="h2">Source</Typography>
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Create Source
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
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>

      <MatDialog
        open={open}
        title="Source"
        handleClose={handleClose}
        onHandleClick={row.sourceId === 0 ? submitHandler : UpdateHandler}
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
{validationSourceName ? (
            <TextField
              error
              id="outlined-error"
              label="Name"
              type="Text"
              value={SourceName}
              onInput={(e) => onSourceNameChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Name"
              type="Text"
              value={SourceName}
              onInput={(e) => onSourceNameChange(e.target.value)}
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
{validationSourceAddress ? (
            <TextField
              error
              id="outlined-error"
              label="Address"
              type="Text"
              value={SourceAddress}
              onInput={(e) => onSourceAddressChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Address"
              type="Text"
              value={SourceAddress}
              onInput={(e) => onSourceAddressChange(e.target.value)}
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
{validationSourceEmail ? (
            <TextField
              error
              id="outlined-error"
              label="Email"
              type="Text"
              value={SourceEmail}
              onInput={(e) => onSourceEmailChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Email"
              type="Text"
              value={SourceEmail}
              onInput={(e) => onSourceEmailChange(e.target.value)}
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
{validationSourcePhone ? (
            <TextField
              error
              id="outlined-error"
              label="Phone"
              type="Text"
              value={SourcePhone}
              onInput={(e) => onSourcePhoneChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Phone"
              type="Text"
              value={SourcePhone}
              onInput={(e) => onSourcePhoneChange(e.target.value)}
            />
          )}

        </Box>


      </MatDialog>
      <MatDialog
        open={viewOpen}
        title="Source"
        handleClose={viewHandleClose}
      >
        <Box component="form" noValidate autoComplete="off">

          <Typography className="text-row">
            <label>Name</label> {row && row.sourceName}
          </Typography>
          <Typography className="text-row">
            <label>Address</label> {row && row.sourceAddress}
          </Typography>
          <Typography className="text-row">
            <label>Email</label> {row && row.sourceEmail}
          </Typography>
          <Typography className="text-row">
            <label>Phone</label> {row && row.sourcePhone}
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
