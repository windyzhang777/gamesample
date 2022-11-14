import {ContentState} from './reducer';
import {get} from 'src/utils/object';

// Keys - used to search up the path in the reducer slice like door.something
const contentKey = 'content';

// Selectors
export const contentSelector = (state): ContentState => get(state, `${contentKey}`, {});
