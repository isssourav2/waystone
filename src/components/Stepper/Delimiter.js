import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
function Delimiter() {
  const [FilePassword, SetFilePassword] = React.useState([]);
  const [password, Setpassword] = React.useState('');
  const onPassword = (e) => {
    Setpassword({ id: e.target.value, name: e.target.value });
  };
  const AddPassword = () => {
    let filePass = FilePassword.slice(0);
    filePass.push(password);
    SetFilePassword(filePass);
  };
  const onRemove = (value) => {
    const index = FilePassword.findIndex((v) => v.name == value);
    let filePass = [];
    debugger;
    if (index > -1) {
      FilePassword.splice(index, 1);
    }
    filePass.push(FilePassword);
    SetFilePassword(filePass);
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
            <option aria-label="None" value="" />
            <optgroup label="Category 1">
              <option value={1}>Select</option>
              <option value={2}>Select</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Select</option>
              <option value={4}>Select</option>
            </optgroup>
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
            <option aria-label="None" value="" />
            <optgroup label="Category 1">
              <option value={1}>Select</option>
              <option value={2}>Select</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Select</option>
              <option value={4}>Select</option>
            </optgroup>
          </Select>
        </FormControl>

        <TextField
          type="password"
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
        <ul>
          {FilePassword.map((item, index) => {
            return (
              <ListItem>
                <ListItemText primary={item.name} key={item.id} />
                <ListItemIcon
                  style={{ marginLeft: '20px' }}
                  onClick={() => onRemove(item.name)}
                >
                  <RemoveIcon />
                </ListItemIcon>
              </ListItem>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Delimiter;
