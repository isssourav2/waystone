import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FixedTags } from './';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const steps = [
  {
    label: 'Stap 1 Job',
    description: ``,
  },
  {
    label: 'Step 2 Fund Soheduler',
    description: '',
  },
  {
    label: 'Step 3 File Fetch ',
    description: ` `,
  },
  {
    label: 'Step4 File Setting',
    description: ``,
  },
  {
    label: 'Step4 File Reeding And Identifioation',
    description: ``,
  },
];
const Home = () => {
  //Tags & Application specific
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

  const [val1, SetVal1] = React.useState(0);
  const [val2, SetVal2] = React.useState(0);

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

  console.log('Tagged Value', tagValue);
  console.log('Application Value', appValue);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepperContaner = (step, index) => {
    console.log('step', step);
    console.log('index', index);
    if (index === 0) {
      return;

      <Step key={step.label}>
        <StepLabel>{step.label}</StepLabel>
        <StepContent>
          <Typography className="Step-Wrap-box">{step.description}</Typography>
          <span>First</span>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                {index === steps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
              <Button
                disabled={index === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>;
    } else if (index === 1) {
      return;

      <Step key={step.label}>
        <StepLabel>{step.label}</StepLabel>
        <StepContent>
          <Typography className="Step-Wrap-box">{step.description}</Typography>
          <span>Second</span>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                {index === steps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
              <Button
                disabled={index === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>;
    } else {
      return;

      <Step key={step.label}>
        <StepLabel>{step.label}</StepLabel>
        <StepContent>
          <Typography className="Step-Wrap-box">{step.description}</Typography>
          <span>Last</span>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                {index === steps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
              <Button
                disabled={index === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>;
    }
  };

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

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div class="content-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className="Step-container-horizontal">
                <Stepper activeStep={activeStep} orientation="horizontal">
                  {steps.map((step, index) => {
                    if (index === 0)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent className="Step-Wrap-box">
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

                            {/* <div className="text-center">
                              <a href="#" class="btn">
                                Download Manipulate and Delivery
                              </a>
                              <a href="#" class="btn">
                                Download Delivery
                              </a>
                            </div> */}

                            <div className="two-col-form">
                              <TextField
                                className="form-col-single"
                                id="outlined-name"
                                label="Job Name"
                              />
                              <div className="form-col">
                                <FixedTags
                                  tags={Tagged}
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
                                  onTagChangeHandler={handleApplicationChange}
                                />
                              </div>
                              {/* <TextField
                                className="form-col"
                                id="outlined-name"
                                label="Application(s)"
                              /> */}

                              <FormControl className="form-col-single">
                                <InputLabel htmlFor="grouped-native-select">
                                  RiskCore Import Template
                                </InputLabel>
                                <Select
                                  native
                                  defaultValue=""
                                  id="grouped-native-select"
                                  label="Grouping"
                                >
                                  <option aria-label="None" value="" />
                                  <optgroup label="Category 1">
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                  </optgroup>
                                  <optgroup label="Category 2">
                                    <option value={3}>Option 3</option>
                                    <option value={4}>Option 4</option>
                                  </optgroup>
                                </Select>
                              </FormControl>
                            </div>

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                <Button
                                  disabled={index === 0}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Previous
                                </Button>
                              </div>
                            </Box>
                          </StepContent>
                        </Step>
                      );
                    if (index === 1)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <hr />
                            <Typography className="Step-Wrap-box">
                              <h3>Job Name: aaa</h3>
                            </Typography>

                            <div class="two-col-form">
                              <div className="form-col">Frequency</div>
                              <div className="form-col">Tag</div>

                              <FormControl className="form-col">
                                <InputLabel htmlFor="grouped-native-select">
                                  Frequency Tag
                                </InputLabel>
                                <Select
                                  native
                                  defaultValue=""
                                  id="grouped-native-select"
                                  label=""
                                >
                                  <option aria-label="None" value="" />
                                  <optgroup label="Category 1">
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                  </optgroup>
                                  <optgroup label="Category 2">
                                    <option value={3}>Option 3</option>
                                    <option value={4}>Option 4</option>
                                  </optgroup>
                                </Select>
                              </FormControl>

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label=""
                              />
                            </div>
                            <hr />
                            <h3 className="text-center">
                              {' '}
                              File Expected Receive Date{' '}
                            </h3>
                            <div class="two-col-form">
                              <div className="form-col">
                                <div className="form">
                                  <input
                                    type="radio"
                                    id="html"
                                    name="fav_language"
                                    value="HTML"
                                  />
                                  <label for="html">HTML</label>
                                </div>
                                <div className="badge-counter">
                                  <IconButton
                                    className="icon-counter"
                                    aria-label="Remove"
                                    onClick={minusVal1}
                                  >
                                    <RemoveIcon />
                                  </IconButton>
                                  <div className="label-counter">{val1}</div>
                                  <IconButton
                                    className="icon-counter"
                                    aria-label="Add"
                                    onClick={addVal1}
                                  >
                                    <AddIcon />
                                  </IconButton>
                                </div>
                                <br />
                                As At For Instance: If File Expected Effective(
                                Report ) Date: 22/04/2017, and As At(delta)= -3,
                                then Expected Receive Date will be 25/04/2018
                              </div>
                              <div className="form-col">
                                <input
                                  type="radio"
                                  id="css"
                                  name="fav_language"
                                  value="CSS"
                                />
                                <label for="css">CSS</label>
                                <div className="badge-counter">
                                  <IconButton
                                    className="icon-counter"
                                    aria-label="Remove"
                                    onClick={minusVal2}
                                  >
                                    <RemoveIcon />
                                  </IconButton>
                                  <div className="label-counter">{val2}</div>
                                  <IconButton
                                    className="icon-counter"
                                    aria-label="Add"
                                    onClick={addVal2}
                                  >
                                    <AddIcon />
                                  </IconButton>
                                </div>
                                <br />
                                From To Enter Range 0 Days
                              </div>
                            </div>

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                <Button
                                  disabled={index === 0}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Previous
                                </Button>
                              </div>
                            </Box>
                          </StepContent>
                        </Step>
                      );
                    if (index === 2)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              <h3>Job Name: 2aaa</h3>
                            </Typography>

                            <div class="two-col-form">
                              <FormControl className="form-col">
                                <InputLabel htmlFor="grouped-native-select">
                                  Connection
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
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="Directory Path"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="File Name"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="Sent To"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="Subject Header"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="Received From"
                              />
                            </div>

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                <Button
                                  disabled={index === 2}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Previous
                                </Button>
                              </div>
                            </Box>
                          </StepContent>
                        </Step>
                      );

                    if (index === 3)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              <h3>Job Name: 3aaa</h3>
                            </Typography>

                            <div class="two-col-form">
                              <FormControl className="form-col">
                                <InputLabel htmlFor="grouped-native-select">
                                  CSV Delimiter
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
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="File Password(if any)"
                              />
                            </div>

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                <Button
                                  disabled={index === 3}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Previous
                                </Button>
                              </div>
                            </Box>
                          </StepContent>
                        </Step>
                      );
                    if (index === 4)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              <h3>Job Name: 4aaa</h3>
                            </Typography>

                            <div class="two-col-form">
                              <FormControl className="form-col">
                                <InputLabel htmlFor="grouped-native-select">
                                  CSV Delimiter
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
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="File Password(if any)"
                              />
                            </div>

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                <Button
                                  disabled={index === 3}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Previous
                                </Button>
                              </div>
                            </Box>
                          </StepContent>
                        </Step>
                      );
                    else
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              {step.description}
                            </Typography>

                            <div class="two-col-form">
                              <FormControl className="form-col">
                                <InputLabel htmlFor="grouped-native-select">
                                  Connection
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
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="333Directory Path"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="File Name"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="Sent To"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="Subject Header"
                              />

                              <TextField
                                className="form-col"
                                id="outlined-uncontrolled"
                                label="Received From"
                              />
                            </div>

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                <Button
                                  disabled={index === 0}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Previous
                                </Button>
                              </div>
                            </Box>
                          </StepContent>
                        </Step>
                      );
                  })}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default Home;
