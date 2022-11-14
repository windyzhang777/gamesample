import React from 'react';
import {storiesOf} from '@storybook/react-native';
import NavigationItem from '.';
import resolvePlatform from 'shared/utils/resolvePlatform';
import {NativeRouter} from 'react-router-native';

storiesOf('Navigation Item', module)
  .addDecorator((story: () => React.ReactNode) => <NativeRouter>{story()}</NativeRouter>)
  .add('Normal Navigation Item', () => {
    return (
      <NavigationItem
        toggleDrawerCallback={() => {
          console.log('Toggle Drawer Callback');
        }}
        navigationItem={{
          menuText: 'Notifications',
          key: 'notifications',
          linkTo: '/notifications',
          linkComponent: resolvePlatform('EmptyScreen', {
            emptyScreenName: 'Notifications',
          }),
        }}
      />
    );
  })
  .add('Navigation Item No Underline', () => {
    return (
      <NavigationItem
        toggleDrawerCallback={() => {
          console.log('Toggle Drawer Callback');
        }}
        navigationItem={{
          menuText: 'Notifications',
          key: 'notifications',
          linkTo: '/notifications',
          linkComponent: resolvePlatform('EmptyScreen', {
            emptyScreenName: 'Notifications',
          }),
          removeBottomUnderline: true,
        }}
      />
    );
  });
