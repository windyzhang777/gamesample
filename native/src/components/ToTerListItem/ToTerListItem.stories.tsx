import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ToTerListItem from '.';
import {NativeRouter} from 'react-router-native';

storiesOf('ToTer List Item', module)
  .addDecorator((story: () => React.ReactNode) => <NativeRouter>{story()}</NativeRouter>)
  .add('Normal ToTer List Item', () => {
    return (
      <ToTerListItem
        toterItem={{
          toterId: '1',
          toterName: 'Trick or Treater #1',
        }}
      />
    );
  });
