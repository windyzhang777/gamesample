import {createSlice} from '@reduxjs/toolkit';
import {buyCandyAction, updateCandyCount} from './actions';
import {login, logout} from '../authentication/actions';

export interface CandyBowlState {
  candy: number;
}

const initialState: CandyBowlState = {
  candy: 0,
};

export const candyBowl = createSlice({
  name: 'candyBowl',
  initialState,
  reducers: {},
  extraReducers: {
    [login.SUCCESS]: (state, {payload}) => ({
      candy: payload.InfoResultPayload.UserVirtualCurrency.VC,
    }),
    [logout.SUCCESS]: () => initialState,
    [buyCandyAction.SUCCESS]: (state, {payload}) => ({
      ...state,
      candy: payload.Balance,
    }),
    [updateCandyCount.SUCCESS]: (state, {payload}) => ({
      ...state,
      candy: payload.VirtualCurrency.VC,
    }),
  },
});

export default candyBowl.reducer;
