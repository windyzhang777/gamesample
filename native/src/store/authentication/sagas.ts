import {call, put, takeEvery} from 'redux-saga/effects';
import api, {setAuthHeader} from 'src/utils/api';
import {login, refreshLogin, updateDisplayName} from './actions';
import {REHYDRATE} from 'redux-persist/es/constants';

function* loginToPlayFab({payload, type}) {
  console.log('Logging Into PlayFab');
  console.log(payload);
  try {
    yield call(setAuthHeader, undefined);
    const user = yield call(api.post, 'LoginWithOpenIdConnect', {
      CreateAccount: true,
      ConnectionId: 'playfab-retest-1',
      IdToken: payload.jwtIdToken || payload.idToken,
      InfoRequestParameters: {
        GetPlayerProfile: true,
        GetCharacterList: true,
        GetCharacterInventories: true,
        GetUserData: true,
        GetUserVirtualCurrency: true,
      },
    });
    yield call(setAuthHeader, user.SessionTicket);

    yield put(
      login.success({
        ...user,
        displayName: user.InfoResultPayload?.PlayerProfile?.DisplayName,
        userData: user.InfoResultPayload?.UserData,
      }),
    );
  } catch (e) {
    console.log('loginToPlayFab - failed to login to playfab: ', e);
    // TODO: This needs to happen ONLY when we think it will solve the problem.
    //       early testing it appears to solve everything, but I am very certain that isn't going to
    //       continue to hold true for all cases. We need to learn and understand when it is and isn't
    //       true because right now this can potentially cause an infinite loop as the try/catch is a
    //       circular dependency.
    // yield put(refreshLogin.request());
    yield put(login.failure(e));
  }
}

/*
Send user's chosen displayName to playfab as "DisplayName"
*/
export interface UpdatePlayfabDisplayName {
  displayName: string;
}
function* setDisplayNameInPlayFab({payload}: {payload: UpdatePlayfabDisplayName}) {
  const displayName = payload.displayName;

  try {
    const res = yield call(api.post, 'UpdateUserTitleDisplayName', {
      displayName,
    });
    if (res) yield put(updateDisplayName.success(displayName));
  } catch (e) {
    const errObj = JSON.parse(e.request.response);

    if (errObj.errorCode === 1058) {
      // yield put(setDisplayName.error('That display name is already in use. Please enter a new display name.'));
      console.log('That display name is already in use. Please enter a new display name.');
    } else {
      console.log(errObj);
    }
  }
}

function* sagas() {
  yield takeEvery('AAD_LOGIN_SUCCESS', loginToPlayFab);
  yield takeEvery(updateDisplayName.REQUEST, setDisplayNameInPlayFab);
}

export default sagas;
