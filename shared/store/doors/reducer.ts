import {createSlice} from '@reduxjs/toolkit';
import {getNearbyDoors} from '../doors/actions';

export interface UserLocation {
  latitude: number;
  longitude: number;
  hasChanged?: boolean;
}

export interface DoorsState {
  tot: boolean;
  login: boolean;
  location?: UserLocation;
  nearbyDoors: [];
}

const initialState: DoorsState = {
  tot: false,
  login: false,
  location: {latitude: 0, longitude: 0},
  nearbyDoors: [],
};

export const doorSlice = createSlice({
  name: 'doors',
  initialState,
  reducers: {
    setLocation: (state, {payload: {location}}) => {
      return {
        ...state,
        location,
      };
    },
  },
  extraReducers: {
    [getNearbyDoors.SUCCESS]: (state, {payload}) => ({
      ...state,
      nearbyDoors: payload.nearbyDoors,
    }),
  },
});

export const {setLocation} = doorSlice.actions;

export default doorSlice.reducer;
