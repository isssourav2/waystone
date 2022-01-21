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
    if (Validation(ApplicationName,ApplicationDescription)){
      Application.applicationName = ApplicationName;
      Application.applicationDescription = ApplicationDescription;

    const response = SaveApplication(Application);
    response.then((save) => {
      console.log('reponse:', save);
      GetApplicationData();
      window.alert('Insert Successfully done!!');
      clearData();
      handleClose();
    });
  }
  };

  const UpdateHandler = () => {
    if (Validation(ApplicationName,ApplicationDescription)){
      Application.applicationName = ApplicationName;
      Application.applicationDescription = ApplicationDescription;
      Application.applicationId = row.applicationId;
      Application.entryDate = EntryDate;

      console.log(Application);

    const response = UpdateApplication(Application);
    response.then((save) => {
      window.alert('Update Successfully done!!');      
      clearData();
      handleClose();
      GetApplicationData();
    });
  }
  };

  const deleteHandleClose = () => {

    DeleteApplication(row).then((save) => {
      GetApplicationData();
      clearData();
      window.alert('Delete Successfully done!!');
      dialogHandleClose();
    });
  };

  const EditHandler = (param) => {

    setRow(param);
    setApplicationName(param.applicationName);
    setApplicationDescription(param.applicationDescription);
    setEntryDate(param.entryDate);  
    setApplicationId(param.applicationId);  
    setOpen(true);
  };


  const onApplicationNameChange = (val) => {
    if (val === '') {
      setvalidationApplicationName(true);
      setValidateCount(++i);
    } else {
      setvalidationApplicationName(false);
      setValidateCount(0);
    }
    setApplicationName(val);
  };

  const onApplicationDescriptionChange = (val) => {
    if (val === '') {
      setvalidationApplicationDescription(true);
      setValidateCount(++i);
    } else {
      setvalidationApplicationDescription(false);
      setValidateCount(0);
    }
    setApplicationDescription(val);
  };

  

  const clearData = () => {
    row.applicationId = 0;
    Application.applicationId = 0;

    setvalidationApplicationName(false);
    setvalidationApplicationDescription(false);
    setApplicationName('');
    setApplicationDescription('');
    setApplicationId('');

    setValidateCount(0);

  };

  const columns = [
    { field: 'applicationName', headerName: 'Name', width: 180, editable: true },
    { field: 'applicationDescription', headerName: 'Description', width: 180, editable: true },
    
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
  const [Application, setApplication] = React.useState({
    applicationId: 0,
    applicationName: '',
    applicationDescription: '',
    entryDate:null,
  });

  const [ApplicationId, setApplicationId] = React.useState(0);
  const [EntryDate, setEntryDate] = React.useState('');
  const [ApplicationName, setApplicationName] = React.useState('');
  const [ApplicationDescription, setApplicationDescription] = React.useState('');

  const GetApplicationData = () => {
    fetch('https://localhost:7056/api/Application')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        result.map((res) => {
          res['id'] = res.applicationId;
        });
        setRows(result);
      });
  };
  React.useEffect(() => {
    GetApplicationData();
  }, [0]);




  const SaveApplication = async (application) => {
    const res = await axios.post('https://localhost:7056/api/Application', application);
    return res.data;
  };
  const UpdateApplication = async (application) => {
    const res = await axios.put('https://localhost:7056/api/Application', application);
    return res.data;
  };
  const DeleteApplication = async (application) => {
    const res = await axios.delete(
      `https://localhost:7056/api/Application/${application.applicationId}`
    );
    return res.data;
  };



  
  const [open, setOpen] = React.useState(false);

  const [validationApplicationName, setvalidationApplicationName] = React.useState(false);
  const [validationApplicationDescription, setvalidationApplicationDescription] = React.useState(false);
   

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

  const Validation = (ApplicationName,ApplicationDescription) => {
    
    if (ApplicationName == '') {
      setvalidationApplicationName(true);
      setValidateCount(++i);
      return false;
    } else if (ApplicationDescription == '') {
      setvalidationApplicationDescription(true);
      setValidateCount(++i);
      return false;
    } else {
      setValidateCount(0);
      return true;
    }
  };

  const [value, setValue] = React.useState('');
  const applicationd = [];
  const [applications, setApplications] = React.useState([]);

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
                    <AddIcon /> Create Application
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
        title="Application"
        handleClose={handleClose}
        onHandleClick={row.applicationId === 0 ? submitHandler : UpdateHandler}
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
{validationApplicationName ? (
            <TextField
              error
              id="outlined-error"
              label="Name"
              type="Text"
              value={ApplicationName}
              onInput={(e) => onApplicationNameChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Name"
              type="Text"
              value={ApplicationName}
              onInput={(e) => onApplicationNameChange(e.target.value)}
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
{validationApplicationDescription ? (
            <TextField
              error
              id="outlined-error"
              label="Description"
              type="Text"
              value={ApplicationDescription}
              onInput={(e) => onApplicationDescriptionChange(e.target.value)}
            />
          ) : (
            <TextField
              id="outlined-password-input"
              label="Description"
              type="Text"
              value={ApplicationDescription}
              onInput={(e) => onApplicationDescriptionChange(e.target.value)}
            />
          )}

        </Box>

        


      </MatDialog>
      <MatDialog
        open={viewOpen}
        title="Application"
        handleClose={viewHandleClose}
      >
        <Box component="form" noValidate autoComplete="off">

          <Typography className="text-row">
            <label>Name</label> {row && row.applicationName}
          </Typography>
          <Typography className="text-row">
            <label>Descriprion</label> {row && row.applicationDescription}
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
