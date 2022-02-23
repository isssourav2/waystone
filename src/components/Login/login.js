import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';
import logo from '../../images/logo2.png';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const loginHandler = () =>
    oktaAuth.signInWithRedirect({ originalUri: '/profile' });
  if (!authState) {
    return <div>Loading authentication...</div>;
  } else {
    return (
      <>
        <Box className="login-wrap">
          {' '}
          <div style={{ marginBottom: '3em' }}></div>
          <Card>
            <CardContent className="login-box">
              <CardContent className="login-head">
                <img src={logo} alt="logo" />
                <h2>Employee Single Sign-On via Okta</h2>
                <p>
                  {' '}
                  To access <strong>PPM</strong>, use your Active Directory
                  credentials.
                </p>
              </CardContent>
              <Button size="large" onClick={loginHandler} className="btn">
                <LockOpenIcon />
                Login
              </Button>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  }
};

export default Login;
