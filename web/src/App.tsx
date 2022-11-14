import React, {useEffect} from 'react';

import {Provider, useSelector, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './store';

import Home from './components/screens/Home';
import AzureAD, {AuthenticationState} from 'react-aad-msal';
import {authProvider} from './store/authentication/authProvider';

import './App.css';
import AuthenticationHandler from 'shared/containers/AuthenticationHandler';

const App = () => {
  // The default react-native init stuff
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AuthenticationHandler useEffect={useEffect} useSelector={useSelector}>
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
                  return (
                    <>
                      {/* Navigation system probably needs to go here.. */}
                      <Home useSelector={useSelector} useDispatch={useDispatch} logout={logout} />
                    </>
                  );
                }
                case AuthenticationState.InProgress: {
                  return <div>Logging in...</div>;
                }
                case AuthenticationState.Unauthenticated: {
                  return <Home useSelector={useSelector} useDispatch={useDispatch} login={login} />;
                }
              }
            }}
          </AzureAD>
        </AuthenticationHandler>
      </PersistGate>
    </Provider>
  );
};

export default App;
