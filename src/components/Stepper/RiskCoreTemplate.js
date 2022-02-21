import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FixedTags from '../Common/FixedTags';
import MenuItem from '@mui/material/MenuItem';
const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));
function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <StyledFormControlLabel className="btn" checked={checked} {...props} />
  );
}
MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};
function RiskCoreTemplate() {
  const [Tagged, setTagged] = React.useState([]);
  console.log('Tag Records:', Tagged);
  const [Application, setApplication] = React.useState([]);
  console.log('Tag Records:', Application);

  const GetTagged = () => {
    fetch('https://localhost:7056/api/Tag')
      .then((res) => res.json())
      .then((result) => {
        result.map((res) => {
          res['name'] = res.tagName;
        });
        setTagged(result);
      });
  };
  const GetApplication = () => {
    fetch('https://localhost:7056/api/Application')
      .then((res) => res.json())
      .then((result) => {
        result.map((res) => {
          res['name'] = res.applicationName;
        });
        setApplication(result);
      });
  };
  React.useEffect(() => {


    GetTagged();
    GetApplication();
    GetRiskCoreTemplate();
  }, [0]);
  const fixedOptions = [Tagged[0]];
  const [tagValue, setTagValue] = React.useState([...fixedOptions, Tagged[5]]);
  const handleTaggedChange = (event, newValue) => {
    debugger;
    if (newValue[0].name === 'All') {
      setTagValue([
        // ...fixedOptions,
      ]);
    } else {
      setTagValue([
        // ...fixedOptions,
        ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
      ]);
    }
  };
  const fixedAppOptions = [Application[0]];
  const [appValue, setAppValue] = React.useState([
    ...fixedAppOptions,
    Application[5],
  ]);
  const handleApplicationChange = (event, newValue) => {
    debugger;
    if (newValue[0].name === 'All') {
      setAppValue([
        // ...fixedOptions,
      ]);
    } else {
      setAppValue([
        // ...fixedOptions,
        ...newValue.filter((option) => fixedAppOptions.indexOf(option) === -1),
      ]);
    }
  };
  const [SelectRiskCoreTemplate, SetSelectRiskCoreTemplate] = React.useState(0);
  const [RiskCoreTemplate, SetRiskCoreTemplate] = React.useState([]);
  const GetRiskCoreTemplate = () => {
    fetch('https://localhost:7056/api/RiskCoreTemplate')
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        const Options = [{ id: 0, name: 'Select User' }, ...result];
        SetRiskCoreTemplate(Options);
      });
  };

  console.log('Tagged Value', tagValue);
  console.log('Application Value', appValue);
  return (
    <>
      <RadioGroup
        className="text-center"
        name="use-radio-group"
        defaultValue=""
      >
        <div className="radio-flex">
          <MyFormControlLabel
            className="btn"
            value="Download Manipulate and Delivery"
            label=" Download Manipulate and Delivery"
            control={<Radio />}
          />
          <MyFormControlLabel
            value="Download Delivery"
            label="Download Delivery"
            control={<Radio />}
          />
        </div>
      </RadioGroup>

      <div className="two-col-form">
        <TextField
          className="form-col-single"
          id="outlined-name"
          label="Job Name"
        />
        <div className="form-col">
          <FixedTags
            tags={Tagged}
            label="Select Tags(s)"
            onTagChangeHandler={handleTaggedChange}
          />
        </div>
        {/* <TextField
      className="form-col"
      id="outlined-uncontrolled"
      label="Tag(a)"
    /> */}
        <div className="form-col">
          <FixedTags
            tags={Application}
            label="Select Application(s)"
            onTagChangeHandler={handleApplicationChange}
          />
        </div>
        {/* <TextField
      className="form-col"
      id="outlined-name"
      label="Application(s)"
    /> */}

        <FormControl className="form-col-single label-box">
          <InputLabel htmlFor="grouped-native-select">
            RiskCore Import Template
          </InputLabel>
          <Select
            value={SelectRiskCoreTemplate}
            label={SelectRiskCoreTemplate}
            onChange={(e) => SetSelectRiskCoreTemplate(e.target.value)}
          >
            {RiskCoreTemplate.map((freq) => {
              return <MenuItem value={freq.id}>{freq.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default RiskCoreTemplate;
