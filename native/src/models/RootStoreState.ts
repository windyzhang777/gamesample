import {AvatarState} from 'src/store/avatar/reducer';
import {CandyBowlState} from 'src/store/candy-bowl/reducer';
import {ContentState} from 'src/store/content/reducer';
import {DoorState} from 'src/store/door/reducer';
import {DoorsState} from 'src/store/doors/reducer';
import {UserState} from 'src/store/user/reducer';
import {PillowCaseState} from 'src/store/pillowcase/reducer';
import {NavigationMenuType} from 'src/store/navigation-system/types';
import {ToterState} from 'src/store/trick-or-treat/types';
import {TriviaGameState} from 'src/models/TriviaGame';

export interface RootStoreState {
  avatar: AvatarState;
  candyBowl: CandyBowlState;
  content: ContentState;
  door: DoorState;
  doors: DoorsState;
  user: UserState;
  pillowcase: PillowCaseState;
  loading: {tot: boolean; login: boolean};
  navigationSystem: NavigationMenuType;
  triviaGame: TriviaGameState;
  toterList: ToterState;
}
