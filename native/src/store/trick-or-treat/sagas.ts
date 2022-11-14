import {call, put, takeEvery, all} from 'redux-saga/effects';
import {executeCloudScript, post} from '../../utils/api';
import {
  addToTerAction,
  chooseTrickAction,
  updatePillowcaseAction,
  chooseTreatAction,
  getPlayFabToTers,
} from './actions';
import {login} from '../authentication/actions';
import {updateCandyCount} from '../candy-bowl/actions';
import {saveAvatar} from '../avatar/actions';

function* callAddToTer({payload}) {
  try {
    const added = yield call(executeCloudScript, 'addToTer', {
      name: payload.name,
    });

    const newCharacter = added.Characters.find(
      (character) => character.CharacterName === payload.name,
    );

    // insert new ToTer into state's array of toterItems
    yield put(
      addToTerAction.success({
        toterId: newCharacter.CharacterId,
        toterName: newCharacter.CharacterName,
      }),
    );

    if (newCharacter) {
      try {
        /* Random avatar generated when AddToTer component initially loads, passed here in payload as user attempts to create ToTer username */
        const avatar: any = {};
        avatar.assets = payload.avatarAssets;
        avatar.CharacterId = newCharacter.CharacterId; // required to update Character data in PlayFab

        // save avatar with character in playfab
        yield put(saveAvatar.request({avatar}));
      } catch (e) {
        console.log('Unable to update Character data with Avatar in PlayFab: ', e);
      }
    }
  } catch (e) {
    console.log('Unable to create new Trick or Treater character in PlayFab: ', e);
    yield put(addToTerAction.failure(e));
  }
}

function* getAllUsersCharacters() {
  try {
    const characters = yield call(post, 'GetAllUsersCharacters');

    // make the character data from playfab match our existing character data format before putting it in redux
    const toters = characters.Characters.map((character: any) => {
      return {
        toterName: character.CharacterName,
        toterId: character.CharacterId,
      };
    });

    yield put(getPlayFabToTers.success(toters));
  } catch (e) {
    console.log('Cannot pull characters from PlayFab: ', e);
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
  yield takeEvery(getPlayFabToTers.REQUEST, getAllUsersCharacters);
}

export default totSaga;
