import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { MuiDataGrid } from '../../../DataTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from 'axios';
import MatDialog from '../../Common/MatDialog';
import Stapper from '../../Stapper';
function Home() {
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

  const clearData = () => {
    row.tagId = 0;
    Tag.tagId = 0;

    setValidateCount(0);
    setTagName('');
  };

  const columns = [
    { field: 'username', headerName: 'Job Type', width: 100, editable: true },
    {
      field: 'fileProcessingTemplateName',
      headerName: 'Job Name',
      width: 100,
      editable: true,
    },
    {
      field: 'application',
      headerName: 'Source',
      width: 120,
      editable: true,
    },
    {
      field: 'tag',
      headerName: 'Tags',
      width: 100,
      editable: true,
    },
    {
      field: 'riskCoreTemplate',
      headerName: 'Riskcore Import Template',
      width: 120,
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
    fetch('https://localhost:7056/api/FileProcessingTemplate')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setRows(result);
      });
  };
  useEffect(() => {
    GetFileReadData();
  }, [0]);

  const SaveTag = async (tag) => {
    const res = await axios.post(
      'https://localhost:7056/api/FileProcessingTemplate',
      tag
    );
    return res.data;
  };
  const UpdateTag = async (tag) => {
    const res = await axios.put(
      'https://localhost:7056/api/FileProcessingTemplate',
      tag
    );
    return res.data;
  };
  const DeleteTag = async (tag) => {
    const res = await axios.delete(
      `https://localhost:7056/api/FileProcessingTemplate/${tag.tagId}`
    );
    return res.data;
  };

  const [open, setOpen] = React.useState(false);

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

  const viewHandleOpen = (param) => {
    setRow(param.row);
  };

  const deleteHandler = (param) => {
    setRow(param);
  };

  const Validation = (tagName) => {
    if (tagName == '') {
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
  const [checkIn, setCheckIn] = React.useState('');
  const [cellOrHeader, setCellOrHeader] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [readFromNextColCell, setReadFromNextColCell] = React.useState('');

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
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Create Job
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

      <MatDialog open={open}  title="Job Scheduling: Jobs" handleClose={handleClose} jobClass="jobclass">
        <Box component="form"  noValidate autoComplete="off">
          <Stapper />
        </Box>
      </MatDialog>
    </>
  );
}

export default Home;
