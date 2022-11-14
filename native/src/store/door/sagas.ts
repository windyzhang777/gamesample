import {call, put, takeEvery, all} from 'redux-saga/effects';
import {
  getDoorsConfigurationFlowAndAssets as getDoorsConfigurationFlowAndAssetsAction,
  getDoorsAssets as getDoorsAssetsAction,
  saveDoor as saveDoorAction,
} from './actions';
import {post, executeCloudScript} from 'src/utils/api';
import {get} from 'src/utils/object';
import {cacheContent} from '../content/actions';
import {Door, CatalogResponse, Tags, ItemClass} from 'src/models/Door';
import {Decoration} from 'src/models/Decoration';
import {DoorCustomizations, DoorCustomizationsPayload} from './reducer';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';

function getAssetsFromItemClass(itemClass: string, itemId: string) {
  const assets = [];
  switch (itemClass) {
    case 'doors':
      assets.push(`${itemClass}/${itemId}/${itemId}.png`);
      assets.push(`${itemClass}/${itemId}/${itemId}_frame.png`);
      assets.push(`${itemClass}/${itemId}/${itemId}_details.png`);
      assets.push(`${itemClass}/${itemId}/${itemId}_mask.svg`);
      assets.push(`${itemClass}/${itemId}/${itemId}_mask.png`);
      break;
    case 'sounds':
      assets.push(`${itemClass}/${itemId}.mp3`);
      break;
    case 'colors':
      return [];
    default:
      assets.push(`${itemClass}/${itemId}/${itemId}.png`);
      break;
  }
  return assets;
}

export function* getDoorsAssets() {
  try {
    const {Catalog}: {Catalog: CatalogResponse[]} = yield call(post, 'GetCatalogItems', {
      CatalogVersion: 'Doors',
    });
    // Filter data by door class, and format for redux state
    const doorData: Door[] = Catalog.filter((elm) => ItemClass.Door === elm.ItemClass).map(
      (door: any) => ({
        id: door.ItemId,
        displayName: door.DisplayName,
        doorImage: `doors/${door.ItemId}/${door.ItemId}.png`,
        doorFrameImage: `doors/${door.ItemId}/${door.ItemId}_frame.png`,
        doorDetailsImage: `doors/${door.ItemId}/${door.ItemId}_details.png`,
        doorImageMaskWeb: `doors/${door.ItemId}/${door.ItemId}_mask.svg`,
        doorImageMaskNative: `doors/${door.ItemId}/${door.ItemId}_mask.png`,
        defaultColor: get(JSON.parse(door.CustomData), 'defaultColor', '#FFFFFF'),
      }),
    );

    // Filter data by decoration class, and format for redux state
    const decorationData: Decoration[] = Catalog.filter(
      (elm) => ItemClass.Decoration === elm.ItemClass,
    ).map((decoration) => ({
      id: decoration.ItemId,
      displayName: decoration.DisplayName,
      image: `decorations/${decoration.ItemId}/${decoration.ItemId}.png`,
      Tags: decoration.Tags,
    }));

    type DecorationAccumulator = {
      [key: string]: Decoration[];
    };
    const decorAcc: DecorationAccumulator = {
      group1Decorations: [],
      group2Decorations: [],
      group3Decorations: [],
    };
    decorationData.reduce((acc, elm) => {
      if (elm.Tags.find((y) => y === Tags.Group1Decorations)) {
        acc.group1Decorations.push(elm);
      }
      if (elm.Tags.find((y) => y === Tags.Group2Decorations)) {
        acc.group2Decorations.push(elm);
      }
      if (elm.Tags.find((y) => y === Tags.Group3Decorations)) {
        acc.group3Decorations.push(elm);
      }
      return acc;
    }, decorAcc);

    const assetData = {
      ...decorAcc,
      doors: doorData,
    };

    // Cache all of the image assets
    const doorAssetUrls: string[] = doorData.reduce(
      (acc: string[], door: Door) => [
        ...acc,
        door.doorImage,
        door.doorFrameImage,
        door.doorImageMaskWeb,
        door.doorImageMaskNative,
        door.doorDetailsImage,
      ],
      [],
    );

    const decorAssetUrls: string[] = decorationData.reduce(
      (acc: string[], decoration: Decoration) => [...acc, decoration.image],
      [],
    );
    const assetUrls: string[] = [...doorAssetUrls, ...decorAssetUrls];
    yield all(assetUrls.map((url) => put(cacheContent.request(url))));
    yield put(getDoorsAssetsAction.success(assetData));
  } catch (e) {
    yield put(getDoorsAssetsAction.failure(e));
  }
}

export function* getDoorsConfigurationFlowAndAssets() {
  try {
    const doorsConfigurationFlow: CustomizationFlowSection[] = yield call(
      executeCloudScript,
      'getCustomizationFlowConfiguration',
      {
        flowKey: 'Doors',
      },
    );

    let assets: string[] = [];
    for (const section of Object.values(doorsConfigurationFlow)) {
      for (const catalogItem of section.items) {
        assets = assets.concat(getAssetsFromItemClass(catalogItem.ItemClass, catalogItem.ItemId));
      }
    }

    yield all(assets.map((url) => put(cacheContent.request(url))));
    yield put(getDoorsConfigurationFlowAndAssetsAction.success(doorsConfigurationFlow));
  } catch (e) {
    yield put(getDoorsConfigurationFlowAndAssetsAction.failure(e));
  }
}

/**
 * Saves the user's selected door customizations in playfab
 * @param payload
 */
export function* saveDoor({payload}: DoorCustomizationsPayload) {
  try {
    // TODO: Make sure this is correctly saving data on player
    yield call(post, 'UpdateUserData', {
      Data: payload,
    });
    yield put(saveDoorAction.success(payload));
    return true;
  } catch (e) {
    yield put(saveDoorAction.failure(e));
  }
}

function* sagas() {
  yield takeEvery(getDoorsAssetsAction.REQUEST, getDoorsAssets);
  yield takeEvery(
    getDoorsConfigurationFlowAndAssetsAction.REQUEST,
    getDoorsConfigurationFlowAndAssets,
  );
  yield takeEvery(saveDoorAction.REQUEST, saveDoor);
}

export default sagas;
