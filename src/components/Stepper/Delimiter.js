import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
function Delimiter() {
  return (
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
        <InputLabel htmlFor="grouped-native-select">Text Delimiter</InputLabel>
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
        className="form-col"
        id="outlined-uncontrolled"
        label="File Password(if any)"
      />
    </div>
  );
}

export default Delimiter;
