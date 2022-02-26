import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {LastElementForStep8} from './Service/FileProcessingService'

function createData(fileProcessing, ColumnOrder, ColumnName, DataType) {
  return { fileProcessing, ColumnOrder, ColumnName, DataType };
}

function Step8() {
  const [Rows, SetRows] = React.useState([]);
   const [lastElement,SetLastElement]=React.useState('');
  console.log('Step 8 Rows', Rows);
  React.useEffect(() => {
    const rows = [createData('Column1', '1', 'Column1', 'Numeric')];
    SetRows(rows);
  }, [0]);
const ReportChange=(val)=>{
  SetLastElement(val);
}
  const AddRows = (obj) => {
    debugger;
    var ElementTextbox=document.getElementById('reportvalue');
  //lastElement=ElementTextbox;
  if(lastElement==''){
    alert('cannot be blank');
  }
  else
  {
    //SetLastElement('');
    const row = createData(
      obj.fileProcessing,
      obj.ColumnOrder,
      obj.ColumnName,
      obj.DataType
    );
    const rows = [...Rows, row];
    SetRows(rows);

    // FileValidationArray.map((v) => {
    //   debugger;
    //   FileValidation.fileProcessingTemplateId = PostFile.id;
    //   FileValidation=v;
    //   console.log('FileProcessingTagManipulation:',FileProcessingTagManipulation);
    //   FileValidationSubmit(FileValidation);
    // });
    //FileValidationArray
    
    
  }
  };
  const onAddRows = () => {
    let columnObj = {
      fileProcessing: 'Column1',
      ColumnOrder: '1',
      ColumnName: 'Column1',
      DataType: 'Numeric',
    };
    AddRows(columnObj);
  };

  LastElementForStep8=lastElement;

/*****Select Data Type*****/
const [SelectDataType, SetSelectDataType] = React.useState('Select');

//on dropdown change
const DataTypeOnChange = (val) => {
  debugger;
  SetSelectDataType(val);
 };
 /*****Select Data Type*****/

 /*****msg dialog*****/
const [msg,setMsg]=React.useState('');
 const [msgOpen,setMsgOpen]=React.useState(false);
 const msgDialog=(param)=>{
    setMsg(param);
   setMsgOpen(true);
 };
 const dialogHandleClose = () => {
   setMsgOpen(false);
};
/*****msg dialog*****/






  const removeRow = () => {};
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="tblFileValidation">
          <TableHead>
            <TableRow>
              <TableCell>Report Header</TableCell>
              <TableCell align="right">Data Type</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    id="reportvalue"
                    //label=""
                    type="Text"
                    onChange={(e)=>ReportChange(e.target.value)}
                  />
                </TableCell>
                <TableCell align="right">
                  <Select
                    labelId="dataType-select-label"
                    id="dataType-select"
                    value={SelectDataType}
                    onChange={(e) => DataTypeOnChange(e.target.value)}
                  >
                    <MenuItem value={"Select"}>--Select--</MenuItem>
                    <MenuItem value={"Date"}>Date</MenuItem>
                    <MenuItem value={"Numeric"}>Numeric</MenuItem>
                  </Select>
                  
                </TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={removeRow}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" spacing={2} style={{ marginTop: '10px' }}>
        <Button className="btn" variant="contained" onClick={onAddRows}>
          + Add New
        </Button>
      </Stack>
      <Dialog
        open={msgOpen}
        onClose={dialogHandleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Message
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={dialogHandleClose}
            className="box-btn"
          >
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Step8;
