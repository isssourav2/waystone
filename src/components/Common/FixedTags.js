import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FixedTags({ tags, onTagChangeHandler }) {
  const fixedOptions = [tags[2]];
  const [value, setValue] = React.useState([...fixedOptions, tags[5]]);
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      onChange={(event, newValue) => onTagChangeHandler(event, newValue)}
      options={tags}
      getOptionLabel={(option) => option.menuName}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.menuName}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="Select Menu" placeholder="Menu List" />
      )}
    />
  );
}
