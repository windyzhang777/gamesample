import {createAction} from 'redux-saga-actions';

// create action
export const login = createAction('USER/LOGIN');
export const getAccountInfo = createAction('USER/ACCOUNT');
export const refreshLogin = createAction('USER/REFRESH_LOGIN');
export const logout = createAction('USER/LOGOUT');
export const loadPlayerData = createAction('USER/LOAD_PLAYER_DATA');
export const updateDisplayName = createAction('USER/UPDATE_DISPLAY_NAME');
