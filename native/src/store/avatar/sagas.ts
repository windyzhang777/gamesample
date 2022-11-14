import {
  getAvatarsConfigurationFlowAndAssets as getAvatarsConfigurationFlowAndAssetsAction,
  saveAvatar as saveAvatarAction,
} from './actions';
import {cacheContent} from '../content/actions';
import {AvatarItemClass} from '../../models/Avatar';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {post, executeCloudScript} from '../../utils/api';
import {AvatarCustomizations} from './reducer';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';

export function* getAvatarsConfigurationFlowAndAssets() {
  try {
    const avatarsConfigurationFlow: CustomizationFlowSection[] = yield call(
      executeCloudScript,
      'getCustomizationFlowConfiguration',
      {
        flowKey: 'Avatars',
      },
    );

    const assets: string[] = [];
    avatarsConfigurationFlow.forEach((section: any) => {
      section.items.forEach((catalogItem: any) => {
        // avatar sandwitch has one more layer
        const imagePath = `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}`;
        // exclude all color sections
        if (catalogItem.ItemClass.toLowerCase().indexOf('color') < 0) {
          switch (catalogItem.ItemClass) {
            case AvatarItemClass.Avatar:
              assets.push(`${imagePath}.png`);
              assets.push(`${imagePath}_details.png`);
              assets.push(`${imagePath}_mask.svg`);
              assets.push(`${imagePath}_mask.png`);
              assets.push(`${imagePath}-clothes-one.png`);
              assets.push(`${imagePath}-clothes-one_mask.svg`);
              assets.push(`${imagePath}-clothes-one_mask.png`);
              assets.push(`${imagePath}-clothes-two.png`);
              assets.push(`${imagePath}-clothes-two_mask.svg`);
              assets.push(`${imagePath}-clothes-two_mask.png`);
              break;
            case AvatarItemClass.Costume:
              assets.push(`${imagePath}_front.png`);
              assets.push(`${imagePath}_back.png`);
              break;
            case AvatarItemClass.Sound:
              assets.push(`${imagePath}.mp3`);
              break;
            default:
              assets.push(`${imagePath}.png`);
          }
        }
      });
    });

    yield all(assets.map((url) => put(cacheContent.request(url))));
    yield put(getAvatarsConfigurationFlowAndAssetsAction.success(avatarsConfigurationFlow));
  } catch (e) {
    console.log('Error?', e);
    yield put(getAvatarsConfigurationFlowAndAssetsAction.failure(e));
  }
}

/**
 * Saves the ToTer's randomly chosen initial avatar customizations in playfab
 * @param payload
 * ToTers are stored as Characters in PlayFab
 * CharacterId is required for UpdateCharacterData
 * One Candy Giver can have multiple ToTers
 */
export function* saveAvatar({payload}: {payload: AvatarCustomizations}) {
  try {
    const res = yield call(post, 'UpdateUserData', {
      Data: payload,
    });
    if (res) {
      yield put(saveAvatarAction.success(payload));
      return true;
    }
  } catch (e) {
    console.log('Cannot save avatar: ', e);
    yield put(saveAvatarAction.failure(e));
  }
}

function* sagas() {
  yield takeEvery(
    getAvatarsConfigurationFlowAndAssetsAction.REQUEST,
    getAvatarsConfigurationFlowAndAssets,
  );
  yield takeEvery(saveAvatarAction.REQUEST, saveAvatar);
}

export default sagas;
