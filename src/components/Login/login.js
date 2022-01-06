import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';
import logo from '../../images/logo.png';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const loginHandler = () =>
    oktaAuth.signInWithRedirect({ originalUri: '/TabMenu' });
  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <>
        
        <Box  className="login-wrap">
          {' '}
          
          <div style={{ marginBottom: '3em' }}></div>
          <Card>
            <CardContent className="login-box">
              <CardContent className="login-head">
                <img src={logo} alt="logo" />
                <h2>Sign UP</h2>
              </CardContent>
              <Button size="large" onClick={loginHandler} className="btn">
                <LockOpenIcon/>Login
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
