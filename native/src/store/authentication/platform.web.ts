import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {login, refreshLogin, logout} from './actions';
import {authenticationParameters, authProvider} from './authProvider';

function* getIdToken({payload}: {payload: any}) {
  console.log(payload);
  try {
    const token = yield call(authProvider.getIdToken, authenticationParameters);
    if (payload.account.idToken.nonce === token.idToken.nonce) {
      yield put(
        login.failure('This should never happen, but somehow the nonce did not get updated'),
      );
    } else {
      yield put({
        type: 'AAD_LOGIN_SUCCESS',
        payload: token,
      });
    }
  } catch (e) {
    console.log(e);
    yield put(login.failure(e));
  }
}

function* callLogout() {
  try {
    const result = yield call(authProvider.logout);
    console.log(result);
    yield put(logout.success());
  } catch (e) {
    console.log(e);
    yield put(logout.failure(e));
  }
}

function* sagas() {
  yield takeLatest(refreshLogin.REQUEST, getIdToken);
  yield takeEvery(logout.REQUEST, callLogout);
}

export default sagas;
