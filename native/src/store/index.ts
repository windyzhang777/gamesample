//  reducers
import avatar from './avatar/reducer';
import candyBowl from './candy-bowl/reducer';
import content from './content/reducer';
import door from './door/reducer';
import doors from './doors/reducer';
import loading from './loading/reducer';
import pillowcase from './pillowcase/reducer';
import navigationSystem from './navigation-system/reducer';
import toterList from './trick-or-treat/reducer';
import userReducer from './user/reducer';
import triviaGame from './trivia-game/reducer';

//  sagas
import {actionsWatcherSaga} from 'redux-saga-actions';
import authSagas from './authentication/sagas';
import authSagasPerPlatform from './authentication/platform';
import avatarSaga from './avatar/sagas';
import candyBowlSagas from './candy-bowl/sagas';
import contentSaga from './content/sagas';
import doorSaga from './door/sagas';
import doorsSaga from './doors/sagas';
import totSagas from './trick-or-treat/sagas';
import triviaGameSaga from './trivia-game/sagas';

// redux
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import shoppingCart from './shopping-cart/reducer';
import storage from './storage';
import {RootStoreState} from 'src/models/RootStoreState';

export const sharedReducers = {
  avatar,
  candyBowl,
  content,
  door,
  doors,
  loading,
  navigationSystem,
  pillowcase,
  user: userReducer,
  triviaGame,
  toterList,
  shoppingCart,
};

export const sharedSagas = [
  actionsWatcherSaga,
  authSagas,
  avatarSaga,
  candyBowlSagas,
  contentSaga,
  doorSaga,
  doorsSaga,
  totSagas,
  triviaGameSaga,
  authSagasPerPlatform,
];

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storage,
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

export {store, persistor};
export type RootState = ReturnType<typeof store.getState>;
