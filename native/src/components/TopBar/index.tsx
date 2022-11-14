import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './TopBar.stylesheet';
import SpookPointsIcon from 'src/assets/images/SpookyPointIcon.png';
import CandyPointsIcon from 'src/assets/images/CandyPointsIcon.png';
import TreatBowlIcon from 'src/assets/images/TreatBoxIcon.png';
import ProfileSelectionIcon from 'src/assets/images/ProfileSelectionIcon.png';
import NotificationIcon from 'src/assets/images/NotificationIcon.png';
import {useNavigation} from '@react-navigation/native';
import HamburgerMenuIcon from 'src/components/HamburgerMenuIcon';
import PointsCounter from 'src/components/PointsCounter';
import {LocalImage} from 'src/components/LocalImage';

export interface TopBarProps {
  isCandyGiver: boolean;
  spookyPoints: number;
  candyPoints: number;
  treatBowlPoints: number;
  backgroundColor: string;
}

export default function TopBar({
  isCandyGiver,
  spookyPoints,
  candyPoints,
  treatBowlPoints,
  backgroundColor,
}: TopBarProps): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={[styles.TopBar, {backgroundColor: backgroundColor}]}>
      <HamburgerMenuIcon />
      <PointsCounter counterIcon={SpookPointsIcon} pointCount={spookyPoints} />
      {isCandyGiver ? (
        <PointsCounter counterIcon={TreatBowlIcon} pointCount={treatBowlPoints} />
      ) : (
        <PointsCounter counterIcon={CandyPointsIcon} pointCount={candyPoints} />
      )}

      <LocalImage
        style={{
          width: 32,
          height: 32,
        }}
        source={NotificationIcon}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile Selection');
        }}>
        <LocalImage
          style={{
            flexShrink: 1,
            height: 32,
            width: 100,
            resizeMode: 'contain',
          }}
          source={ProfileSelectionIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
