import React from 'react';
import {storiesOf} from '@storybook/react';
import Toter from '.';
import Provider from '../../utils/Provider';

storiesOf('Toter', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('With name and candy', () => {
    return (
      <Toter
        cachedImages={[]}
        candies={[
          {id: 1, count: 10},
          {id: 2, count: 100},
          {id: 3, count: 1337},
          {id: 4, count: 42},
        ]}
        name={'Kiana'}
        id={'10'}
        chooseTreat={() => {
          console.log('chooseTreat Pressed');
        }}
        chooseTrick={() => {
          console.log('chooseTrick Pressed');
        }}
      />
    );
  })
  .add('With long name no candy', () => {
    return (
      <Toter
        cachedImages={[]}
        candies={[]}
        name={'Kiana daughter of skyler'}
        id={'10'}
        chooseTreat={() => {
          console.log('chooseTreat Pressed');
        }}
        chooseTrick={() => {
          console.log('chooseTrick Pressed');
        }}
      />
    );
  })
  .add('With long name and lots of candy', () => {
    return (
      <Toter
        cachedImages={[]}
        candies={[
          {id: 1, count: 10},
          {id: 2, count: 100},
          {id: 3, count: 1337},
          {id: 4, count: 42},
        ]}
        name={'Kiana daughter of skyler'}
        id={'10'}
        chooseTreat={() => {
          console.log('chooseTreat Pressed');
        }}
        chooseTrick={() => {
          console.log('chooseTrick Pressed');
        }}
      />
    );
  });
