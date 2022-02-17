import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import MatDialog from '../Common/MatDialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../style/style.css';
import { MuiDataGrid } from '../../DataTable';
import axios from 'axios';

import FormControl from '@mui/material/FormControl';	
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function PaperComponent(props) {
  return <Paper {...props} />;
}

const Step4 = () => {
  const submitHandler = () => {
    if (Validation(tagName)) {
      Tag.tagName = tagName;
      console.log(tagName);
      const response = SaveTag(Tag);
      response.then((save) => {
        console.log('reponse:', save);
        GetFileReadData();
        window.alert('Insert Successfully done!!');
        clearData();
        handleClose();
      });
    }
  };

  const UpdateHandler = () => {
    if (Validation(tagName)) {
      Tag.tagName = tagName;
      Tag.tagId = row.tagId;

      const response = UpdateTag(Tag);
      response.then((save) => {
        window.alert('Update Successfully done!!');
        clearData();
        handleClose();
        GetFileReadData();
      });
    }
  };

  const deleteHandleClose = () => {
    DeleteTag(row).then((save) => {
      GetFileReadData();
      clearData();
      window.alert('Delete Successfully done!!');
      dialogHandleClose();
    });
  };

  const EditHandler = (param) => {
    setRow(param);
    setTagName(param.tagName);
    setOpen(true);
  };

  const onTagNameChange = (val) => {
    //Tag.tagName = val;
    if (val === '') {
      setvalidationTagNameId(true);
      setValidateCount(++i);
    } else {
      setvalidationTagNameId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    setTagName(val);
  };

  const clearData = () => {
    row.tagId = 0;
    Tag.tagId = 0;
    setvalidationTagNameId(false);
    setValidateCount(0);
    setTagName('');
  };

  const columns = [
    { field: 'basedOn', headerName: 'Based On', width: 180, editable: true },
    { field: 'checkIn', headerName: 'CheckIn', width: 180, editable: true },
    {
      field: 'cellOrHeader',
      headerName: 'Cell Or Header',
      width: 180,
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
  const [row, setRow] = React.useState({ tagId: 0 });
  const [Tag, setTag] = React.useState({
    tagId: 0,
    tagName: '',
  });

   const [tagName, setTagName] = React.useState('');

  const GetFileReadData = () => {
    fetch('https://localhost:7056/api/FileRead')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setRows(result);
      });
  };
  React.useEffect(() => {
    GetFileReadData();
  }, [0]);

  const SaveTag = async (tag) => {
    const res = await axios.post('https://localhost:7056/api/Tag', tag);
    return res.data;
  };
  const UpdateTag = async (tag) => {
    const res = await axios.put('https://localhost:7056/api/Tag', tag);
    return res.data;
  };
  const DeleteTag = async (tag) => {
    const res = await axios.delete(
      `https://localhost:7056/api/Tag/${tag.tagId}`
    );
    return res.data;
  };

  const [open, setOpen] = React.useState(false);
  const [validationTagNameId, setvalidationTagNameId] = React.useState(false);

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

  const Validation = (tagName) => {
    if (tagName == '') {
      setvalidationTagNameId(true);
      setValidateCount(++i);
      return false;
    } else {
      return true;
    }
  };


  const [value, setValue] = React.useState('');
  const tagged = [];
  const [tags, setTags] = React.useState([]);
  const id = open ? 'simple-popover' : undefined;


  const [basedOn, setBasedOn] = React.useState('');
  const [checkIn,setCheckIn]=React.useState('');
  const [cellOrHeader, setCellOrHeader]=React.useState('');
  const [operation, setOperation]=React.useState('');
  const [readFromNextColCell, setReadFromNextColCell]=React.useState('');

  const dropdownOnChange = (event) => {
    setBasedOn(event.target.value);
     setCheckIn(event.target.value);
     setCellOrHeader(event.target.value);
     setOperation(event.target.value);
     setReadFromNextColCell(event.target.value);
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
                  <Typography variant="h2">Rule</Typography>
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Add New Rule
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
                <div className="empty-box"></div>
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
        title="File Reading And Identification"
        handleClose={handleClose}
        onHandleClick={row.tagId === 0 ? submitHandler : UpdateHandler}
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
                 
             
              <FormControl fullWidth>
 
            <InputLabel id="demo-simple-select-label">BasedOn</InputLabel>
  <Select
    labelId="basedOn-select-label"
    id="basedOn-select"
    value={basedOn}
    label="BasedOn"
    onChange={(e)=>dropdownOnChange(setBasedOn)}
  >    
    <MenuItem value={1}>Value</MenuItem>
    <MenuItem value={2}>Format</MenuItem>
   </Select>
</FormControl>

<FormControl fullWidth>
 
            <InputLabel id="checkIn-select-label">CheckIn</InputLabel>
  <Select
    labelId="checkIn-select-label"
    id="checkIn-select"
    value={checkIn}
    label="CheckIn"
    onChange={(e)=>dropdownOnChange(setCheckIn)}
  >    
    <MenuItem value={1}>File Content</MenuItem>
    <MenuItem value={2}>File Name</MenuItem>
   </Select>
</FormControl>
<FormControl fullWidth>
 
            <InputLabel id="cellOrHeader-select-label">CellOrHeader</InputLabel>
  <Select
    labelId="cellOrHeader-select-label"
    id="cellOrHeader-select"
    value={cellOrHeader}
    label="CellOrHeader"
    onChange={(e)=>dropdownOnChange(setCellOrHeader)}
  >    
    <MenuItem value={1}>Cell</MenuItem>
    <MenuItem value={2}>Header</MenuItem>
   </Select>
</FormControl>
<TextField
              id="cellOrHeaderValue-input"
              label="CellOrHeaderValue"
              type="Text"
            />
            <FormControl fullWidth>
 
 <InputLabel id="operation-select-label">Operation</InputLabel>
<Select
labelId="operation-select-label"
id="operation-select"
value={operation}
label="Operation"
onChange={(e)=>dropdownOnChange(setOperation)}
>    
<MenuItem value={1}>StartsWith</MenuItem>
<MenuItem value={2}>EndsWith</MenuItem>
<MenuItem value={3}>Contains</MenuItem>
</Select>
</FormControl>
<TextField
              id="searchValue-input"
              label="SearchValue"
              type="Text"
            />
<FormControl fullWidth>
 
 <InputLabel id="readFromNextColCell-select-label">ReadFromNextColCell</InputLabel>
<Select
labelId="readFromNextColCell-select-label"
id="readFromNextColCell-select"
value={readFromNextColCell}
label="ReadFromNextColCell"
onChange={(e)=>dropdownOnChange(setReadFromNextColCell)}
>    
<MenuItem value={1}>Not Set</MenuItem>
<MenuItem value={2}>True</MenuItem>
<MenuItem value={3}>False</MenuItem>
</Select>
</FormControl>

<TextField
              id="sheetName-input"
              label="SheetName"
              type="Text"
            />
   </Box>
      </MatDialog>
    </>
  );
};

export default Step4;
