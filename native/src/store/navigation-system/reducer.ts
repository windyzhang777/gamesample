import {createSlice} from '@reduxjs/toolkit';
import {NavigationMenuType} from './types';
import resolvePlatform from '../../utils/resolvePlatform';

const initialState: NavigationMenuType = {
  sections: [
    {
      sectionText: '',
      sectionKey: 'sec_0',
      navigationItems: [
        {
          menuText: 'Logout',
          key: 'logout',
          linkTo: '/logout',
          linkComponent: resolvePlatform('Logout', {
            emptyScreenName: 'Logout',
          }),
        },
      ],
    },
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
          menuText: 'Edit Your Avatar',
          key: 'edit_your_avatar',
          linkTo: '/edit_your_avatar',
          linkComponent: resolvePlatform('EditYourAvatar'),
        },
        {
          menuText: 'Manage Trick or Treaters',
          key: 'manage_trick_or_treaters',
          linkTo: '/manage_trick_or_treaters',
          linkComponent: resolvePlatform('ManageTrickOrTreaters'),
        },
        {
          menuText: 'Shopping Cart',
          key: 'shopping_cart',
          linkTo: '/shopping_cart',
          linkComponent: resolvePlatform('ShoppingCart'),
        },
        {
          menuText: 'Buy Candy',
          key: 'buy_candy',
          linkTo: '/buy_candy',
          linkComponent: resolvePlatform('BuyCandy'),
        },
        {
          menuText: 'Buy & Manage Candy (Old)',
          key: 'buy_manage_candy',
          linkTo: '/buy_manage_candy',
          linkComponent: resolvePlatform('CandyGiver'),
        },
        {
          menuText: 'Manage Spooky Points',
          key: 'manage_spooky_points',
          linkTo: '/manage_spooky_points',
          linkComponent: resolvePlatform('EmptyScreen', {
            emptyScreenName: 'Manage Spooky Points',
          }),
        },
        {
          menuText: 'Redeem Candy Credits',
          key: 'redeem_candy_credits',
          linkTo: '/redeem_candy_credits',
          linkComponent: resolvePlatform('RedeemCandyCredits', {
            emptyScreenName: 'Redeem Candy Credits',
          }),
        },
        {
          menuText: 'Trivia Game',
          key: 'trivia_game',
          linkTo: '/trivia_game',
          linkComponent: resolvePlatform('TriviaGame'),
        },
        {
          menuText: 'Onboarding - Create ToTer Intro Screen',
          key: 'onboarding_create_toter_intro',
          linkTo: '/onboarding_create_toter_intro',
          linkComponent: resolvePlatform('OnboardingCreateToTerIntro'),
        },
        {
          menuText: 'Onboarding - Create ToTer Profile Selection',
          key: 'onboarding_create_toter_profile',
          linkTo: '/onboarding_create_toter_profile',
          linkComponent: resolvePlatform('OnboardingCreateToTerProfileSelection'),
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
          menuText: 'Share Your Experience',
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
          linkComponent: resolvePlatform('StorybookScreen'),
          removeBottomUnderline: true,
        },
      ],
    },
  ],
  extraRoutes: [
    {
      key: 'edittoter',
      linkTo: '/EditToTer/:toterId',
      linkComponent: resolvePlatform('EditToTer'),
    },
  ],
};

export const navigationSystem = createSlice({
  name: 'navigation-system',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default navigationSystem.reducer;
