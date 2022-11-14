import React, {useState, useEffect} from 'react';
import EmptyScreen from '../components/screens/EmptyScreen';
import EditYourDoor from '../components/screens/EditYourDoor';
import EditYourAvatar from '../components/screens/EditYourAvatar';
import ExploreNeighborhood from '../components/screens/ExploreNeighborhood';
import ManageTrickOrTreaters from '../components/screens/ManageTrickOrTreaters';
import Logout from '../components/screens/Logout';
import EditToTer from '../components/screens/EditToTer';
import {useRouteMatch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CandyGiver from '../components/screens/CandyGiver';
import CustomizationItem from '../components/CustomizationItem';
import CustomizationItemList from '../components/CustomizationItemList';
import ColorCustomizationIcon from '../components/CustomizationItem/icons/ColorCustomizationIcon';
import ImageCustomizationIcon from '../components/CustomizationItem/icons/ImageCustomizationIcon';
import CustomizeAvatar from '../components/CustomizeAvatar';
import SoundCustomizationIcon from '../components/CustomizationItem/icons/SoundCustomizationIcon';
import TriviaGameScreen from '../components/screens/TriviaGameScreen';
import OnboardingCreateToTerIntro from '../components/screens/OnboardingCreateToTerIntro';
import OnboardingCreateToTerProfileSelection from '../components/screens/OnboardingCreateToTerProfileSelection';

export default function resolveWeb(componentName: string, props?: any) {
  switch (componentName) {
    case 'CustomizeAvatar':
      return <CustomizeAvatar {...props} />;
    case 'EmptyScreen':
      return <EmptyScreen {...props} />;
    case 'EditYourDoor':
      return <EditYourDoor {...props} />;
    case 'EditYourAvatar':
      return <EditYourAvatar {...props} />;
    case 'ExploreNeighborhood':
      return <ExploreNeighborhood {...props} />;
    case 'ManageTrickOrTreaters':
      return <ManageTrickOrTreaters {...props} />;
    case 'EditToTer':
      return <EditToTer {...props} useRouteMatch={useRouteMatch} useSelector={useSelector} />;
    case 'Logout':
      return <Logout {...props} />;
    case 'TriviaGame':
      return <TriviaGameScreen {...props} />;
    case 'StorybookScreen':
      return (
        <EmptyScreen
          emptyScreenName={'Storybook. Storybook needs to be run via `yarn storybook:web` for web'}
        />
      );
    case 'CandyGiver':
      return <CandyGiver {...props} />;
    case 'CustomizationItem':
      return <CustomizationItem {...props} />;
    case 'CustomizationItemList':
      return <CustomizationItemList useEffect={useEffect} useState={useState} {...props} />;
    case 'ColorCustomizationIcon':
      return <ColorCustomizationIcon {...props} />;
    case 'ImageCustomizationIcon':
      return <ImageCustomizationIcon {...props} />;
    case 'OnboardingCreateToTerIntro':
      return <OnboardingCreateToTerIntro {...props} />;
    case 'OnboardingCreateToTerProfileSelection':
      return <OnboardingCreateToTerProfileSelection {...props} />;
    case 'SoundCustomizationIcon':
      return <SoundCustomizationIcon {...props} />;
    default:
      return (
        <h1 style={{width: '100%', height: '100%', backgroundColor: 'red'}}>COMPONENT NOT FOUND</h1>
      );
  }
}
