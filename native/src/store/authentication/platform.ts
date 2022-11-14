import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import {login, logout, refreshLogin} from './actions';

import MSALClient, {MSALInteractiveParams, MSALPromptType} from 'react-native-msal';
import {REHYDRATE} from 'redux-persist/es/constants';

// TODO: There is a lot of mobile/web duplication right here. When we do the work to move these variables to
//       environment variables instead of hardcoded we should move to share as much of it as we can.
const clientId = '22bb031f-c846-42cc-9da2-f06839debe60';
const authority =
  'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup';

// Msal Configurations
const authenticationParameters = {
  scopes: [
    'https://bounteousmars.onmicrosoft.com/22bb031f-c846-42cc-9da2-f06839debe60/authentication',
  ],
  promptType: MSALPromptType.LOGIN,
  forceRefresh: true,
};

const msalClient = new MSALClient(clientId);

export const selectUserId = (state) => state.user.b2cId;

// This is just a generic GUID generator from guid.us.
// At the initial build of this code it is unclear what nonce needs to be, but the web version of msal sends what
// appears to be a GUID so doing the same from mobile
export function generateNonce() {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return Promise.resolve(
    (
      S4() +
      S4() +
      '-' +
      S4() +
      '-4' +
      S4().substr(0, 3) +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    ).toLowerCase(),
  );
}

function* getIdToken() {
  try {
    let token;
    /*
      token = yield call(msalClient.acquireToken, {
        authority,
        ...authenticationParameters,
        extraQueryParameters: {
          nonce,
        },
      });
 */
    // TODO This is not actually stored in a cache right now because redux does not persist
    const id = yield select(selectUserId);
    const nonce = yield call(generateNonce);
    if (id) {
      try {
        console.log('Silent aquire token');
        token = yield call(msalClient.acquireTokenSilent, {
          scopes: authenticationParameters.scopes,
          forceRefresh: true,
          authority: authority,
          accountIdentifier: id,
        });
      } catch (e) {
        console.log('silent failed, get a real token');
        token = yield call(msalClient.acquireToken, {
          authority: authority,
          extraQueryParameters: {
            nonce,
          },
          scopes: authenticationParameters.scopes,
          // eslint-disable-next-line @typescript-eslint/camelcase
          ios_prefersEphemeralWebBrowserSession: true,
          promptType: MSALPromptType.WHEN_REQUIRED,
        } as MSALInteractiveParams);
      }
    } else {
      console.log('request login - aquire token');
      token = yield call(msalClient.acquireToken, {
        authority: authority,
        extraQueryParameters: {
          nonce,
        },
        scopes: authenticationParameters.scopes,
        // eslint-disable-next-line @typescript-eslint/camelcase
        ios_prefersEphemeralWebBrowserSession: true,
        promptType: MSALPromptType.WHEN_REQUIRED,
      } as MSALInteractiveParams);
    }
    if (token) {
      yield put({
        type: 'AAD_LOGIN_SUCCESS',
        payload: token,
      });
    } else {
      yield put(login.failure('No token returned'));
    }
  } catch (e) {
    console.log(e);
    yield put(login.failure(e));
  }
}

function* refreshIdToken() {
  try {
    const id = yield select(selectUserId);
    const nonce = yield call(generateNonce);
    console.log(`refreshing with nonce ${nonce}`, {
      authority,
      ...authenticationParameters,
      extraQueryParameters: {
        nonce: nonce,
      },
    });
    const token = yield call(msalClient.acquireTokenSilent, {
      scopes: authenticationParameters.scopes,
      forceRefresh: true,
      authority: authority,
      accountIdentifier: id,
    });

    yield put({
      type: 'AAD_LOGIN_SUCCESS',
      payload: token,
    });
  } catch (e) {
    console.log(e);
    yield put(login.failure(e));
  }
}

function* callLogout({payload: {b2cId}}) {
  //  there is a documented issue with clearing user account sessions
  //  https://github.com/stashenergy/react-native-msal/issues/3
  //  https://github.com/AzureAD/microsoft-authentication-library-for-objc/issues/210
  //  https://github.com/AzureAD/microsoft-authentication-library-for-objc/issues/560
  //
  //  we are implementing a workaround for this known issue until
  //  the issue has been resolved
  try {
    yield call(msalClient.signout, {
      authority,
      accountIdentifier: b2cId,
    });
    yield call(msalClient.removeAccount, {
      authority,
      accountIdentifier: b2cId,
    });
    yield put(logout.success());
  } catch (e) {
    //  in the future if this issue is ever resolved we should yield login.failure(e)
    //  <-- WORKAROUND BEGIN -->
    yield put(logout.success());
    //  <-- WORKAROUND END -->
  }
}

function* rehydrateAxiosHeaders(action) {
  // TS refuses to allow me to properly deconstruct in the parameter to a saga :(
  // const {b2cId, loginExpires, sessionTicket} = action.payload.user;
  // if (b2cId && (!sessionTicket || loginExpires < Date.now())) {
  // yield put(refreshLogin.request());
  // }
}

function* sagas() {
  yield takeLatest(login.REQUEST, getIdToken);
  yield takeLatest(refreshLogin.REQUEST, refreshIdToken);
  yield takeEvery(logout.REQUEST, callLogout);
  yield takeEvery(REHYDRATE, rehydrateAxiosHeaders);
}

export default sagas;
