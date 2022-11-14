import React from 'react';
import * as ReactRedux from 'react-redux';

import {isFunction} from 'lodash/lang';

/**
 * Mocks useSelector and useDispatch for easy testing with redux-hooks.
 * Allows us to use Shallow rendering instead of mount
 * Pass in a selectorMap to the constructor to mock values returned from useSelector -
 * values must be in order in which they are called in the component
 */
export class ReduxHookMock {
  private useDispatchSpy: jest.SpyInstance;
  private useSelectorSpy: jest.SpyInstance;
  private useSelectorIteration = 0;
  readonly useDispatch: jest.Mock;

  constructor(private selectorMap: any[] = []) {
    this.useSelectorSpy = jest.spyOn(ReactRedux, 'useSelector').mockImplementation(() => {
      const selectorMapItem = this.selectorMap[this.useSelectorIteration++];

      return isFunction(selectorMapItem) ? selectorMapItem() : selectorMapItem;
    });

    this.useDispatch = jest.fn();
    this.useDispatchSpy = jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(this.useDispatch);
  }

  mockRestore() {
    this.useDispatchSpy.mockRestore();
    this.useSelectorSpy.mockRestore();
  }
}
