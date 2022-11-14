import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import EmptyScreen from '../components/screens/EmptyScreen';
import EditYourDoor from '../components/screens/EditYourDoor';
import EditYourAvatar from '../components/screens/EditYourAvatar';
import ExploreNeighborhood from '../components/screens/ExploreNeighborhood';
import ManageTrickOrTreaters from '../components/screens/ManageTrickOrTreaters';
import Logout from '../components/screens/Logout';
import EditToTer from '../components/screens/EditToTer';
import StorybookScreen from '../components/screens/StorybookScreen';
import CandyGiver from '../components/screens/CandyGiver';
import CustomizationItem from '../components/CustomizationItem';
import TriviaGameScreen from '../components/screens/TriviaGameScreen';
import CustomizationItemList from '../components/CustomizationItemList';
import ColorCustomizationIcon from '../components/CustomizationItem/icons/ColorCustomizationIcon';
import ImageCustomizationIcon from '../components/CustomizationItem/icons/ImageCustomizationIcon';
import OnboardingCreateToTerIntro from '../components/screens/OnboardingCreateToTerIntro';
import OnboardingCreateToTerProfileSelection from '../components/screens/OnboardingCreateToTerProfileSelection';
import CustomizedAvatar from '../components/screens/CustomizedAvatar';
import SoundCustomizationIcon from '../components/CustomizationItem/icons/SoundCustomizationIcon';

export default function resolveNative(componentName: string, props?: any) {
  switch (componentName) {
    case 'CustomizeAvatar':
      return <CustomizedAvatar {...props} />;
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
      return <EditToTer {...props} />;
    case 'Logout':
      return <Logout {...props} />;
    case 'StorybookScreen':
      return <StorybookScreen {...props} />;
    case 'CandyGiver':
      return <CandyGiver {...props} />;
    case 'CustomizationItem':
      return <CustomizationItem {...props} />;
    case 'TriviaGame':
      return <TriviaGameScreen {...props} />;
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
      // eslint-disable-next-line react-native/no-inline-styles
      return <Text style={{flex: 1, backgroundColor: 'red'}}>COMPONENT NOT FOUND</Text>;
  }
}
