import React from 'react';
import {storiesOf} from '@storybook/react';
import {NativeRouter} from 'react-router-native';
import {useSelector} from 'react-redux';
import Provider from '../../../utils/Provider';
import ManageTrickOrTreaters from '.';

storiesOf('Manage ToTer', module)
  .addDecorator((story) => (
    <NativeRouter>
      <Provider story={story()} />
    </NativeRouter>
  ))
  .add('Normal ManageTrickOrTreaters', () => {
    return <ManageTrickOrTreaters useSelector={useSelector} />;
  });
