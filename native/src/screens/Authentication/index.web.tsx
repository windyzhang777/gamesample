import React from 'react';
import AzureAD, {AuthenticationState} from 'react-aad-msal';
import {authProvider} from 'src/store/authentication/authProvider';
import Login from './Login';
import {AuthenticationHandlerProps} from './AuthenticationHandlerProps';

const AuthenticationHOC = ({store, children}: AuthenticationHandlerProps) => (
  <AzureAD provider={authProvider} reduxStore={store} forceLogin={false}>
    {({
      login,
      logout,
      authenticationState,
    }: {
      login: () => void;
      logout: () => void;
      authenticationState: AuthenticationState;
    }) => {
      switch (authenticationState) {
        case AuthenticationState.Authenticated: {
          return children;
        }
        case AuthenticationState.InProgress: {
          return <div>Logging in...</div>;
        }
        case AuthenticationState.Unauthenticated: {
          return <Login login={login} />;
        }
      }
    }}
  </AzureAD>
);

export default AuthenticationHOC;
