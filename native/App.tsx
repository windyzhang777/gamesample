import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NativeRouter, Switch} from 'react-router-native';

import {Provider, useSelector, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store';

import Home from './src/components/screens/Home';
import ProtectedRoute from './src/components/ProtectedRoute';
import AuthenticationHandler from 'shared/containers/AuthenticationHandler';

const App: () => React$Node = () => {
  // The default react-native init stuff

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AuthenticationHandler useEffect={useEffect} useSelector={useSelector}>
          <NativeRouter>
            <Switch>
              <SafeAreaView>
                <ProtectedRoute
                  path="/"
                  component={() => <Home useSelector={useSelector} useDispatch={useDispatch} />}
                />
              </SafeAreaView>
            </Switch>
          </NativeRouter>
        </AuthenticationHandler>
      </PersistGate>
    </Provider>
  );
};

export default App;
