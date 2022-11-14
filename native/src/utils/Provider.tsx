import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '../store';

export default function Provider({story}: {story: any}) {
  return <ReduxProvider store={store}>{story}</ReduxProvider>;
}
