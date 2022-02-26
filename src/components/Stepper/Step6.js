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
import Checkbox from '@mui/material/Checkbox';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

// Import Brace and the AceEditor Component
//import brace from 'brace';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
//import 'ace-builds/src-noconflict/mode-c_cpp'
//import 'ace-builds/src-noconflict/theme-github'

// Import a Mode (language)
//import 'brace/mode/java';
//import 'ace/mode/java';

// Import a Theme (okadia, github, xcode etc)
//import 'brace/theme/github';
//import 'ace/theme/github';

function PaperComponent(props) {
  return <Paper {...props} />;
}

const Step6 = () => {
  var i = 0;

  const [formulaFieldModel, setFormulaField] = React.useState({
    id: 0,
    formulaFieldName: '',
    formulaFieldDescription: '',
    formula: '',
    enabled: true,
  });

  React.useEffect(() => {
    GetData();
    //setShowFields(false);
  }, [0]);

  const [rows, setRows] = React.useState([]);
  const [row, setRow] = React.useState({
    id: 0,
    enabled: true,
  });

  //data
  const [FormulaFieldName, setFormulaFieldName] = React.useState('');
  const [FormulaFieldDescription, setFormulaFieldDescription] =
    React.useState('');
  const [Formula, setFormula] = React.useState('');

  //validation
  const [validationFormulaFieldName, setValidationFormulaFieldName] =
    React.useState('');
  const [validationFormula, setValidationFormula] = React.useState('');

  const [validateCount, setValidateCount] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const id = open ? 'simple-popover' : undefined;

  //Get Data from database through api
  const GetData = () => {
    //// debugger;;
    fetch('https://localhost:7056/api/FileProcessingTemplateFormulaField')
      .then((res) => res.json())
      .then((result) => {
        result.map((res) => {
          res['id'] = res.id;
        });
        //send the list of data
        setRows(result);
      });
  };

  //Post Data to database through api
  const SaveData = async (formulaFieldModel) => {
    //// debugger;;
    const res = await axios.post(
      'https://localhost:7056/api/FileProcessingTemplateFormulaField',
      formulaFieldModel
    );
    return res.data;
  };

  //Update Data to database through api
  const UpdateData = async (formulaFieldModel) => {
    //// debugger;;
    const res = await axios.put(
      'https://localhost:7056/api/FileProcessingTemplateFormulaField',
      formulaFieldModel
    );
    return res.data;
  };

  //Delete Data from database through api
  const DeleteData = async (formulaFieldModel) => {
    //// debugger;;
    const res = await axios.delete(
      `https://localhost:7056/api/FileProcessingTemplateFormulaField/${formulaFieldModel.id}`
    );
    return res.data;
  };

  //Insert Data
  const submitHandler = () => {
    //// debugger;;
    formulaFieldModel.formulaFieldDescription = FormulaFieldDescription;

    if (Validation(FormulaFieldName, Formula)) {
      formulaFieldModel.formulaFieldName = FormulaFieldName;
      formulaFieldModel.formula = Formula;

      console.log('insert', formulaFieldModel);
      const response = SaveData(formulaFieldModel);
      response
        .then((save) => {
          //window.alert('Insert Successfully done!!');
          msgDialog('Insert Successfully done!!');
          clearData();
          handleClose();
          GetData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //Edit Data
  const EditHandler = (param) => {
    //// debugger;;
    //alert(param.id);
    //alert(param.enabled);
    setRow(param);
    setFormulaFieldName(param.formulaFieldName);
    setFormulaFieldDescription(param.formulaFieldDescription);
    setFormula(param.formula);

    formulaFieldModel.id = param.id;

    setOpen(true);
  };

  //Update data
  const UpdateHandler = () => {
    //// debugger;;
    //alert(formulaFieldModel.id);
    console.log('update');
    formulaFieldModel.formulaFieldDescription = FormulaFieldDescription;
    formulaFieldModel.enabled = rows.filter(
      (r) => r.id === formulaFieldModel.id
    )[0].enabled;
    if (Validation(FormulaFieldName, Formula)) {
      formulaFieldModel.formulaFieldName = FormulaFieldName;
      formulaFieldModel.formula = Formula;

      console.log('update', formulaFieldModel);
      const response = UpdateData(formulaFieldModel);
      response
        .then((update) => {
          clearData();
          handleClose();
          msgDialog('Update Successfully done!!');
          GetData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //delete data
  const deleteHandleClose = () => {
    console.log('delete data:', row);
    DeleteData(row).then((del) => {
      GetData();
      clearData();
      //window.alert('Delete Successfully done!!');
      msgDialog('Delete Successfully done!!');
      dialogHandleClose();
    });
  };

  //checkbox on change
  const CheckHandler = (param, chk) => {
    //// debugger;;
    //alert(param.id);
    //alert(param.enabled);
    //alert(chk);
    console.log('update');
    formulaFieldModel.formulaFieldDescription = param.formulaFieldDescription;
    formulaFieldModel.enabled = param.enabled;
    formulaFieldModel.id = param.id;
    formulaFieldModel.formulaFieldName = param.formulaFieldName;
    formulaFieldModel.formula = param.formula;

    console.log('update', formulaFieldModel);
    const response = UpdateData(formulaFieldModel);
    response
      .then((update) => {})
      .catch((error) => {
        console.log(error);
      });

    //  // if (Validation(param.formulaFieldName,param.formula)) {
    //     if (Validation(FormulaFieldName,Formula)) {
    //     formulaFieldModel.formulaFieldName=param.formulaFieldName;
    //     formulaFieldModel.formula=param.formula;

    //     console.log('update', formulaFieldModel);
    //     const response = UpdateData(formulaFieldModel);
    //     response.then((update) => {
    //       //clearData();
    //       //handleClose();
    //       //window.alert('Update Successfully done!!');
    //       //msgDialog('Update Successfully done!!');
    //       //GetData();
    //     }).catch((error) => {
    //       console.log(error);
    //   });
    // }
  };

  //clear all data
  const clearData = () => {
    row.id = 0;
    formulaFieldModel.id = 0;
    formulaFieldModel.enabled = true;

    //validation
    setValidationFormulaFieldName(false);
    setValidationFormula(false);

    //data
    setFormulaFieldName('');
    setFormula('');
    setFormulaFieldDescription('');
    //setShowFields(false);
    //set validate counter
    setValidateCount(0);
  };

  //set validation
  const Validation = (FormulaFieldName, Formula) => {
    //// debugger;;
    if (FormulaFieldName == '' && Formula == '') {
      setValidationFormulaFieldName(true);
      setValidationFormula(true);
      setValidateCount(++i);
      return false;
    } else if (FormulaFieldName == '') {
      setValidationFormulaFieldName(true);
      setValidateCount(++i);
      return false;
    } else if (Formula == '') {
      setValidationFormula(true);
      msgDialog('Formula field cannot be null');
      setValidateCount(++i);
      return false;
    } else {
      setValidateCount(0);
      return true;
    }
  };

  //open Modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  //close modal
  const handleClose = () => {
    setOpen(false);
    clearData();
  };

  /*****dialog modal*****/
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const dialogHandleClose = () => {
    //// debugger;;
    setdialogOpen(false);
    setMsgOpen(false);
  };
  const dialogHandleOpen = (param) => {
    deleteHandler(param);
    setdialogOpen(true);
  };
  const deleteHandler = (param) => {
    setRow(param);
  };
  /*****dialog modal*****/

  /*****msg dialog*****/
  const [msg, setMsg] = React.useState('');
  const [msgOpen, setMsgOpen] = React.useState(false);
  const msgDialog = (param) => {
    //// debugger;;
    setMsg(param);
    setMsgOpen(true);
  };
  /*****msg dialog*****/

  /*****on input change*****/
  const FormulaFieldNameInputChange = (val) => {
    if (val === '') {
      setValidationFormulaFieldName(true);
      setValidateCount(++i);
    } else {
      setValidationFormulaFieldName(false);
      setValidateCount(++i);
      setFormulaFieldName(val);
    }
  };

  const FormulaInputChange = (val) => {
    //// debugger;;
    if (val === '') {
      setValidationFormula(true);
      setValidateCount(++i);
    } else {
      setValidationFormula(false);
      setValidateCount(++i);
      setFormula(val);
    }
  };
  const FormulaFieldDescriptionInputChange = (val) => {
    setFormulaFieldDescription(val);
  };
  /*****on input change*****/

  const columns = [
    {
      field: 'formulaFieldName',
      headerName: 'Name',
      width: 180,
      editable: false,
    },
    {
      field: 'formulaFieldDescription',
      headerName: 'Description',
      width: 180,
      editable: false,
    },
    {
      field: 'enabled',
      headerName: 'Enabled',
      width: 180,
      editable: false,
      renderCell: (params) => (
        <>
          {params.row.enabled === true ? (
            <Checkbox
              checked
              color="success"
              onChange={(e) => {
                //// debugger;;
                rows.filter((r) => r.id === params.row.id)[0].enabled =
                  e.target.checked;
                setRows([...rows]);
                CheckHandler(params.row, e.target.checked);
              }}
            />
          ) : (
            <Checkbox
              onChange={(e) => {
                //// debugger;;
                rows.filter((r) => r.id === params.row.id)[0].enabled =
                  e.target.checked;
                setRows([...rows]);
                CheckHandler(params.row, e.target.checked);
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
        // <IconButton
        //   className="link-tool"
        //   //onClick={() => viewHandleOpen(params)}
        // >
        //   <RemoveRedEyeIcon />
        // </IconButton>,
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

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <div className="">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    marginBottom: 3,
                  }}
                >
                  {/* <Typography variant="h2">Rule</Typography> */}
                  <Button
                    className="box-btn"
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <AddIcon /> Add New Formula Field
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
        title="Advance File Manipulation"
        handleClose={handleClose}
        onHandleClick={row.id == 0 ? submitHandler : UpdateHandler}
        isAction="true"
        isCancel="true"
        isSubmit="true"
        jobClass="formulaFieldClass"
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          {validationFormulaFieldName ? (
            <TextField
              error
              id="formulaFieldName-input"
              label="Field Name *"
              type="Text"
              name="FormulaFieldName"
              value={FormulaFieldName}
              onChange={(e) => FormulaFieldNameInputChange(e.target.value)}
            />
          ) : (
            <TextField
              id="formulaFieldName-input"
              label="Field Name *"
              type="Text"
              name="FormulaFieldName"
              value={FormulaFieldName}
              onChange={(e) => FormulaFieldNameInputChange(e.target.value)}
            />
          )}

          <TextField
            id="formulaFieldDescription-input"
            label="Field Description"
            type="Text"
            name="FormulaFieldDescription"
            value={FormulaFieldDescription}
            onChange={(e) => FormulaFieldDescriptionInputChange(e.target.value)}
          />
          <Typography>Formula *</Typography>
          <AceEditor
            mode="c_cpp"
            theme="github"
            value={Formula}
            //onChange={e=>FormulaInputChange(e.target.value)}
            onChange={(value, stat) => {
              FormulaInputChange(value);

              console.log('onChange', value, stat);
            }}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{
              $blockScrolling: true,
            }}
          />
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
      <Dialog
        open={msgOpen}
        onClose={dialogHandleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Message
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{msg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={dialogHandleClose} className="box-btn">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Step6;
