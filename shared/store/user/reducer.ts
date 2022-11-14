import {createSlice} from '@reduxjs/toolkit';
import {logout, login, updateDisplayName} from '../authentication/actions';
import {LegalRequirements} from '../../containers/screens/AcceptTerms';

export interface Account {
  name: string;
  identifier: string;
}

export interface UserState {
  b2cId?: string;
  displayName?: string;
  account?: Account;
  sessionTicket?: string;
  isLoggingInToPlayfab: boolean;
  playfabId?: string;
}

const initialState: UserState = {
  b2cId: undefined,
  displayName: undefined,
  account: undefined,
  sessionTicket: undefined,
  isLoggingInToPlayfab: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInputs: (state, {payload: {displayName}}) => ({
      ...state,
      displayName: displayName,
    }),
    acceptLegalRequirements: (state, {payload}: {payload: ILegalRequirements}) => ({
      ...state,
      hasAcceptedTermsOfService: payload.hasAcceptedTermsOfService,
      isOverAgeLimit: payload.isOverAgeLimit,
    }),
    setDisplayName: (state, {payload}) => ({
      ...state,
      displayName: payload,
    }),
  },
  extraReducers: {
    AAD_INITIALIZING: (state) => ({
      ...state,
      isLoggingInToPlayfab: true,
    }),
    AAD_LOGIN_SUCCESS: (state, {payload}) => ({
      ...state,
      b2cId: payload.account.accountIdentifier,
      isLoggingInToPlayfab: true,
    }),
    [login.SUCCESS]: (state, {payload}) => ({
      ...state,
      displayName: payload.displayName,
      sessionTicket: payload.SessionTicket,
      isLoggingInToPlayfab: false,
      userData: payload.InfoResultPayload.UserData,
      playfabId: payload.PlayFabId,
    }),
    [logout.SUCCESS]: () => initialState,
    [login.FAILURE]: (state) => ({
      ...state,
      isLoggingInToPlayfab: false,
    }),
    [updateDisplayName.SUCCESS]: (state, {payload}) => ({
      ...state,
      displayName: payload,
    }),
  },
});

export const {acceptLegalRequirements, setInputs, setDisplayName} = userSlice.actions;

export default userSlice.reducer;
