import {createAction} from 'redux-saga-actions';

// Updates the door in redux state
export const updateDoor = createAction('DOOR/UPDATE_DOOR');
// Sends the actual door data to playfab
export const saveDoor = createAction('DOOR/SAVE_DOOR');
// Retrieves door data from play fab, kicks off requests for all images in content
export const getDoorsAssets = createAction('DOOR/GET_DOORS_ASSETS');
export const getDoorsConfigurationFlowAndAssets = createAction('DOOR/GET_CONFIG_FLOW');
