import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { GetJobNameLocalStorage } from './Service/localstore';
function ConnectionSetup() {
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

  React.useEffect(() => {
    GetConnection();
    SetRequiredDoc(false);
  }, [0]);
  console.log('Connection', SelectConnection);
  return (
    <div class="two-col-form">
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
      <div className="form-col fill-box">
        <Typography variant="h5">
          <span>Protocol :</span> {SelectConnection.protocol}
        </Typography>
        <Typography variant="h5">
          <span>Host :</span> {SelectConnection.host}
        </Typography>
        <Typography variant="h5">
          <span>Port :</span> {SelectConnection.port}
        </Typography>
      </div>

      <div className="two-col-form" style={{ padding: '30px 17px' }}>
        <TextField
          id="outlined-uncontrolled"
          label="Remote Dir Path"
          value={SelectConnection.host}
        />
        <TextField id="outlined-uncontrolled" label="Directory Path" />
      </div>
      {RequiredDoc && (
        <>
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="File Name"
          />
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="Sent To"
          />
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="Subject Header"
          />
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="Received From"
          />
        </>
      )}
    </div>
  );
}

export default ConnectionSetup;
