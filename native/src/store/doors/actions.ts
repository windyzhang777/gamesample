import {createAction} from 'redux-saga-actions';
import {createAction as simpleAction} from 'redux-actions';

export const getNearbyDoors = createAction('DOORS/GET_NEARBY_DOORS');
export const setLocation = simpleAction('SET_LOCATION');
