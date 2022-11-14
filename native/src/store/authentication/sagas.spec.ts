import {expectSaga} from 'redux-saga-test-plan';
import authSaga, {generateNonce, selectUserId} from './sagas';
import {login, logout, refreshLogin} from '../../../../shared/store/authentication/actions';
import {call, select} from 'redux-saga/effects';
import {mockMSAL} from '../../../__mocks__/react-native-msal';
import {throwError} from 'redux-saga-test-plan/providers';

// NOTE these convience constants assume the test provides a return of `mock-nonce-value` on the generate nonce call
const callAcquireToken = call(mockMSAL.acquireToken, {
  authority:
    'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
  scopes: [
    'https://bounteousmars.onmicrosoft.com/22bb031f-c846-42cc-9da2-f06839debe60/authentication',
  ],
  promptType: 'login',
  forceRefresh: true,
  extraQueryParameters: {
    nonce: 'mock-nonce-value',
  },
});

const callSilentToken = call(mockMSAL.acquireTokenSilent, {
  authority:
    'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
  scopes: [
    'https://bounteousmars.onmicrosoft.com/22bb031f-c846-42cc-9da2-f06839debe60/authentication',
  ],
  promptType: 'login',
  forceRefresh: true,
  extraQueryParameters: {
    nonce: 'mock-nonce-value',
  },
});

describe('Authentication Saga', () => {
  describe('login.REQUEST', () => {
    it('should get an idToken when there is no b2cid yet in redux', () =>
      expectSaga(authSaga)
        .provide([
          [select(selectUserId), undefined],
          [call(generateNonce), 'mock-nonce-value'],
          [callAcquireToken, {mock: 'token'}],
        ])
        .put({
          type: 'AAD_LOGIN_SUCCESS',
          payload: {mock: 'token'},
        })
        .dispatch(login.request())
        .silentRun());

    it('should silently get an idToken when there is a b2cid yet in redux', () =>
      expectSaga(authSaga)
        .provide([
          [select(selectUserId), '42'],
          [call(generateNonce), 'mock-nonce-value'],
          [callSilentToken, {mock: 'token'}],
        ])
        .put({
          type: 'AAD_LOGIN_SUCCESS',
          payload: {mock: 'token'},
        })
        .dispatch(login.request())
        .silentRun());

    it('should fall back to prompt if silent fails', () =>
      expectSaga(authSaga)
        .provide([
          [select(selectUserId), '42'],
          [call(generateNonce), 'mock-nonce-value'],
          [callSilentToken, throwError(new Error('silent failed'))],
          [callAcquireToken, {mock: 'token'}],
        ])
        .put({
          type: 'AAD_LOGIN_SUCCESS',
          payload: {mock: 'token'},
        })
        .dispatch(login.request())
        .silentRun());
  });

  describe('refreshLogin.REQUEST', () => {
    it('should silently acquire a new token', () =>
      expectSaga(authSaga)
        .provide([
          [call(generateNonce), 'mock-nonce-value'],
          [callSilentToken, {mock: 'token'}],
        ])
        .put({
          type: 'AAD_LOGIN_SUCCESS',
          payload: {mock: 'token'},
        })
        .dispatch(refreshLogin.request())
        .silentRun());

    it('should dispatch failure on error', () =>
      expectSaga(authSaga)
        .provide([
          [call(generateNonce), 'mock-nonce-value'],
          [callSilentToken, throwError(new Error('failed to acquire token'))],
        ])
        .put(login.failure(new Error('failed to acquire token')))
        .dispatch(refreshLogin.request())
        .silentRun());
  });

  describe('logout.REQUEST', () => {
    it('should signout and remove the account from masl', () =>
      expectSaga(authSaga)
        .provide([
          [call(generateNonce), 'mock-nonce-value'],
          [
            call(mockMSAL.signout, {
              authority:
                'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
              accountIdentifier: 'mock-b2cid',
            }),
            undefined,
          ],
          [
            call(mockMSAL.removeAccount, {
              authority:
                'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
              accountIdentifier: 'mock-b2cid',
            }),
            undefined,
          ],
        ])
        .put(logout.success())
        .dispatch(logout.request({b2cId: 'mock-b2cid'}))
        .silentRun());

    it('should still call success to clear things out on signout error', () =>
      expectSaga(authSaga)
        .provide([
          [call(generateNonce), 'mock-nonce-value'],
          [
            call(mockMSAL.signout, {
              authority:
                'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
              accountIdentifier: 'mock-b2cid',
            }),
            throwError(new Error('Failed to signout')),
          ],
          [
            call(mockMSAL.removeAccount, {
              authority:
                'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
              accountIdentifier: 'mock-b2cid',
            }),
            undefined,
          ],
        ])
        .put(logout.success())
        .dispatch(logout.request({b2cId: 'mock-b2cid'}))
        .silentRun());

    it('should still call success to clear things out on removeAccount error', () =>
      expectSaga(authSaga)
        .provide([
          [call(generateNonce), 'mock-nonce-value'],
          [
            call(mockMSAL.signout, {
              authority:
                'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
              accountIdentifier: 'mock-b2cid',
            }),
            undefined,
          ],
          [
            call(mockMSAL.removeAccount, {
              authority:
                'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup',
              accountIdentifier: 'mock-b2cid',
            }),
            throwError(new Error('Failed to removeAccount')),
          ],
        ])
        .put(logout.success())
        .dispatch(logout.request({b2cId: 'mock-b2cid'}))
        .silentRun());
  });
});
