import {createSlice} from '@reduxjs/toolkit';
import {chooseTreatAction} from '../trick-or-treat/actions';
import {logout} from '../authentication/actions';

const initialState = {
  tot: false,
  login: false,
};

export const loadingSlice = createSlice({
  name: 'pillowcase',
  initialState,
  reducers: {},
  extraReducers: {
    [chooseTreatAction.REQUEST]: (state) => {
      state.tot = true;
    },
    [chooseTreatAction.SUCCESS]: (state) => {
      state.tot = false;
    },
    [logout.SUCCESS]: () => initialState,
  },
});

export default loadingSlice.reducer;
