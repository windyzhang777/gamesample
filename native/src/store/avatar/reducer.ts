import {createSlice} from '@reduxjs/toolkit';
import {login, logout} from 'src/store/authentication/actions';
import {getAvatarsConfigurationFlowAndAssets, updateAvatar, saveAvatar} from './actions';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';

export interface AvatarCustomizations {
  avatar: string;
  eyes: string;
  nose: string;
  head: string;
  mouth: string;
  skinColor: string;
  clothesOneColor: string;
  clothesTwoColor: string;
  costume: string;
  sound: string;
  CharacterId?: string;
}

export interface AvatarState {
  lastSavedAvatarCustomizations: AvatarCustomizations;
  currentAvatarCustomizations: AvatarCustomizations;
  avatarCustomizationFlowConfig: CustomizationFlowSection[];
  isSaving: boolean;
  isSaved: boolean;
}

const initialAvatarCustomizations: AvatarCustomizations = {
  avatar: 'frankenstein',
  eyes: 'eyes-two',
  nose: 'nose-two',
  head: 'head-two',
  mouth: 'mouth-one',
  skinColor: '#9ACD32',
  clothesOneColor: '#FFA500',
  clothesTwoColor: '#800080',
  costume: null,
  sound: 's1',
};

const initialState: AvatarState = {
  lastSavedAvatarCustomizations: {
    ...initialAvatarCustomizations,
  },
  currentAvatarCustomizations: {
    ...initialAvatarCustomizations,
  },
  // hard coded for now but probably will be coming from playfab?
  avatarCustomizationFlowConfig: [],
  isSaving: false,
  isSaved: false,
};

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setCurrentAvatarCustomizations: (state: AvatarState, {payload}: any): AvatarState => {
      return {
        ...state,
        currentAvatarCustomizations: {...payload},
      };
    },
    resetSaved: (state): AvatarState => {
      return {
        ...state,
        isSaving: false,
        isSaved: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.SUCCESS, (): AvatarState => initialState);
    builder.addCase(
      login.SUCCESS,
      (state, {payload}: any): AvatarState => {
        const {userData} = payload;
        if ('savedAvatar' in userData) {
          const lastSavedAvatarCustomizations = {
            ...initialAvatarCustomizations,
            ...JSON.parse(userData.savedAvatar.Value),
          };
          return {
            ...state,
            lastSavedAvatarCustomizations: {
              ...lastSavedAvatarCustomizations,
            },
            currentAvatarCustomizations: {
              ...lastSavedAvatarCustomizations,
            },
          };
        }
        return state;
      },
    );
    builder.addCase(
      getAvatarsConfigurationFlowAndAssets.SUCCESS,
      (state, {payload}: any): AvatarState => ({
        ...state,
        avatarCustomizationFlowConfig: [...payload],
      }),
    );
    builder.addCase(
      saveAvatar.REQUEST,
      (state): AvatarState => ({...state, isSaving: true, isSaved: false}),
    );
    builder.addCase(
      saveAvatar.SUCCESS,
      (state, {payload}: any): AvatarState => ({
        ...state,
        lastSavedAvatarCustomizations: {...payload},
        isSaving: false,
        isSaved: true,
      }),
    );
    builder.addCase(
      saveAvatar.FAILURE,
      (state): AvatarState => ({...state, isSaving: false, isSaved: false}),
    );
    builder.addCase(
      updateAvatar.REQUEST,
      (state, {payload}): AvatarState => ({
        ...state,
        currentAvatarCustomizations: {
          ...state.currentAvatarCustomizations,
          ...payload,
        },
        isSaving: false,
        isSaved: false,
      }),
    );
  },
});

export default avatarSlice.reducer;
