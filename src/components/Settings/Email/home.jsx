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
import axios from 'axios';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

import '../../../style/style.css';
function PaperComponent(props) {
  return <Paper {...props} />;
}
const Home = () => {
  //Tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //shedule settings
  const [scheduleTime, SetScheduleTime] = React.useState('');
  const [timeInterval, SetTimeInterval] = React.useState(0);

  //Email Settings
  const [From, SetFrom] = React.useState('');
  const [Host, SetHost] = React.useState('');
  const [Port, SetPort] = React.useState(0);
  const [UserName, SetUserName] = React.useState('');
  const [Password, SetPassword] = React.useState('');
  const [To, SetTo] = React.useState('');

  const [value, setValue] = React.useState('');

  const [btnDisabled, setBtnDisabled] = React.useState(false);
  const [validateCount, setValidateCount] = React.useState(1);

  const [decideSchedulerSubmit, SetDecideSchedulerSubmit] =
    React.useState(false);
  const [decideEmailSubmit, SetDecideEmailSubmit] = React.useState(false);

  const [scheduleId, SetScheduleId] = React.useState(0);
  const [EmailId, SetEmailId] = React.useState(0);

  const emailSetting = {
    id: 0,
    from: '',
    host: '',
    port: 0,
    userName: '',
    password: '',
    to: '',
    entryDate: '2022-01-25T11:19:13.384Z',
    entryBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    updateDate: '2022-01-25T11:19:13.384Z',
    updateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  };
  const ScheduleSetting = {
    id: 0,
    scheduleTime: '2022-01-25T11:20:08.360Z',
    timeInterval: 0,
    entryDate: '2022-01-25T11:20:08.360Z',
    entryBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    updateDate: '2022-01-25T11:20:08.360Z',
    updateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  };
  console.log('settings:', emailSetting, ScheduleSetting);
  //Get calling
  useEffect(() => {
    fetch('https://localhost:7056/api/SchedulerSetting')
      .then((res) => res.json())
      .then((result) => {
        console.log('scheduler', result);

        reloadSchduleData();
        reloadEmailData();
        if (result.totalCount != 0) {
          SetDecideSchedulerSubmit(true);
          SetScheduleId(result.message);
        }
      });
    fetch('https://localhost:7056/api/EmailSetting')
      .then((res) => res.json())
      .then((result) => {
        console.log('Email Settings', result);
        if (result.totalCount != 0) {
          SetDecideEmailSubmit(true);
          SetEmailId(result.message);
        }
      });
  }, [scheduleTime, From]);

  //methode defined for reload data from
  async function reloadScheduleSettingData() {
    const response = axios.get(
      'https://localhost:7056/api/SchedulerSetting/GetSettings'
    );
    return await (
      await response
    ).data;
  }
  async function reloadEmailSettingData() {
    const response = await axios.get(
      'https://localhost:7056/api/EmailSetting/GetEmailSetting'
    );
    return await response.data;
  }
  const reloadSchduleData = () => {
    reloadScheduleSettingData().then((dt) => {
      console.log('schdule data', dt);
      SetScheduleTime(dt.scheduleTime.split(':')[1]);
      SetTimeInterval(dt.timeInterval);
    });
  };
  const reloadEmailData = () => {
    reloadEmailSettingData().then((dt) => {
      debugger;
      SetFrom(dt.from);
      SetHost(dt.host);
      SetPort(dt.port);
      SetUserName(dt.userName);
      SetPassword(dt.password);
      SetTo(dt.to);
    });
  };
  //api calling schedule
  const SaveScheduler = async (ScheduleSetting) => {
    const res = await axios.post(
      'https://localhost:7056/api/SchedulerSetting',
      ScheduleSetting
    );
    return res.data;
  };
  const UpdateScheduler = async (ScheduleSetting) => {
    const res = await axios.put(
      'https://localhost:7056/api/SchedulerSetting',
      ScheduleSetting
    );
    return res.data;
  };

  //scheduleSetting
  const scheduleSettingSubmitHandler = () => {
    console.log('sehdule object', ScheduleSetting);
    if (scheduleSettingValidation(scheduleTime, timeInterval)) {
      //datetime
      ScheduleSetting.scheduleTime = new Date(scheduleTime);
      ScheduleSetting.timeInterval = timeInterval;

      const response = SaveScheduler(ScheduleSetting);
      response.then((save) => {
        window.alert('Insert Successfully done!!');
        reloadSchduleData();
      });
    }
  };

  const scheduleSettingValidation = (scheduleTime, timeInterval) => {
    if (scheduleTime == '') {
      setvalidationscheduleTimeId(true);
      setValidateCount(++i);
      return false;
    } else if (timeInterval === 0) {
      setvalidationTimeIntervalId(true);
      setValidateCount(++i);
      return false;
    } else {
      return true;
    }
  };
  const scheduleSettingUpdateHandler = () => {
    if (scheduleSettingValidation(scheduleTime, timeInterval)) {
      ScheduleSetting.scheduleTime = new Date(scheduleTime);
      ScheduleSetting.timeInterval = timeInterval;
      ScheduleSetting.id = scheduleId;

      const response = UpdateScheduler(ScheduleSetting);
      response.then((save) => {
        window.alert('Update Successfully done!!');
        reloadSchduleData();
      });
    }
  };

  //EmailSetting
  //api calling EmailSetting
  const SaveEmailSetting = async (EmailSetting) => {
    const res = await axios.post(
      'https://localhost:7056/api/EmailSetting',
      EmailSetting
    );
    return res.data;
  };
  const UpdateEmailSetting = async (EmailSetting) => {
    const res = await axios.put(
      'https://localhost:7056/api/EmailSetting',
      EmailSetting
    );
    return res.data;
  };
  const EmailSettingSubmitHandler = () => {
    if (EmailSettingValidation(From, Host, Port, UserName, Password, To)) {
      emailSetting.From = From;
      emailSetting.Host = Host;
      emailSetting.Port = Port;
      emailSetting.UserName = UserName;
      emailSetting.Password = Password;
      emailSetting.To = To;

      const response = SaveEmailSetting(emailSetting);
      response.then((save) => {
        window.alert('Insert Successfully done!!');
        reloadEmailData();
      });
    }
  };
  const EmailSettingValidation = (From, Host, Port, UserName, Password, To) => {
    if (From == '') {
      setvalidationFromId(true);
      setValidateCount(++i);
      return false;
    } else if (Host == '') {
      setvalidationHostId(true);
      setValidateCount(++i);
      return false;
    } else if (Port === 0) {
      setvalidationPortId(true);
      setValidateCount(++i);
      return false;
    } else if (UserName == '') {
      setvalidationUserNameId(true);
      setValidateCount(++i);
      return false;
    } else if (Password == '') {
      setvalidationPasswordId(true);
      setValidateCount(++i);
      return false;
    } else if (To == '') {
      setvalidationToId(true);
      setValidateCount(++i);
      return false;
    } else {
      return true;
    }
  };
  const EmailSettingUpdateHandler = () => {
    if (EmailSettingValidation(From, Host, Port, UserName, Password, To)) {
      emailSetting.From = From;
      emailSetting.Host = Host;
      emailSetting.Port = Port;
      emailSetting.UserName = UserName;
      emailSetting.Password = Password;
      emailSetting.To = To;
      emailSetting.id = EmailId;

      const response = UpdateEmailSetting(emailSetting);
      response.then((save) => {
        window.alert('Update Successfully done!!');
        reloadEmailData();
      });
    }
  };
  //set user data
  const clearData = () => {
    // row.roleId = 0;
    // Role.roleId = 0;

    setvalidationscheduleTimeId(false);
    SetScheduleTime('');
    setValidateCount(0);
  };

  var i = 0;
  const onscheduleTimeChange = (val) => {
    if (val === '') {
      setvalidationscheduleTimeId(true);
      setValidateCount(++i);
    } else {
      setvalidationscheduleTimeId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetScheduleTime(val);
    //Role.roleName = val;
  };

  const [validationscheduleTimeId, setvalidationscheduleTimeId] =
    React.useState(false);

  const onTimeIntervalChange = (val) => {
    if (val === 0) {
      setvalidationTimeIntervalId(true);
      setValidateCount(++i);
    } else {
      setvalidationTimeIntervalId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetTimeInterval(val);
    //Role.roleName = val;
  };
  const [validationTimeIntervalId, setvalidationTimeIntervalId] =
    React.useState(false);

  //Email Settings
  const onFromChange = (val) => {
    if (val === '') {
      setvalidationFromId(true);
      setValidateCount(++i);
    } else {
      setvalidationFromId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetFrom(val);
    //Role.roleName = val;
  };
  const [validationFromId, setvalidationFromId] = React.useState(false);

  const onHostChange = (val) => {
    if (val === '') {
      setvalidationHostId(true);
      setValidateCount(++i);
    } else {
      setvalidationHostId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetHost(val);
    //Role.roleName = val;
  };
  const [validationHostId, setvalidationHostId] = React.useState(false);

  const onPortChange = (val) => {
    if (val === 0) {
      setvalidationPortId(true);
      setValidateCount(++i);
    } else {
      setvalidationPortId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetPort(val);
    //Role.roleName = val;
  };
  const [validationPortId, setvalidationPortId] = React.useState(false);

  const onUserNameChange = (val) => {
    if (val === '') {
      setvalidationUserNameId(true);
      setValidateCount(++i);
    } else {
      setvalidationUserNameId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetUserName(val);
    //Role.roleName = val;
  };
  const [validationUserNameId, setvalidationUserNameId] = React.useState(false);

  const onPasswordChange = (val) => {
    if (val === '') {
      setvalidationPasswordId(true);
      setValidateCount(++i);
    } else {
      setvalidationPasswordId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetPassword(val);
    //Role.roleName = val;
  };
  const [validationPasswordId, setvalidationPasswordId] = React.useState(false);

  const onToChange = (val) => {
    if (val === '') {
      setvalidationToId(true);
      setValidateCount(++i);
    } else {
      setvalidationToId(false);
      //setBtnDisabled(false);
      setValidateCount(0);
    }
    SetTo(val);
    //Role.roleName = val;
  };
  const [validationToId, setvalidationToId] = React.useState(false);

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
                  <Typography variant="h2">Settings: Config</Typography>
                </Box>
              </Grid>

              <Grid item xs={6}></Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className="tab-group">
              <Grid item xs={12}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label="Scheduler Settings" value="1" />
                        <Tab label="Email Settings" value="2" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <Typography variant="h3"> </Typography>

                      <Box
                        className="tabform"
                        component="form"
                        noValidate
                        autoComplete="off"
                      >
                        <div class="tabform-box">
                          {validationscheduleTimeId ? (
                            <TextField
                              error
                              id="outlined-error"
                              label="01:00 AM"
                              type="Text"
                              placeholder="01:00 AM"
                              value={scheduleTime}
                              onInput={(e) =>
                                onscheduleTimeChange(e.target.value)
                              }
                            />
                          ) : (
                            <TextField
                              required
                              id="outlined-password-input"
                              label="01:00 AM"
                              type="Text"
                              placeholder="01:00 AM"
                              value={scheduleTime}
                              onInput={(e) =>
                                onscheduleTimeChange(e.target.value)
                              }
                            />
                          )}
                          {validationTimeIntervalId ? (
                            <TextField
                              error
                              id="outlined-error"
                              label="Time Interval (HH)"
                              type="Text"
                              placeholder="1"
                              value={timeInterval}
                              onInput={(e) =>
                                onTimeIntervalChange(e.target.value)
                              }
                            />
                          ) : (
                            <TextField
                              required
                              id="outlined-password-input"
                              label="Time Interval (HH)"
                              type="Text"
                              placeholder="1"
                              value={timeInterval}
                              onInput={(e) =>
                                onTimeIntervalChange(e.target.value)
                              }
                            />
                          )}
                          {decideSchedulerSubmit ? (
                            <Button
                              className="box-btn"
                              variant="contained"
                              size="small"
                              onClick={scheduleSettingUpdateHandler}
                            >
                              Submit
                            </Button>
                          ) : (
                            <Button
                              className="box-btn"
                              variant="contained"
                              size="small"
                              onClick={scheduleSettingSubmitHandler}
                            >
                              Submit
                            </Button>
                          )}
                        </div>
                      </Box>
                    </TabPanel>
                    <TabPanel value="2">
                      <Typography variant="h3"> </Typography>

                      <Box
                        className="tabform"
                        component="form"
                        noValidate
                        autoComplete="off"
                      >
                        <div class="tabform-box">
                          {validationFromId ? (
                            <TextField
                              error
                              id="outlined-error"
                              label="From"
                              type="Text"
                              value={From}
                              onInput={(e) => onFromChange(e.target.value)}
                            />
                          ) : (
                            <TextField
                              id="outlined-password-input"
                              label="From"
                              type="Text"
                              value={From}
                              onInput={(e) => onFromChange(e.target.value)}
                            />
                          )}

                          <em className="note">
                            Please provide only one email id
                          </em>
                          {validationHostId ? (
                            <TextField
                              error
                              id="outlined-error"
                              label="Host"
                              type="Text"
                              placeholder="smtp.office365.com"
                              value={Host}
                              onInput={(e) => onHostChange(e.target.value)}
                            />
                          ) : (
                            <TextField
                              required
                              id="outlined-password-input"
                              label="Host"
                              type="Text"
                              placeholder="smtp.office365.com"
                              value={Host}
                              onInput={(e) => onHostChange(e.target.value)}
                            />
                          )}
                          {validationPortId ? (
                            <TextField
                              error
                              id="outlined-error"
                              label="Port"
                              type="Text"
                              placeholder="586"
                              value={Port}
                              onInput={(e) => onPortChange(e.target.value)}
                            />
                          ) : (
                            <TextField
                              required
                              id="outlined-password-input"
                              label="Port"
                              type="Text"
                              placeholder="586"
                              value={Port}
                              onInput={(e) => onPortChange(e.target.value)}
                            />
                          )}
                          {validationUserNameId ? (
                            <TextField
                              error
                              id="outlined-error"
                              label="User Name"
                              type="Text"
                              placeholder="mb_riskire@waystone.com"
                              value={UserName}
                              onInput={(e) => onUserNameChange(e.target.value)}
                            />
                          ) : (
                            <TextField
                              required
                              id="outlined-password-input"
                              label="User Name"
                              type="Text"
                              placeholder="mb_riskire@waystone.com"
                              value={UserName}
                              onInput={(e) => onUserNameChange(e.target.value)}
                            />
                          )}
                          {validationPasswordId ? (
                            <TextField
                              error
                              id="outlined-error"
                              label="Password"
                              type="Text"
                              placeholder="Enter Password"
                              value={Password}
                              onInput={(e) => onPasswordChange(e.target.value)}
                            />
                          ) : (
                            <TextField
                              required
                              id="outlined-password-input"
                              label="Password"
                              type="Text"
                              placeholder="Enter Password"
                              value={Password}
                              onInput={(e) => onPasswordChange(e.target.value)}
                            />
                          )}

                          <TextField
                            required
                            id="outlined-password-input"
                            label="To"
                            type="Text"
                            placeholder="mb_riskire@waystone.com"
                            value={To}
                            onInput={(e) => onToChange(e.target.value)}
                          />
                          <em className="note">
                            Email id must be comma separated e.g- info@info.com,
                            info1@info.com.
                          </em>

                          <Button
                            className="box-btn"
                            variant="contained"
                            size="small"
                            onClick={
                              !decideEmailSubmit
                                ? EmailSettingSubmitHandler
                                : EmailSettingUpdateHandler
                            }
                          >
                            Submit
                          </Button>
                        </div>
                      </Box>
                    </TabPanel>
                  </TabContext>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Home;
