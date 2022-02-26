import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { PostFile } from './Service/FileProcessingService';
import { GetFileProcessingTemplateLocalStorage } from './Service/localstore';
import axios from 'axios';
function Delimiter() {
  const [FilePassword, SetFilePassword] = React.useState([]);
  const [password, Setpassword] = React.useState('');
  const [FPassword, SetFPassword] = React.useState({});
  const onPassword = (e) => {
    Setpassword({ id: e.target.value, name: e.target.value });
  };
  const AddRecord = async (filePassword) => {
    // debugger;;
    const res = await axios.post(
      'https://localhost:7056/api/FilePassword',
      filePassword
    );
    return res.data;
  };
  const AddPassword = () => {
    let filePass = FilePassword.slice(0);
    filePass.push(password);
    SetFilePassword(filePass);
    FPassword.fileProcessingTemplateId =
      GetFileProcessingTemplateLocalStorage();
    FPassword.password = password.name;
    //AddRecord(FPassword);
    const response = AddRecord(FPassword);
    response
      .then((save) => {
        // filePass.push(password);
        // SetFilePassword(filePass);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onRemove = (value) => {
    const index = FilePassword.findIndex((v) => v.name == value);
    let filePass = [];
    // debugger;;
    if (index > -1) {
      FilePassword.splice(index, 1);
    }
    filePass.push(FilePassword);
    SetFilePassword(...filePass);
  };
  console.log('file pasword', FilePassword);
  return (
    <>
      <div class="two-col-form">
        <FormControl className="form-col">
          <InputLabel htmlFor="grouped-native-select">CSV Delimiter</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
          >
            <option aria-label="None" value="0" />
            <option value="COMMA">,(COMMA)</option>
            <option value="PIPE">!(PIPE)</option>
            <option value="SEMICOLON">;(SEMICOLON)</option>
            <option value="TAB">\t (TAB)</option>
          </Select>
        </FormControl>

        <FormControl className="form-col">
          <InputLabel htmlFor="grouped-native-select">
            Text Delimiter
          </InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
          >
            <option aria-label="None" value="0" />
            <option value="COMMA">,(COMMA)</option>
            <option value="PIPE">!(PIPE)</option>
            <option value="SEMICOLON">;(SEMICOLON)</option>
            <option value="TAB">\t (TAB)</option>
          </Select>
        </FormControl>

        <TextField
          type="text"
          className="form-col"
          id="outlined-uncontrolled"
          label="File Password(if any)"
          onChange={onPassword}
        />
        <IconButton
          className="icon-counter"
          aria-label="Add"
          onClick={AddPassword}
        >
          <AddIcon />
        </IconButton>
      </div>
      <div class="two-col-form">
        <List>
          {FilePassword.map((item, index) => {
            return (
              <ListItem>
                <ListItemText primary={item.name} key={index} />
                <ListItemIcon
                  style={{ marginLeft: '20px' }}
                  onClick={() => onRemove(item.name)}
                >
                  <VisibilityIcon />
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
}

export default Delimiter;
