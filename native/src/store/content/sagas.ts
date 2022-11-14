import {call, put, takeEvery, all} from 'redux-saga/effects';
import api from '../../utils/api';
import {cacheContent, loadCandies} from './actions';
import {login} from '../authentication/actions';

function* refreshCandies() {
  try {
    yield put(loadCandies.request());
    const candies = yield call(api.post, 'GetCatalogItems', {
      CatalogVersion: 'One Candy',
    });
    yield all(
      candies.Catalog.filter((candy) => 'candy' === candy.ItemClass).map((candy) =>
        put(cacheContent.request(`${candy.ItemId}.jpg`)),
      ),
    );
    yield put(loadCandies.success(candies));
  } catch (e) {
    console.log(e);
    yield put(loadCandies.failure(e));
  }
}

// var preLoad = (image) => {
//   var img = new Image();
//   img.src = image;
// };

function* downloadContent({payload}) {
  try {
    const image = yield call(api.post, 'GetContentDownloadUrl', {
      key: payload,
    });
    // preLoad(image.URL);
    yield put(cacheContent.success({key: payload, url: image.URL}));
  } catch (e) {
    console.log(e);
    yield put(cacheContent.failure(e));
  }
}

function* sagas() {
  yield takeEvery(login.SUCCESS, refreshCandies);
  yield takeEvery(cacheContent.REQUEST, downloadContent);
}

export default sagas;
