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

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import MatDialog from './Common/MatDialog';

import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MuiDataGrid } from '../DataTable';

import SearchIcon from '@mui/icons-material/Search';


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

  const [viewOpen, setviewOpen] = React.useState(false);
  const viewHandleOpen = () => {
    setviewOpen(true);
  };
  const viewHandleClose = () => {
    setviewOpen(false);
  };

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


  const columns = [
    { field: 'sourceName', headerName: 'Name', width: 180, editable: true },
    { field: 'sourceAddress', headerName: 'Address', width: 180, editable: true },
    { field: 'sourceEmail', headerName: 'Email', width: 180, editable: true },
    { field: 'sourcePhone', headerName: 'Phone', width: 180, editable: true },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 1,
      disableClickEventBubbling: true,
      getActions: (params) => [
        <IconButton
          className="link-tool"
          onClick={() => viewHandleOpen(params)}
        >
          <RemoveRedEyeIcon />
        </IconButton>,
        <IconButton
          className="link-tool"
        >
          <EditIcon />
        </IconButton>,
        <IconButton
          className="link-tool"
          
        >
          <DeleteIcon />
        </IconButton>,
      ],
    },
  ];

  var i = 0;
  const [validateCount, setValidateCount] = React.useState(1);
  const [rows, setRows] = React.useState([]);

  const StepperContaner = (step, index) => {
    console.log('step', step);
    console.log('index', index);
    if (index === 0) {
      return

      <Step key={step.label}>
        <StepLabel>
          {step.label}
        </StepLabel>
        <StepContent>
          <Typography className="Step-Wrap-box">
            {step.description}
          </Typography>
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
      </Step>


    }
    else if (index === 1) {
      return

      <Step key={step.label}>
        <StepLabel>
          {step.label}
        </StepLabel>
        <StepContent>
          <Typography className="Step-Wrap-box">
            {step.description}
          </Typography>
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
      </Step>


    }
    else {
      return

      <Step key={step.label}>
        <StepLabel>
          {step.label}
        </StepLabel>
        <StepContent>
          <Typography className="Step-Wrap-box">
            {step.description}
          </Typography>
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
      </Step>


    }
  }


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




                            <div className="text-center">
                              <a href="#" class="btn">Download Manipulate and Delivery</a>
                              <a href="#" class="btn">Download Delivery</a>
                            </div>

                            <div className="two-col-form">
                              <TextField className="form-col"
                                id="outlined-name"
                                label="Job Name"

                              />
                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Tag(a)"

                              />

                              <TextField className="form-col"
                                id="outlined-name"
                                label="Application(s)"

                              />


                              <FormControl className="form-col">
                                <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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
                                <Button className="btn"
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
                            <Typography className="Step-Wrap-box">


                              <h3>Job Name: aaa</h3>

                            </Typography>


                            <div class="two-col-form">
                              <div className="form-col">Frequency</div>
                              <div className="form-col">Tag</div>

                              <FormControl className="form-col">
                                <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label=""

                              />

                            </div>

                            <h3 className="text-center"> File Expected Receive Date </h3>

                            <div class="two-col-form">
                              <div className="form-col">
                                As At

                                For Instance:
                                If File Expected Effective(Report) Date: 22/04/2017, and As At(delta)= -3, then Expected Receive Date will be 25/04/2018



                              </div>
                              <div className="form-col">
                                From To

                                Enter Range  0 Days

                              </div>
                            </div>




                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button className="btn"
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
                                <InputLabel htmlFor="grouped-native-select">Connection</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Directory Path"

                              />

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="File Name"

                              />

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Sent To"

                              />

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Subject Header"

                              />


                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Received From"

                              />

                            </div>




                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button className="btn"
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
                                <InputLabel htmlFor="grouped-native-select">CSV Delimiter</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="File Password(if any)"

                              />



                            </div>




                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button className="btn"
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


                             
                              <Button
                                className="box-btn"
                                variant="contained"
                                sx={{ marginLeft: 3 }}
                                size="small"
                                onClick={viewHandleOpen}
                              >
                                <AddIcon /> Add New Rule
                              </Button>

                            </Typography>



                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                <Grid item xs={10}></Grid>
                                <Grid item xs={2}>
                                <div className="search-box">
                                    <TextField
                                      style={{ backgroundColor: 'white', height: '1em' }}
                                      id="filled-basic"
                                      placeholder="Search"
                                      variant="filled"
                                    />
                                    <SearchIcon style={{ textAlign: 'right' }} />
                                  </div>
                                </Grid>
                              </Grid>
                            </Box>



                            <div class="two-col-form">

                              <Grid item xs={12}>
                                <Grid container spacing={2}>
                                  <Grid item xs={12}>
                                    {<MuiDataGrid rows={rows} columns={columns} />}
                                  </Grid>
                                </Grid>
                              </Grid>


                            </div>




                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button className="btn"
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
                                <InputLabel htmlFor="grouped-native-select">Connection</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="333Directory Path"

                              />

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="File Name"

                              />

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Sent To"

                              />

                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Subject Header"

                              />


                              <TextField className="form-col"
                                id="outlined-uncontrolled"
                                label="Received From"

                              />

                            </div>











                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button className="btn"
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
                      All steps completed - you&apos; re finished
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
      </div >
      <MatDialog
        open={viewOpen}
        title="File Reading And Identification"
        handleClose={viewHandleClose}
      >
        

        <FormControl  className="text-row">
        <InputLabel htmlFor="grouped-native-select">Based Value</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
        <option aria-label="None" value="" />
        <optgroup label="Category 1">
          <option value={1}>Select</option>
          <option value={2}>Select</option>
        </optgroup>
        
        </Select>
        </FormControl>

        <FormControl  className="text-row">
        <InputLabel htmlFor="grouped-native-select">CheckIn File Content</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
        <option aria-label="None" value="" />
        <optgroup label="Category 1">
          <option value={1}>Select</option>
          <option value={2}>Select</option>
        </optgroup>
        
        </Select>
        </FormControl>

        <FormControl  className="text-row">
        <InputLabel htmlFor="grouped-native-select">Cell Or Header</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
        <option aria-label="None" value="" />
        <optgroup label="Category 1">
          <option value={1}>Select</option>
          <option value={2}>Select</option>
        </optgroup>
        
        </Select>
        </FormControl>

        <FormControl  className="text-row">
        <InputLabel htmlFor="grouped-native-select">CellOrHeaderValue</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
        <option aria-label="None" value="" />
        <optgroup label="Category 1">
          <option value={1}>Select</option>
          <option value={2}>Select</option>
        </optgroup>
        
        </Select>
        </FormControl>


        <FormControl  className="text-row">
        <InputLabel htmlFor="grouped-native-select">Operation</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
        <option aria-label="None" value="" />
        <optgroup label="Category 1">
          <option value={1}>Select</option>
          <option value={2}>Select</option>
        </optgroup>
        
        </Select>
        </FormControl>

        <FormControl  className="text-row">
        <InputLabel htmlFor="grouped-native-select">SearchValue</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
        <option aria-label="None" value="" />
        <optgroup label="Category 1">
          <option value={1}>Select</option>
          <option value={2}>Select</option>
        </optgroup>
        
        </Select>
        </FormControl>


        <div class="MuiBox-root css-gg4vpm">
          <button class="box-btn-cancel " type="button">Cancel </button>
          <button class="btn" type="button">Save changes</button>
          
        </div>


      </MatDialog>

    </Box>





  );
};

export default Home;
