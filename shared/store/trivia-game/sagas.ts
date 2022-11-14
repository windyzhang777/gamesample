import {put, takeEvery} from 'redux-saga/effects';
import {getGameData, updateScore} from './actions';
import {triviaData} from './triviaData';

function* fetchGameData({payload}: any) {
  try {
    yield put(getGameData.success(triviaData));
  } catch (e) {
    console.log(e);
    yield put(getGameData.failure(e));
  }
}

function* triviaGameSaga() {
  yield takeEvery(getGameData.REQUEST, fetchGameData);
}

export default triviaGameSaga;
