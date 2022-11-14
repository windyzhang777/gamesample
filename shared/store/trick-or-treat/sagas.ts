import {call, put, takeEvery, all} from 'redux-saga/effects';
import {executeCloudScript, post} from '../../utils/api';
import {
  addToTerAction,
  chooseTrickAction,
  updatePillowcaseAction,
  chooseTreatAction,
} from './actions';
import {login} from '../authentication/actions';
import {updateCandyCount} from '../candy-bowl/actions';

function* callAddToTer({payload}) {
  try {
    const added = yield call(executeCloudScript, 'addToTer', {
      name: payload.name,
    });

    const newCharacter = added.Characters.find(
      (character) => character.CharacterName === payload.name,
    );
    console.log(newCharacter);
    yield put(
      addToTerAction.success({
        toterId: newCharacter.CharacterId,
        toterName: newCharacter.CharacterName,
      }),
    );
  } catch (e) {
    console.log(e);
    yield put(addToTerAction.failure(e));
  }
}

function* runTreat({payload}) {
  try {
    const treated = yield call(executeCloudScript, 'chooseTreat', payload);
    yield put(updatePillowcaseAction.request({characterId: payload.toter}));
    yield put(updateCandyCount.request());
    yield put(chooseTreatAction.success(treated));
  } catch (e) {
    console.log(e);
    yield put(chooseTreatAction.failure(e));
  }
}
function* runTrick({payload}) {
  try {
    const tricked = yield call(executeCloudScript, 'chooseTrick', payload);
    yield put(chooseTrickAction.success(tricked));
    alert('BOO!');
  } catch (e) {
    console.log(e);
    yield put(chooseTrickAction.failure(e));
  }
}

function* fetchPillowcase({payload: {characterId, CharacterId}}) {
  try {
    const updatedInventory = yield call(post, 'GetCharacterInventory', {
      CharacterId: characterId || CharacterId,
    });
    yield put(updatePillowcaseAction.success(updatedInventory));
  } catch (e) {
    console.log(e);
    yield put(updatePillowcaseAction.failure(e));
  }
}

function* fetchAllPillowcases({payload}) {
  try {
    let allCharacters = payload.InfoResultPayload.CharacterList;
    if (!allCharacters || !allCharacters.Characters || allCharacters.Characters.length === 0) {
      allCharacters = yield call(post, 'GetAllUsersCharacters');
    }
    if (allCharacters && allCharacters.Characters) {
      yield all(
        allCharacters.Characters.map((character) =>
          put(
            updatePillowcaseAction.request({
              characterId: character.CharacterId,
            }),
          ),
        ),
      );
    }
  } catch (e) {
    console.log(e);
    yield put(addToTerAction.failure(e));
  }
}

function* totSaga() {
  yield takeEvery(addToTerAction.REQUEST, callAddToTer);
  yield takeEvery(updatePillowcaseAction.REQUEST, fetchPillowcase);
  yield takeEvery(login.SUCCESS, fetchAllPillowcases);
  yield takeEvery(chooseTrickAction.REQUEST, runTrick);
  yield takeEvery(chooseTreatAction.REQUEST, runTreat);
}

export default totSaga;
