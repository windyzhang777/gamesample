import {createSlice} from '@reduxjs/toolkit';
import {logout} from '../authentication/actions';
import * as avatarActions from './actions';
import {CustomizationFlowSection} from '../../containers/CustomizationFlow';

export interface AvatarCustomizations {
  avatar: string;
  eyes: string;
  nose: string;
  head: string;
  mouth: string;
  skinColor: string;
  clothesOneColor: string;
  clothesTwoColor: string;
  sound: string;
}

export interface AvatarState {
  isSaving: boolean;
  currentAvatarCustomizations: AvatarCustomizations;
  avatarCustomizationFlowConfig: CustomizationFlowSection[];
}

const initialAvatarCustomizations: AvatarCustomizations = {
  avatar: 'frankenstein',
  eyes: 'eyes-two',
  nose: 'nose-two',
  head: 'head-one',
  mouth: 'mouth-one',
  skinColor: '#9ACD32',
  clothesOneColor: '#FFA500',
  clothesTwoColor: '#800080',
  sound: '',
};

const initialState: AvatarState = {
  isSaving: false,
  currentAvatarCustomizations: {
    ...initialAvatarCustomizations,
  },
  // hard coded for now but probably will be coming from playfab?
  avatarCustomizationFlowConfig: [],
};

export const contentSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setCurrentAvatarCustomizations: (state: AvatarState, {payload}): AvatarState => {
      return {
        ...state,
        currentAvatarCustomizations: {...payload},
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      avatarActions.getAvatarsConfigurationFlowAndAssets.SUCCESS,
      (state, {payload}): AvatarState => {
        return {
          ...state,
          avatarCustomizationFlowConfig: payload,
        };
      },
    );
    builder.addCase(logout.SUCCESS, () => initialState);
    builder.addCase(
      avatarActions.getAvatarAssets.SUCCESS,
      (state, {payload}: {payload: Record<string, any>}) => {
        return {
          ...state,
          avatar: [...payload.avatar],
          eyes: [...payload.eyes],
          head: [...payload.head],
          mouth: [...payload.mouth],
          nose: [...payload.nose],
        };
      },
    );
    builder.addMatcher(
      (action) => action.type.includes('AVATAR/UPDATE'),
      (state, {payload}: {payload: Record<string, any>}) => {
        return {
          ...state,
          currentAvatarCustomizations: {
            ...state.currentAvatarCustomizations,
            ...payload,
          },
        };
      },
    );
  },
});

export default contentSlice.reducer;
