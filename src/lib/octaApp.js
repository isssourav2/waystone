import React from 'react';
import {
  Switch,
  BrowserRouter as OldRouter,
  Route as OldRoute,
  useHistory,
} from 'react-router-dom';
import { Login } from '../components';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaConfig } from './oktaConfig';
import Profile from '../Profile';
const CALLBACK_PATH = '/login/callback';
const oktaAuth = new OktaAuth(oktaConfig);

const OctaApp = () => {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    debugger;
    console.log(history);
    history.push(originalUri);
    //history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <OldRoute path="/" exact component={Login} />
        <OldRoute path={CALLBACK_PATH} exact component={LoginCallback} />
        <SecureRoute path="/profile" component={Profile} />
      </Switch>
    </Security>
  );
};

export default OctaApp;
