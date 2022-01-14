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

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
const Home = () => {
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
      return (
        <Step key={step.label}>
          <StepLabel>{step.label}</StepLabel>
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
      );
    }
    // if(index===1){
    //   return
    //        (
    //     <Step key={step.label}>
    //     <StepLabel>
    //       {step.label}
    //     </StepLabel>
    //     <StepContent>
    //       <Typography className="Step-Wrap-box">
    //         {step.description}
    //       </Typography>
    //       <span>Second</span>
    //       <Box sx={{ mb: 2 }}>
    //         <div>
    //           <Button
    //             variant="contained"
    //             onClick={handleNext}
    //             sx={{ mt: 1, mr: 1 }}
    //           >
    //             {index === steps.length - 1 ? 'Finish' : 'Continue'}
    //           </Button>
    //           <Button
    //             disabled={index === 0}
    //             onClick={handleBack}
    //             sx={{ mt: 1, mr: 1 }}
    //           >
    //             Back
    //           </Button>
    //         </div>
    //       </Box>
    //     </StepContent>
    //   </Step>
    //        )

    // }
    // else
    // {
    //   return
    //       (
    //     <Step key={step.label}>
    //     <StepLabel>
    //       {step.label}
    //     </StepLabel>
    //     <StepContent>
    //       <Typography className="Step-Wrap-box">
    //         {step.description}
    //       </Typography>
    //       <span>Last</span>
    //       <Box sx={{ mb: 2 }}>
    //         <div>
    //           <Button
    //             variant="contained"
    //             onClick={handleNext}
    //             sx={{ mt: 1, mr: 1 }}
    //           >
    //             {index === steps.length - 1 ? 'Finish' : 'Continue'}
    //           </Button>
    //           <Button
    //             disabled={index === 0}
    //             onClick={handleBack}
    //             sx={{ mt: 1, mr: 1 }}
    //           >
    //             Back
    //           </Button>
    //         </div>
    //       </Box>
    //     </StepContent>
    //   </Step>
    //       )

    // }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div class="content-box">
        <Box sx={{ flexGrow: 1, marginLeft: '6em' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => {
                    if (index === 0)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
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
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Continue'}
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
                      );
                    if (index === 1)
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
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
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Continue'}
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
                      );
                    else
                      return (
                        <Step key={step.label}>
                          <StepLabel>{step.label}</StepLabel>
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
                                  {index === steps.length - 1
                                    ? 'Finish'
                                    : 'Continue'}
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
