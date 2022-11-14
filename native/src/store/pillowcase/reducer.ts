import {createSlice} from '@reduxjs/toolkit';
import {login, logout} from '../authentication/actions';
import {addToTerAction, updatePillowcaseAction} from '../trick-or-treat/actions';

export interface Candy {
  id: string;
  count: number;
}

export interface PillowCase {
  name: string;
  id: string;
  candies?: Candy[];
}

export interface PillowCaseState {
  pillowcases: PillowCase[];
}

const initialState: PillowCaseState = {
  pillowcases: [],
};

const onSuccess = (state, {payload}) => ({
  ...state,
  pillowcases: (payload.InfoResultPayload.CharacterList || []).map(
    (character): PillowCase => ({
      name: character.CharacterName,
      id: character.CharacterId,
    }),
  ),
});

export const selectPillowcase = (state, id) =>
  state.pillowcases.find((pillowcase: PillowCase) => pillowcase.id === id) || {};

export const pillowcase = createSlice({
  name: 'pillowcase',
  initialState,
  reducers: {},
  extraReducers: {
    [login.SUCCESS]: onSuccess,
    [addToTerAction.SUCCESS]: (state, {payload}) => {
      state.pillowcases.push({
        name: payload.CharacterName,
        id: payload.CharacterId,
      });
    },
    [updatePillowcaseAction.SUCCESS]: (state, {payload: {CharacterId, Inventory}}) => {
      selectPillowcase(state, CharacterId).candies = Inventory.map(
        (item): Candy => ({
          id: item.ItemId,
          count: item.RemainingUses || 1,
        }),
      );
    },
    [logout.SUCCESS]: () => initialState,
  },
});

export default pillowcase.reducer;
