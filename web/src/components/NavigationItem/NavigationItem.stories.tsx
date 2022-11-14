import React from 'react';
import {storiesOf} from '@storybook/react';
import NavigationItem from '.';
import resolvePlatform from 'shared/utils/resolvePlatform';
import {BrowserRouter} from 'react-router-dom';

storiesOf('Navigation Item', module)
  .addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>)
  .add('Normal Navigation Item', () => (
    <div style={{backgroundColor: '#303d88', height: '100vh'}}>
      <NavigationItem
        navigationItem={{
          menuText: 'Notifications',
          key: 'notifications',
          linkTo: '/notifications',
          linkComponent: resolvePlatform('EmptyScreen', {
            emptyScreenName: 'Notifications',
          }),
        }}
        toggleDrawerCallback={() => {
          console.log('toggleDrawerCallback');
        }}
      />
    </div>
  ));
