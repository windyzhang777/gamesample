import {createAction} from 'redux-saga-actions';

// Updates the avatar in redux state
export const updateAvatar = createAction('AVATAR/UPDATE_AVATAR');
// Sends the actual avatar data to playfab
export const saveAvatar = createAction('AVATAR/SAVE_AVATAR');
// Retrieves avatar data from play fab, kicks off requests for all images in content
export const getAvatarsAssets = createAction('AVATAR/GET_AVATARS_ASSETS');
export const getAvatarsConfigurationFlow = createAction('AVATAR/GET_CONFIG_FLOW');

// Updates the selected monster for avatar slice in redux store
export const updateSelectedMonsterId = createAction('AVATAR/UPDATE_SELECTED_MONSTER_ID');
// Updates the selected nose for avatar slice in redux store
export const updateSelectedNoseId = createAction('AVATAR/UPDATE_SELECTED_NOSE_ID');
// Updates the selected mouth for avatar slice in redux store
export const updateSelectedMouthId = createAction('AVATAR/UPDATE_SELECTED_MOUTH_ID');
// Updates the selected eye for avatar slice in redux store
export const updateSelectedEyeId = createAction('AVATAR/UPDATE_SELECTED_EYE_ID');
// Updates the selected head for avatar slice in redux store
export const updateSelectedHeadId = createAction('AVATAR/UPDATE_SELECTED_HEAD_ID');
// Updates the selected skin color for avatar slice in redux store
export const updateSelectedSkinColor = createAction('AVATAR/UPDATE_SELECTED_SKIN_COLOR');
// Updates the selected skin color for avatar slice in redux store
export const updateSelectedClothesOneColor = createAction(
  'AVATAR/UPDATE_SELECTED_CLOTHES_ONE_COLOR',
);
// Updates the selected skin color for avatar slice in redux store
export const updateSelectedClothesTwoColor = createAction(
  'AVATAR/UPDATE_SELECTED_CLOTHES_TWO_COLOR',
);
// Retrieves avatar data from play fab, kicks off requests for all images in content
export const getAvatarAssets = createAction('AVATAR/GET_AVATAR_ASSETS');

export const getAvatarsConfigurationFlowAndAssets = createAction('AVATAR/GET_CONFIG_FLOW');
