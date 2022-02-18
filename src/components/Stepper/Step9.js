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
function Step9() {
  const [SelectConnection, SetSelectConnection] = React.useState({});
  const [ConnectionOptions, SetSelectConnectionOptions] = React.useState([]);
  const [RequiredDoc, SetRequiredDoc] = React.useState(false);
  const GetConnection = () => {
    fetch('https://localhost:7056/api/Connection')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        const Options = [{ id: 0, name: 'Select User' }, ...result];
        SetSelectConnectionOptions(Options);
      });
  };

  const onConnectChange = (val) => {
    SetSelectConnection(val);
    if (val.protocol === 'SMB Share') {
      SetRequiredDoc(true);
    } else {
      SetRequiredDoc(false);
    }
  };
  const [SelectRiskCoreTemplate, SetSelectRiskCoreTemplate] = React.useState(0);
  const [RiskCoreTemplate, SetRiskCoreTemplate] = React.useState([]);
  const GetRiskCoreTemplate = () => {
    fetch('https://localhost:7056/api/RiskCoreTemplate')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        const Options = [...result];
        SetRiskCoreTemplate(Options);
      });
  };
  React.useEffect(() => {
    GetConnection();
    GetRiskCoreTemplate();
    SetRequiredDoc(false);
  }, [0]);
  return (
    <div class="two-col-form">
      <FormControl className="form-col">
        <InputLabel htmlFor="grouped-native-select">
          Application Name
        </InputLabel>
        <Select id="demo-simple-select-helper">
          <MenuItem value="Internal">Internal</MenuItem>
          <MenuItem value="External">External</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="form-col">
        <InputLabel htmlFor="grouped-native-select">
          Application Templates Name
        </InputLabel>
        <Select id="demo-simple-select-helper">
          <MenuItem value="Temp1">Template 1</MenuItem>
          <MenuItem value="Temp2">Template 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="form-col">
        <InputLabel htmlFor="grouped-native-select">Connection</InputLabel>
        <Select
          value={SelectConnection}
          onChange={(e) => onConnectChange(e.target.value)}
        >
          {ConnectionOptions.map((rol) => {
            return <MenuItem value={rol}>{rol.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <div className="form-col">
        <Typography variant="h5">
          Protocol | {SelectConnection.protocol}
        </Typography>
        <Typography variant="h5">Host | {SelectConnection.host}</Typography>
        <Typography variant="h5">Port | {SelectConnection.port}</Typography>
      </div>

      <div className="two-col-form">
        <TextField id="outlined-uncontrolled" label="Directory Path" />
      </div>

      <>
        <FormControl className="form-col-single">
          <InputLabel
            id="demo-simple-select-helper-label"
            htmlFor="grouped-native-select"
          >
            RiskCore Import Template
          </InputLabel>
          <Select
            id="demo-simple-select-helper"
            value={SelectRiskCoreTemplate}
            label={SelectRiskCoreTemplate}
            onChange={(e) => SetSelectRiskCoreTemplate(e.target.value)}
          >
            {RiskCoreTemplate.map((freq) => {
              return <MenuItem value={freq.id}>{freq.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </>
    </div>
  );
}

export default Step9;
