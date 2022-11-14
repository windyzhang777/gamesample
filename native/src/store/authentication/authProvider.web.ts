// authProvider.js
import {MsalAuthProvider, LoginType} from 'react-aad-msal';
import {Configuration, Logger} from 'msal';

// Msal Configurations
const config: Configuration = {
  auth: {
    authority:
      'https://bounteousmars.b2clogin.com/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
    clientId: '22bb031f-c846-42cc-9da2-f06839debe60',
    validateAuthority: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
  system: {
    logger: new Logger((level, message) => console.log(level, message)),
  },
};

// Authentication Parameters
export const authenticationParameters = {
  scopes: ['openid 22bb031f-c846-42cc-9da2-f06839debe60 offline_access'],
  forceRefresh: true,
};

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin,
};

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options);
