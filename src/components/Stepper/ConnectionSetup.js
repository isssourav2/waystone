import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { GetJobNameLocalStorage } from './Service/localstore';
import { FileFetch } from './Service/FileProcessingService';
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
    FileFetch.connectionId = val.id;
    SetSelectConnection(val);
    if (val.protocol === 'SMB Share') {
      SetRequiredDoc(true);
    } else {
      SetRequiredDoc(false);
    }
  };
  const DirectoryPath = (e) => {
    FileFetch.sourcePathFormat = e.target.value;
  };
  const onFileName = (e) => {
    FileFetch.fileName = e.target.value;
  };
  const onReceivedFrom = (e) => {
    FileFetch.receivedFrom = e.target.value;
  };
  const onSubjectHeader = (e) => {
    FileFetch.subjectHeader = e.target.value;
  };
  const onSentTo = (e) => {
    FileFetch.sentTo = e.target.value;
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
        <TextField id="outlined-uncontrolled" value={SelectConnection.host} />
        <TextField
          id="outlined-uncontrolled"
          onInput={(e) => DirectoryPath(e)}
        />
      </div>
      {RequiredDoc && (
        <>
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="File Name"
            onChange={(e) => onFileName(e)}
          />
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="Sent To"
            onChange={(e) => onSentTo(e)}
          />
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="Subject Header"
            onChange={(e) => onSubjectHeader(e)}
          />
          <TextField
            className="form-col"
            id="outlined-uncontrolled"
            label="Received From"
            onChange={(e) => onReceivedFrom(e)}
          />
        </>
      )}
    </div>
  );
}

export default ConnectionSetup;
