import {runSaga} from 'redux-saga';
import {getDoorsAssets, saveDoor} from './sagas';
// eslint-disable-next-line jest/no-mocks-import
import {doorAsset as mockDoorAsset, saveDoorPayload as mockSaveDoor} from './__mocks__/doorAssets';
import * as api from '../../utils/api';

describe('Door customization actions', () => {
  describe('getDoorsAssets', () => {
    it('should dispatch success action', async () => {
      const requestDoors = jest
        .spyOn(api, 'post')
        .mockImplementation(() => Promise.resolve(mockDoorAsset));

      const dispatched = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        getDoorsAssets,
      ).toPromise();
      expect(dispatched).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            type: 'DOOR/GET_DOORS_ASSETS_SUCCESS',
          }),
        ]),
      );
      requestDoors.mockClear();
    });
    it('should dispatch failure action', async () => {
      const requestDoors = jest.spyOn(api, 'post').mockImplementation(() => Promise.reject());

      const dispatched = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
          getState: () => ({value: 'test'}),
        },
        getDoorsAssets,
      ).toPromise();
      expect(dispatched).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            type: 'DOOR/GET_DOORS_ASSETS_FAILURE',
          }),
        ]),
      );
      requestDoors.mockClear();
    });
  });
  describe(' saveDoor', () => {
    it(' should dispatch success action', async () => {
      const requestDoors = jest
        .spyOn(api, 'post')
        .mockImplementation(() => Promise.resolve(mockSaveDoor));

      const dispatched = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        saveDoor,
        {payload: mockSaveDoor},
      ).toPromise();
      expect(dispatched).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            type: 'DOOR/SAVE_DOOR_SUCCESS',
          }),
        ]),
      );
      requestDoors.mockClear();
    });
    it(' should dispatch failure action', async () => {
      const requestDoors = jest.spyOn(api, 'post').mockImplementation(() => Promise.reject());

      const dispatched = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        saveDoor,
        {payload: mockSaveDoor},
      ).toPromise();
      expect(dispatched).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            type: 'DOOR/SAVE_DOOR_FAILURE',
          }),
        ]),
      );
      requestDoors.mockClear();
    });
  });
});
