import {createSlice} from '@reduxjs/toolkit';
import {cacheContent} from './actions';
import {logout} from '../authentication/actions';

export interface ContentState {
  [url: string]: string;
}
const initialState: ContentState = {};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: {
    [cacheContent.SUCCESS]: (state, {payload: {key, url}}) => {
      state[key] = url;
    },
    [logout.SUCCESS]: () => initialState,
  },
});

export default contentSlice.reducer;
