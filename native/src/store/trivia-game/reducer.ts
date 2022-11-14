import {createSlice} from '@reduxjs/toolkit';
import {getGameData} from './actions';
import {TriviaGameState} from 'src/models/TriviaGame';

const initialState: TriviaGameState = {
  gameData: {},
  error: null,
};

export const triviaGame = createSlice({
  name: 'triviaGame',
  initialState,
  reducers: {},
  extraReducers: {
    [getGameData.SUCCESS]: (state, {payload}) => ({
      ...state,
      gameData: payload,
    }),
    [getGameData.FAIL]: (state, {payload}) => ({
      ...state,
      error: payload,
    }),
  },
});

export default triviaGame.reducer;
