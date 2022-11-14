import React from 'react';
import {storiesOf} from '@storybook/react';
import NavigationSection from '.';
import resolvePlatform from 'shared/utils/resolvePlatform';
import {BrowserRouter} from 'react-router-dom';

storiesOf('Navigation Section', module)
  .addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>)
  .add('One Item', () => {
    return (
      <div style={{backgroundColor: '#303d88', height: '100vh'}}>
        <NavigationSection
          navigationSection={{
            sectionText: '',
            sectionKey: 'sec_1',
            navigationItems: [
              {
                menuText: 'Notifications',
                key: 'notifications',
                linkTo: '/notifications',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Notifications',
                }),
              },
            ],
          }}
          toggleDrawerCallback={() => {
            console.log('toggle');
          }}
        />
      </div>
    );
  })
  .add('Section Items', () => {
    return (
      <div style={{backgroundColor: '#303d88', height: '100vh'}}>
        <NavigationSection
          navigationSection={{
            sectionText: '',
            sectionKey: 'sec_1',
            navigationItems: [
              {
                menuText: 'Notifications',
                key: 'notifications',
                linkTo: '/notifications',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Notifications',
                }),
              },
              {
                menuText: 'Explore Neighborhood',
                key: 'explore_neighborhood',
                linkTo: '/',
                linkComponent: resolvePlatform('ExploreNeighborhood'),
              },
              {
                menuText: 'Activity Dashboard',
                key: 'activity_dashboard',
                linkTo: '/activity_dashboard',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Activity Dashboard',
                }),
                removeBottomUnderline: true,
              },
            ],
          }}
          toggleDrawerCallback={() => {
            console.log('toggle');
          }}
        />
      </div>
    );
  });
