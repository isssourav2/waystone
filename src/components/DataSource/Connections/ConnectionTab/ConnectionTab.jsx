import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DecidePotocol(props) {
  const { SMBShareProto, SFTPProto, FTPProto, validProps } = props;
  if (SMBShareProto)
    return (
      <>
        <TextField
          id="outlined-password-input"
          label="Host"
          type="Text"
          value={validProps.Host}
          onInput={(e) => validProps.onHostChange(e.target.value)}
        />

        {props.validationPort ? (
          <TextField
            error
            id="outlined-error"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        )}

        {props.validationPassword ? (
          <TextField
            error
            id="outlined-error"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        )}
      </>
    );
  else if (SFTPProto)
    return (
      <>
        <TextField
          id="outlined-password-input"
          label="Host"
          type="Text"
          value={validProps.Host}
          onInput={(e) => validProps.onHostChange(e.target.value)}
        />
        {props.validationPort ? (
          <TextField
            error
            id="outlined-error"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        )}

        <TextField
          id="outlined-password-input"
          label="User Name"
          type="Text"
          value={validProps.UserName}
          onInput={(e) => validProps.onUserNameChange(e.target.value)}
        />

        {props.validationPassword ? (
          <TextField
            error
            id="outlined-error"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        )}
        <TextField
          id="outlined-password-input"
          label="SahFingerPrint"
          type="Text"
          value={validProps.SahFingerPrint}
          onInput={(e) => validProps.onSahFingerPrintChange(e.target.value)}
        />
      </>
    );
  else if (FTPProto)
    return (
      <>
        <TextField
          id="outlined-password-input"
          label="Host"
          type="Text"
          value={validProps.Host}
          onInput={(e) => validProps.onHostChange(e.target.value)}
        />

        {props.validationPort ? (
          <TextField
            error
            id="outlined-error"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        )}

        <TextField
          id="outlined-password-input"
          label="User Name"
          type="Text"
          value={validProps.UserName}
          onInput={(e) => validProps.onUserNameChange(e.target.value)}
        />
        {props.validationPassword ? (
          <TextField
            error
            id="outlined-error"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        )}
      </>
    );
  else
    return (
      <>
        <TextField
          id="outlined-password-input"
          label="Host"
          type="Text"
          value={validProps.Host}
          onInput={(e) => validProps.onHostChange(e.target.value)}
        />

        {props.validationPort ? (
          <TextField
            error
            id="outlined-error"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Port"
            type="Text"
            value={validProps.Port}
            onInput={(e) => validProps.onPortChange(e.target.value)}
          />
        )}

        <TextField
          id="outlined-password-input"
          label="User Name"
          type="Text"
          value={validProps.UserName}
          onInput={(e) => validProps.onUserNameChange(e.target.value)}
        />
        {props.validationPassword ? (
          <TextField
            error
            id="outlined-error"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        ) : (
          <TextField
            id="outlined-password-input"
            label="Password"
            type="Text"
            value={validProps.Password}
            onInput={(e) => validProps.onPasswordChange(e.target.value)}
          />
        )}
      </>
    );
}

function ConnectionTab(props) {
  const [SMBShare, SetSMBShare] = React.useState(false);
  const [SFTP, SetSFTP] = React.useState(false);
  const [FTP, SetFTP] = React.useState(false);
  const onProtocol = (param) => {
    props.onProtocolChange(param.target.innerText);

    switch (param.target.innerText) {
      case 'SMB Share':
        SetSMBShare(true);
        SetSFTP(false);
        SetFTP(false);
        break;
      case 'SFTP':
        SetSFTP(true);
        SetSMBShare(false);
        SetFTP(false);
        break;
      case 'Email':
        SetSMBShare(false);
        SetSFTP(false);
        SetFTP(true);
        break;
      case 'FTP':
        SetSMBShare(false);
        SetSFTP(false);
        SetFTP(true);
        break;
      default:
      // SetSMBShare(false);
      // SetSFTP(false);
      // SetFTP(true);
    }
  };
  const doctype = [
    { label: 'Select' },
    { label: 'Import' },
    { label: 'Export' },
  ];

  const protocoltype = [
    { label: 'SMB Share' },
    { label: 'SFTP' },
    { label: 'Email' },
    { label: 'FTP' },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Import" {...a11yProps(0)} />
          <Tab label="Export" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box component="form" noValidate autoComplete="off">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              {props.validationName ? (
                <TextField
                  error
                  id="outlined-error"
                  label="Name"
                  type="Text"
                  value={props.Name}
                  onInput={(e) => props.onNameChange(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="Text"
                  value={props.Name}
                  onInput={(e) => props.onNameChange(e.target.value)}
                />
              )}

              <TextField
                id="outlined-password-input"
                label="Source"
                type="Text"
                value={props.Source}
                onInput={(e) => props.onSourceChange(e.target.value)}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={protocoltype}
                sx={{ width: 300 }}
                onChange={(e) => onProtocol(e)}
                renderInput={(params) => (
                  <TextField {...params} label="Protocol" />
                )}
              />

              <DecidePotocol
                SMBShareProto={SMBShare}
                SFTPProto={SFTP}
                FTPProto={FTP}
                validProps={props}
              />
            </div>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box component="form" noValidate autoComplete="off">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              {props.validationName ? (
                <TextField
                  error
                  id="outlined-error"
                  label="Name"
                  type="Text"
                  value={props.Name}
                  onInput={(e) => props.onNameChange(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="Text"
                  value={props.Name}
                  onInput={(e) => props.onNameChange(e.target.value)}
                />
              )}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={protocoltype}
                sx={{ width: 300 }}
                onChange={(e) => onProtocol(e)}
                renderInput={(params) => (
                  <TextField {...params} label="Protocol" />
                )}
              />
              <DecidePotocol
                SMBShareProto={SMBShare}
                SFTPProto={SFTP}
                FTPProto={FTP}
                validProps={props}
              />
            </div>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}

export default ConnectionTab;
