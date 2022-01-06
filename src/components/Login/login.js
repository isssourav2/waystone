import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';

const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const loginHandler = () =>
    oktaAuth.signInWithRedirect({ originalUri: '/TabMenu' });
  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            marginTop: '40vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {' '}
          <Typography>
            Coming together is a 'beginning' ,keeping together is 'progress'
            ,working together is 'Success' - Henry Ford
          </Typography>
          <div style={{ marginBottom: '3em' }}></div>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Button size="large" onClick={loginHandler}>
                Login
              </Button>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  } else {
    return <div>Authenticate</div>;
  }
};

export default Login;
