import {createAction} from 'redux-saga-actions';

// Updates the avatar in redux state
export const updateAvatar = createAction('AVATAR/UPDATE_AVATAR');
// Sends the actual avatar data to playfab
export const saveAvatar = createAction('AVATAR/SAVE_AVATAR');
// Retrieves avatar data and configuration flow from  playfab
export const getAvatarsConfigurationFlow = createAction('AVATAR/GET_CONFIG_FLOW');
// Retrieves avatar data from play fab, kicks off requests for all images in content
export const getAvatarAssets = createAction('AVATAR/GET_AVATAR_ASSETS');

export const getAvatarsConfigurationFlowAndAssets = createAction('AVATAR/GET_CONFIG_FLOW');
