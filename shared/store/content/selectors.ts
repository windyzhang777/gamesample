import {ContentState} from './reducer';
import {get} from 'shared/utils/object';

// Keys - used to search up the path in the reducer slice like door.something
const contentKey = 'content';

// Selectors
export const contentSelector: any = (state) => get(state, `${contentKey}`, {});
