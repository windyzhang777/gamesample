import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import authSagas from './authentication/sagas';
import {sharedReducers, sharedSagas, RootStoreState} from 'shared/store';
import FSStorage from 'redux-persist-fs-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: FSStorage(),
  stateReconciler: autoMergeLevel2,
  blacklist: ['navigationSystem', 'toterList'],
};

const persistedReducer = persistReducer<RootStoreState, any>(
  persistConfig,
  combineReducers(sharedReducers),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);

sharedSagas.map(sagaMiddleware.run);

[authSagas].map(sagaMiddleware.run);

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;
