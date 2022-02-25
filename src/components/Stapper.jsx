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
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FixedTags } from './';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ConnectionSetup from './Stepper/ConnectionSetup';
import FrequencySetup from './Stepper/FrequencySetup';
import RiskCoreTemplate from './Stepper/RiskCoreTemplate';
import Delimiter from './Stepper/Delimiter';
import Step4 from './Stepper/Step4';
import Step5 from './Stepper/Step5';
import Step6 from './Stepper/Step6';
import Step7 from './Stepper/Step7';
import Step8 from './Stepper/Step8';
import {
  FileProcessingValidation,
  Post,
  PostFile,
  DownloaDable,
  FundScheduler,
  FileFetch,
  FundSchedulerSubmit,
  FileFetchSubmit,
  FProcessingTagManipulationHandlerSubmit,
  FProcessingDMSApplicationSubmit,
  FileProcessingTagManipulation,
  FileProcessingDMSApplication,
  FileProcessingTagManipulationArray,
  FileProcessingDMSApplicationArray,
} from './Stepper/Service/FileProcessingService';
import {
  SetJobNameLocalStorage,
  SetFileProcessingTemplateLocalStorage,
  GetFileProcessingTemplateLocalStorage,
} from '../components/Stepper/Service/localstore';
const steps = [
  {
    label: 'Step 1 Job',
    description: ``,
  },
  {
    label: 'Step 2 Fund Scheduler',
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
    label: 'Step5 File Reading And Identification',
    description: ``,
  },
  {
    label: 'Step6 File Manipulation',
    description: ``,
  },
  {
    label: 'Step7 Advance File Manipulation',
    description: ``,
  },
  {
    label: 'Step8 File Validation',
    description: ``,
  },
  {
    label: 'Step9 File Delivery',
    description: ``,
  },
];
function PaperComponent(props) {
  return <Paper {...props} />;
}
const Stapper = () => {
  //Tags & Application specific
  /*****msg dialog*****/
  const [msg, setMsg] = React.useState('');
  const [msgOpen, setMsgOpen] = React.useState(false);
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const msgDialog = (param) => {
    debugger;
    setMsg(param);
    setMsgOpen(true);
  };
  const dialogHandleClose = () => {
    debugger;
    // setdialogOpen(false);
    setMsgOpen(false);
  };

  /*****msg dialog*****/
  const [activeStep, setActiveStep] = React.useState(0);
  //First Step
  const FirstHandleNext = () => {
    //Save Method
    if (FileProcessingValidation(PostFile)) {
      Post(PostFile);
      SetFileProcessingTemplateLocalStorage(PostFile.id);
      FileProcessingTagManipulationArray.map((v) => {
        FileProcessingTagManipulation.fileProcessingTemplateId = PostFile.id;
        FileProcessingTagManipulation.tagId = v;
        FProcessingTagManipulationHandlerSubmit(FileProcessingTagManipulation);
      });
      FileProcessingDMSApplicationArray.map((v) => {
        FileProcessingDMSApplication.fileProcessingTemplateId = PostFile.id;
        FileProcessingDMSApplication.dmsApplicationId = v;
        FProcessingDMSApplicationSubmit(FileProcessingDMSApplication);
      });
    }
    handleNext();
  };

  const SecondHandleNext = () => {
    //Save Method
    FundScheduler.fileProcessingTemplateId =
      GetFileProcessingTemplateLocalStorage();
    FundSchedulerSubmit(FundScheduler);
    handleNext();
  };

  const handleConnectionNext = () => {
    FileFetch.fileProcessingTemplateId =
      GetFileProcessingTemplateLocalStorage();
    FileFetchSubmit(FileFetch);
    handleNext();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  if (activeStep == 1) {
    if (!FileProcessingValidation(PostFile)) {
      handleBack();
      msgDialog('please fill all validation before procced!! \n');
    }
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div class="content-box no-space">
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
                            <RiskCoreTemplate />
                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={FirstHandleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                {/* <Button
                                  disabled={index === 0}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Previous
                                </Button> */}
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
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            <FrequencySetup />

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={SecondHandleNext}
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
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            {/* connection */}
                            <ConnectionSetup />
                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  className="btn"
                                  variant="contained"
                                  onClick={handleConnectionNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Save And Next'}
                                </Button>
                                <Button
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
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            <Delimiter />

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
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            <Step4 />
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
                    if (index === 5)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            <Step5 />
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

                    if (index === 6)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            <Step6 />
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

                    if (index === 7)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            <Step7 />
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

                    if (index === 8)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
                          <StepContent>
                            <Typography className="Step-Wrap-box">
                              <h3>
                                Job Name: {PostFile.fileProcessingTemplateName}
                              </h3>
                            </Typography>

                            <Step8 />
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
      <Dialog
        open={msgOpen}
        onClose={dialogHandleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Message
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{msg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={dialogHandleClose} className="box-btn">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Stapper;
