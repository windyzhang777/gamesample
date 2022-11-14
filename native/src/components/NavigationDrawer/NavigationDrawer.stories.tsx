import React from 'react';
import {storiesOf} from '@storybook/react-native';
import NavigationDrawer from '.';
import {NativeRouter} from 'react-router-native';
import resolvePlatform from 'shared/utils/resolvePlatform';

storiesOf('Navigation Drawer', module)
  .addDecorator((story: () => React.ReactNode) => <NativeRouter>{story()}</NativeRouter>)
  .add('One Section', () => {
    return (
      <NavigationDrawer
        drawerOpen={true}
        closeDrawerCallback={() => {
          console.log('close');
        }}
        toggleDrawerCallback={() => {
          console.log('toggle');
        }}
        sections={[
          {
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
          },
        ]}
      />
    );
  })
  .add('More Sections', () => {
    return (
      <NavigationDrawer
        drawerOpen={true}
        closeDrawerCallback={() => {
          console.log('close');
        }}
        toggleDrawerCallback={() => {
          console.log('toggle');
        }}
        sections={[
          {
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
          },
          {
            sectionText: '',
            sectionKey: 'sec_2',
            navigationItems: [
              {
                menuText: 'Edit Your Door',
                key: 'edit_your_door',
                linkTo: '/edit_your_door',
                linkComponent: resolvePlatform('EditYourDoor'),
              },
              {
                menuText: 'Manage Trick or Treaters',
                key: 'manage_trick_or_treaters',
                linkTo: '/manage_trick_or_treaters',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Manage Trick or Treaters',
                }),
              },
              {
                menuText: 'Buy & Manage Candy',
                key: 'buy_manage_candy',
                linkTo: '/buy_manage_candy',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Buy & Manage Candy',
                }),
              },
              {
                menuText: 'Manage Spooky Points',
                key: 'manage_spooky_points',
                linkTo: '/manage_spooky_points',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Manage Spooky Points',
                }),
                removeBottomUnderline: true,
              },
            ],
          },
          {
            sectionText: '',
            sectionKey: 'sec_3',
            navigationItems: [
              {
                menuText: 'Invite Friends',
                key: 'invite_friends',
                linkTo: '/invite_friends',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Invite Friends',
                }),
              },
              {
                menuText: 'Share Your Experiance',
                key: 'share_your_experiance',
                linkTo: '/share_your_experiance',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Share Your Experiance',
                }),
              },
              {
                menuText: 'Help & Feedback',
                key: 'help_feedback',
                linkTo: '/help_feedback',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'Help & Feedback',
                }),
                removeBottomUnderline: true,
              },
            ],
          },
          {
            sectionText: 'Developer Tools',
            sectionKey: 'developer_tools',
            removeBottomUnderline: true,
            navigationItems: [
              {
                menuText: 'StoryBook',
                key: 'storybook',
                linkTo: '/storybook',
                linkComponent: resolvePlatform('EmptyScreen', {
                  emptyScreenName: 'StoryBook',
                }),
                removeBottomUnderline: true,
              },
            ],
          },
        ]}
      />
    );
  });
