// const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const REACT_APP_OKTA_DOMAIN = process.env.REACT_APP_OKTA_DOMAIN;
// const REACT_APP_PORT = process.env.REACT_APP_PORT;
const REACT_APP_CLIENT_ID = '0oa3g808tcIkajENV5d7';
const REACT_APP_OKTA_DOMAIN = 'dev-07686220.okta.com';
const REACT_APP_PORT = 3000;

export const oktaConfig = {
  clientId: `${REACT_APP_CLIENT_ID}`,
  issuer: `https://${REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `http://localhost:${REACT_APP_PORT}/login/callback`, // this makes it so redirects to login if not logged in for secure routes
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: false,
};
