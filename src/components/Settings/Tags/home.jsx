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
    Tag.tagName = tagName;
    console.log(tagName);
    const response = SaveTag(Tag);
    response.then((save) => {
      console.log('reponse:', save);
      GetTagData();
      window.alert('Insert Successfully done!!');
      clearData();
      handleClose();
    });
  };

  const UpdateHandler = () => {
    Tag.tagName = tagName;
    Tag.tagId = row.tagId;

    const response = UpdateTag(Tag);
    response.then((save) => {
      window.alert('Update Successfully done!!');
      GetTagData();
      clearData();
      handleClose();
    });
  };

  const deleteHandleClose = () => {

    DeleteTag(row).then((save) => {
      GetTagData();
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
    setTagName(val);
  };

  const clearData = () => {
    row.tagId = 0;
    Tag.tagId = 0;
    setTagName('');

  };

  const columns = [
    { field: 'tagName', headerName: 'Tag Name', width: 180, editable: true },

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


  const [rows, setRows] = React.useState([]);
  const [row, setRow] = React.useState({ tagId: 0 });
  const [Tag, setTag] = React.useState({
    tagId: 0,
    tagName: '',
  });

  const [tagName, setTagName] = React.useState('');

  const GetTagData = () => {
    fetch('https://localhost:7056/api/Tag')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        result.map((res) => {
          res['id'] = res.tagId;
        });
        setRows(result);
      });
  };
  React.useEffect(() => {
    GetTagData();
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



  //Role Modal
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

  //tagged collection

  const [value, setValue] = React.useState('');
  const tagged = [];
  const [tags, setTags] = React.useState([]);

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
                  <Typography variant="h2">Tags</Typography>
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Create Tag
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
                    placeholder="Tag Name"
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
        title="Tag"
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

          <TextField
            id="outlined-password-input"
            label="Tag Name"
            type="Text"
            value={tagName}
            onInput={(e) => onTagNameChange(e.target.value)}
          />


        </Box>

      </MatDialog>
      <MatDialog
        open={viewOpen}
        title="Tag"
        handleClose={viewHandleClose}
      >
        <Box component="form" noValidate autoComplete="off">
          <Typography className="text-row">
            <label>Tag Name</label> {row && row.tagName}
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
