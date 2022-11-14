import {createSlice} from '@reduxjs/toolkit';
import {ToterState, ToTerType} from './types';
import {addToTerAction} from './actions';
import {getPlayFabToTers} from './actions';
import {login} from '../authentication/actions';

const initialState: ToterState = {
  currentDoorId: undefined,
  toterItems: [],
};

export const toterList = createSlice({
  name: 'toter-list',
  initialState,
  reducers: {},
  extraReducers: {
    [login.SUCCESS]: (state, {payload}) => {
      return {
        ...state,
        toterItems: payload.InfoResultPayload.CharacterList.map((value: any) => ({
          toterId: value.CharacterId,
          toterName: value.CharacterName,
        })),
      };
    },
    [addToTerAction.SUCCESS]: (state, {payload}: {payload: ToTerType}) => {
      return {
        ...state,
        toterItems: [...state.toterItems, payload],
      };
    },
    [getPlayFabToTers.SUCCESS]: (state, {payload}: {payload: ToTerType}) => {
      return {
        ...state,
        toterItems: payload,
      };
    },
  },
});

export default toterList.reducer;
