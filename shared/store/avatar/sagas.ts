import {
  getAvatarsConfigurationFlowAndAssets as getAvatarsConfigurationFlowAndAssetsAction,
  getAvatarAssets as getAvatarAssetAction,
  saveAvatar as saveAvatarAction,
} from './actions';
import {CatalogResponse} from '../../models/Avatar';
import {cacheContent} from '../content/actions';
import {AvatarItemClass, Item, Avatar} from '../../models/Avatar';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {post, executeCloudScript} from '../../utils/api';
import {get} from '../../utils/object';
import {CustomizationFlowSection} from '../../containers/CustomizationFlow';
import {AvatarCustomizations} from './reducer';

// call back for map function to generate Item object
const mapCb = (catalogItem: CatalogResponse) => ({
  id: catalogItem.ItemId,
  displayName: catalogItem.DisplayName,
  image: `${catalogItem.ItemClass}/${catalogItem.ItemId}.png`,
});

export function* getAvatarAssets() {
  try {
    const {Catalog}: {Catalog: CatalogResponse[]} = yield call(post, 'GetCatalogItems', {
      CatalogVersion: 'Avatars',
    });
    const avatar: Avatar[] = Catalog.filter(
      (item) => item.ItemClass === AvatarItemClass.Avatar,
    ).map((catalogItem) => ({
      id: catalogItem.ItemId,
      displayName: catalogItem.DisplayName,
      monsterImage: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}.png`,
      monsterDetailsImage: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}_details.png`,
      monsterImageMaskWeb: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}_mask.svg`,
      monsterImageMaskNative: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}_mask.png`,
      availableClothes: get(JSON.parse(catalogItem.CustomData), 'availableClothes', 0),
      clothesOneImage: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}-clothes-one.png`,
      clothesOneMaskWeb: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}-clothes-one_mask.svg`,
      clothesOneMaskNative: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}-clothes-one_mask.png`,
      clothesTwoMaskWeb: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}-clothes-two_mask.svg`,
      clothesTwoMaskNative: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}-clothes-two_mask.png`,
      clothesTwoImage: `${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}-clothes-two.png`,
    }));

    const eyes = Catalog.filter((item) => item.ItemClass === AvatarItemClass.Eyes).map(mapCb);
    const head = Catalog.filter((item) => item.ItemClass === AvatarItemClass.Head).map(mapCb);
    const mouth = Catalog.filter((item) => item.ItemClass === AvatarItemClass.Mouth).map(mapCb);
    const nose = Catalog.filter((item) => item.ItemClass === AvatarItemClass.Nose).map(mapCb);
    // maybe would be better to use reduce rather than multiple maps and filters?
    const payload = {
      avatar,
      eyes,
      head,
      mouth,
      nose,
    };
    yield put(getAvatarAssetAction.success(payload));
    const avatarUrls: string[] = [...avatar].reduce(
      (acc: string[], avatar: Avatar) => [
        ...acc,
        avatar.monsterImage,
        avatar.monsterDetailsImage,
        avatar.monsterImageMaskWeb,
        avatar.monsterImageMaskNative,
        avatar.clothesOneImage,
        avatar.clothesOneMaskNative,
        avatar.clothesOneMaskWeb,
        avatar.clothesTwoImage,
        avatar.clothesTwoMaskNative,
        avatar.clothesTwoMaskWeb,
      ],
      [],
    );
    const assetUrls: string[] = [...eyes, ...head, ...mouth, ...nose].reduce(
      (acc: string[], item: Item) => [...acc, item.image],
      [...avatarUrls],
    );
    yield all(assetUrls.map((url) => put(cacheContent.request(url))));
  } catch (e) {
    yield put(getAvatarAssetAction.failure(e));
  }
}

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
            case AvatarItemClass.Sound:
              assets.push(`${catalogItem.ItemClass}s/${catalogItem.ItemId}.mp3`);
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
 * Saves the user's selected avatar customizations in playfab
 * @param payload
 */
export function* saveAvatar({payload}: {payload: AvatarCustomizations}) {
  try {
    // TODO: Make sure this is correctly saving data on player
    yield call(post, 'UpdateUserData', {
      Data: payload,
    });
    yield put(saveAvatarAction.success(payload));
    return true;
  } catch (e) {
    yield put(saveAvatarAction.failure(e));
  }
}

function* sagas() {
  // yield takeEvery(getAvatarAssetAction.REQUEST, getAvatarAssets);
  yield takeEvery(
    getAvatarsConfigurationFlowAndAssetsAction.REQUEST,
    getAvatarsConfigurationFlowAndAssets,
  );
  yield takeEvery(saveAvatarAction.REQUEST, saveAvatar);
}

export default sagas;
