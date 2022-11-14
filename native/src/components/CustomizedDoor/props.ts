import {ContentState} from 'src/store/content/reducer';
import {DoorCustomizations} from 'src/store/door/reducer';

// Any shared props between web / native can go in a props.ts file

export interface CustomizedDoorProps {
  baseDoor: string;
  contentState: ContentState;
  currentDoorCustomizations: DoorCustomizations;
  decorations: string[];
  doorColor: string;
}
