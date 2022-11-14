//  reducers
import candyBowl, {CandyBowlState} from './candy-bowl/reducer';
import content, {ContentState} from './content/reducer';
import door, {DoorState} from './door/reducer';
import doors, {DoorsState} from './doors/reducer';
import avatar, {AvatarState} from './avatar/reducer';
import loading from './loading/reducer';
import pillowcase, {PillowCaseState} from './pillowcase/reducer';
import navigationSystem from './navigation-system/reducer';
import toterList from './trick-or-treat/reducer';
import userReducer, {UserState} from './user/reducer';
import triviaGame from './trivia-game/reducer';

//  sagas
import {actionsWatcherSaga} from 'redux-saga-actions';
import authSagas from './authentication/sagas';
import candyBowlSagas from './candy-bowl/sagas';
import contentSaga from './content/sagas';
import doorSaga from './door/sagas';
import doorsSaga from './doors/sagas';
import avatarSaga from './avatar/sagas';
import totSagas from './trick-or-treat/sagas';
import triviaGameSaga from './trivia-game/sagas';

//  types
import {NavigationMenuType} from './navigation-system/types';
import {ToterState} from './trick-or-treat/types';
import {TriviaGameState} from '../models/TriviaGame';

export interface RootStoreState {
  candyBowl: CandyBowlState;
  content: ContentState;
  door: DoorState;
  doors: DoorsState;
  avatar: AvatarState;
  user: UserState;
  pillowcase: PillowCaseState;
  loading: {tot: boolean; login: boolean};
  navigationSystem: NavigationMenuType;
  triviaGame: TriviaGameState;
  toterList: ToterState;
}

export const sharedReducers = {
  candyBowl,
  content,
  door,
  doors,
  avatar,
  loading,
  navigationSystem,
  pillowcase,
  user: userReducer,
  toterList,
  triviaGame,
};

export const sharedSagas = [
  actionsWatcherSaga,
  authSagas,
  candyBowlSagas,
  contentSaga,
  doorSaga,
  doorsSaga,
  avatarSaga,
  totSagas,
  triviaGameSaga,
];
