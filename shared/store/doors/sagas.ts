import {call, put, takeLatest} from 'redux-saga/effects';
import {getNearbyDoors} from './actions';
import {executeCloudScript} from '../../utils/api';
/*
Get all nearby doors from PlayFab to display on the map
*/
function* getNearbyDoorsFromPlayFab({payload}) {
  try {
    const res = yield call(executeCloudScript, 'getNearbyDoors', {
      location: {lat: payload.latitude, lng: payload.longitude},
    });
    if (res) {
      yield put(getNearbyDoors.success({nearbyDoors: res.doors}));
    }
  } catch (e) {
    console.log(e.error);
  }
}

function* sagas() {
  yield takeLatest(getNearbyDoors.REQUEST, getNearbyDoorsFromPlayFab);
}

export default sagas;
