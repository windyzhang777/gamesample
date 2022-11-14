import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from 'src/store';

import {Navigation} from 'src/navigation';
import AuthenticationHandler from 'src/screens/Authentication/AuthenticationHandler';
import {PersistGate} from 'redux-persist/integration/react';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthenticationHandler store={store}>
          <Navigation />
        </AuthenticationHandler>
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent('treattown', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('treattown', {
    rootTag: document.getElementById('root'),
  });
}
