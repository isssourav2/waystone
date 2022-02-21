import React from 'react';
import {
  Switch,
  BrowserRouter as OldRouter,
  Route as OldRoute,
  useHistory,
} from 'react-router-dom';
import {
  TabMenu,
  Welcome,
  Settings,
  Login,
  Application,
  Notification,
  TabJobsheduling,
  TabDataSource,
} from '../components';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaConfig } from './oktaConfig';
import Profile from '../Profile';
import { Stepper } from '@mui/material';
import FileProcessing from '../components/Stepper/FileProcess/FileProcessing';
const CALLBACK_PATH = '/login/callback';
const oktaAuth = new OktaAuth(oktaConfig);

const OctaApp = () => {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    //history.push(originalUri);
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <OldRoute path="/" exact component={Login} />
        <OldRoute path="/help" component={Welcome} />
        {/* <OldRoute path="/Application" component={Application} /> */}
        <OldRoute path="/TabJobsheduling" component={TabJobsheduling} />
        {/* <Route path="/TabMenu" component={<TabMenu />} /> */}
        <OldRoute path="/Notification" component={Notification} />
        <OldRoute path="/Stepper" component={Stepper} />
        <OldRoute path="/Settings" component={Settings} />
        <OldRoute path="/DataSource" component={TabDataSource} />
        {/* <OldRoute path="/Connections" component={Connections} /> */}
        <OldRoute path="/TabMenu" component={TabMenu} />
        <OldRoute path={CALLBACK_PATH} exact component={LoginCallback} />
        <SecureRoute path="/profile" component={Profile} />
        <OldRoute path="/FileProcessing" component={FileProcessing} />
      </Switch>
    </Security>
  );
};

export default OctaApp;
