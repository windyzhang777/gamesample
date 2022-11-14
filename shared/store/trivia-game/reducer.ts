import {createSlice} from '@reduxjs/toolkit';
import {getGameData, updateScore} from './actions';
import {TriviaGameState} from '../../models/TriviaGame';

const initialState: TriviaGameState = {
  currentScore: 0,
  curDifficultyLevel: 'Difficulty1',
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
