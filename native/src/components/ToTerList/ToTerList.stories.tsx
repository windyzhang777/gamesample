import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ToTerList from '.';
import {NativeRouter} from 'react-router-native';

storiesOf('ToTer List', module)
  .addDecorator((story: () => React.ReactNode) => <NativeRouter>{story()}</NativeRouter>)
  .add('Normal ToTer List', () => {
    return (
      <ToTerList
        toterList={{
          toterItems: [
            {
              toterId: '1',
              toterName: 'Trick or Treater #1',
            },
            {
              toterId: '2',
              toterName: 'Trick or Treater #2',
            },
            {
              toterId: '3',
              toterName: 'Trick or Treater #3',
            },
            {
              toterId: '4',
              toterName: 'Trick or Treater #4',
            },
            {
              toterId: '5',
              toterName: 'Trick or Treater #5',
            },
            {
              toterId: '6',
              toterName: 'Trick or Treater #6',
            },
          ],
        }}
      />
    );
  });
