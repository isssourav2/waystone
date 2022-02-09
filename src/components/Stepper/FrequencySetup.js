import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import RemoveIcon from '@mui/icons-material/Remove';
function FrequencySetup() {
  const [val1, SetVal1] = React.useState(0);
  const [val2, SetVal2] = React.useState(0);
  //set AsAt
  const [AsAt, SetAsAt] = React.useState(true);
  const [FromTo, SetFromTo] = React.useState(true);

  const [SelectFrequency, SetSelectFrequency] = React.useState(0);
  const [FrequencyOptions, SetSelectFrequencyOptions] = React.useState([]);
  const GetFrequency = () => {
    fetch('https://localhost:7056/api/Tag')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        const Options = [{ tagId: 0, tagName: 'Select User' }, ...result];
        SetSelectFrequencyOptions(Options);
      });
  };

  React.useEffect(() => {
    GetFrequency();
  }, [0]);
  const onFrequencyChange = (val) => {
    SetSelectFrequency(val);
  };
  console.log('Select value', FrequencyOptions);
  const minusVal2 = () => {
    debugger;
    let val = val2;
    SetVal2(--val);
  };
  const addVal2 = () => {
    debugger;
    let val = val2;
    SetVal2(++val);
  };
  const minusVal1 = () => {
    debugger;
    let val = val1;
    SetVal1(--val);
  };
  const addVal1 = () => {
    debugger;
    let val = val1;
    SetVal1(++val);
  };

  const AsAtChange = (e) => {
    if (e.target.checked) {
      SetAsAt(false);
      SetFromTo(true);
    }
  };
  const AsFromChange = (e) => {
    if (e.target.checked) {
      SetFromTo(false);
      SetAsAt(true);
    }
  };

  return (
    <>
      <div class="two-col-form">
        <div className="form-col">Frequency</div>
        <div className="form-col">Tag</div>

        <FormControl className="form-col">
          <InputLabel htmlFor="grouped-native-select">Frequency Tag</InputLabel>
          <Select
            value={SelectFrequency}
            onChange={(e) => onFrequencyChange(e.target.value)}
          >
            {FrequencyOptions.map((freq) => {
              return <MenuItem value={freq.tagId}>{freq.tagName}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <TextField className="form-col" id="outlined-uncontrolled" label="" />
      </div>
      <hr />
      <h3 className="text-center"> File Expected Receive Date </h3>
      <div class="two-col-form">
        <div className="form-col">
          <div className="form">
            <input
              type="radio"
              id="AsAt"
              name="Jobstep2"
              value="AsAt"
              onChange={AsAtChange}
            />
            <label for="AsAt">As At</label>
          </div>
          <div className="badge-counter">
            <IconButton
              className="icon-counter"
              aria-label="Remove"
              onClick={minusVal1}
              disabled={AsAt}
            >
              <RemoveIcon />
            </IconButton>
            <div className="label-counter">{val1}</div>
            <IconButton
              className="icon-counter"
              aria-label="Add"
              onClick={addVal1}
              disabled={AsAt}
            >
              <AddIcon />
            </IconButton>
          </div>
          <br />
          For Instance : If File Expected Effective (Report) Date: 22/04/2017,
          and AsAt (delta) = +3, then Expected Receive Date will be 25/04/2018.
        </div>
        <div className="form-col">
          <input
            type="radio"
            id="fromTo"
            name="Jobstep2"
            value="fromTo"
            onChange={AsFromChange}
          />
          <label for="fromTo">From To</label>
          <div className="badge-counter">
            <IconButton
              className="icon-counter"
              aria-label="Remove"
              onClick={minusVal2}
              disabled={FromTo}
            >
              <RemoveIcon />
            </IconButton>
            <div className="label-counter">{val2}</div>
            <IconButton
              className="icon-counter"
              aria-label="Add"
              onClick={addVal2}
              disabled={FromTo}
            >
              <AddIcon />
            </IconButton>
          </div>
          <br />
          <div>
            Enter Range <input type="text" value="0" disabled={FromTo} /> Days
          </div>
          <br />
          For Instance : Effective date: 20/04/2018, From To (delta): +3 Range
          is = 14, Then Expected Effective (Report) Dates = From : 02/04/2017(14
          Business days prior), to : 20/04/2017 and Expected Receive date=
          23/04/2017.
        </div>
      </div>
    </>
  );
}

export default FrequencySetup;
