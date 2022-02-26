import * as React from 'react';
import { useState, useRef } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Popper, ButtonGroup, Button } from '@mui/material';
export default function FixedTags({
  tags,
  onTagChangeHandler,
  onTagDeleteHandler,
  editTags = [],
  label = 'Select',
}) {
  const fixedOptions = [tags[2]];
  //const [value, setValue] = React.useState([...fixedOptions, tags[5]]);
  const [acValue, setValue] = React.useState([]);
  React.useEffect(() => {
    setValue(editTags);
  }, [editTags]);
  const handleDelete = (ev, tagValue) => {
    setValue((prevValue) =>
      prevValue.filter((item) => item.tagId !== tagValue.tagId)
    );
    onTagDeleteHandler(ev, tagValue.tagId);
  };
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={acValue}
      onChange={(event, newValue) => {
        setValue(newValue);
        onTagChangeHandler(event, newValue);
      }}
      options={tags}
      getOptionLabel={(option) => option.name}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.name}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
            onDelete={(ev) => handleDelete(ev, option)}
          />
        ))
      }
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder="Menu List" />
      )}
    />
  );
}
