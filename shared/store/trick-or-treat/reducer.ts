import {createSlice} from '@reduxjs/toolkit';
import {ToterState, ToTerType} from './types';
import {addToTerAction} from './actions';

const initialState: ToterState = {
  currentDoorId: undefined,
  toterItems: [],
};

export const toterList = createSlice({
  name: 'toter-list',
  initialState,
  reducers: {},
  extraReducers: {
    [addToTerAction.SUCCESS]: (state, {payload}: {payload: ToTerType}) => {
      state.toterItems.push(payload);
    },
  },
});

export default toterList.reducer;
