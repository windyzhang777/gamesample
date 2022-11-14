import React from 'react';
import {storiesOf} from '@storybook/react-native';
import NavigationSection from '.';
import resolvePlatform from 'shared/utils/resolvePlatform';
import {NativeRouter} from 'react-router-native';

storiesOf('Navigation Section', module)
  .addDecorator((story: () => React.ReactNode) => <NativeRouter>{story()}</NativeRouter>)
  .add('Empty', () => {
    return (
      <NavigationSection
        navigationSection={{
          sectionText: '',
          sectionKey: 'sec_1',
          navigationItems: [],
        }}
      />
    );
  })
  .add('One Item', () => {
    return (
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
      />
    );
  })
  .add('Section Items', () => {
    return (
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
      />
    );
  });
