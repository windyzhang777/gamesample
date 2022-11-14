import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import api from '../../utils/api';
import {buyCandyAction, updateCandyCount} from './actions';

function* runBuyCandy({payload}) {
  try {
    const {amount} = payload;
    const playerData = yield call(api.post, 'AddUserVirtualCurrency', {
      Amount: amount,
      VirtualCurrency: 'VC',
    });
    yield put(buyCandyAction.success(playerData));
  } catch (e) {
    console.log(e);
    yield put(buyCandyAction.failure(e));
  }
}

function* fetchCandyCount() {
  try {
    const playerData = yield call(api.post, 'GetUserInventory');
    yield put(updateCandyCount.success(playerData));
  } catch (e) {
    console.log(e);
    yield put(updateCandyCount.failure(e));
  }
}

function* buyCandySaga() {
  yield takeEvery(buyCandyAction.REQUEST, runBuyCandy);
  yield takeLatest(updateCandyCount.REQUEST, fetchCandyCount);
}

export default buyCandySaga;
