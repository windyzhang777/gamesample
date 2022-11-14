import React from 'react';
import TrickOrTreatShared, {
  TrickOrTreatProps,
  TrickOrTreatRenderProps,
} from 'shared/containers/screens/TrickOrTreat';
import {Image, ImageBackground, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './TrickOrTreat.stylesheet';

import {ImageButton} from '../ImageButton';

import GothicDoorPng from 'native/src/assets/images/gothic-door.png';
import BrickBackground from 'native/src/assets/images/CustomizationBrick.png';

import TreatIcon from 'native/src/assets/images/treatButton.svg';
import TrickIcon from 'native/src/assets/images/trickButton.svg';

export default function TrickOrTreat(props: TrickOrTreatProps) {
  return (
    <TrickOrTreatShared
      {...props}
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({onSelectTrickClick, onSelectTreatClick}: TrickOrTreatRenderProps) => {
        return (
          <ImageBackground source={BrickBackground} style={styles.ImageBackground}>
            <View style={styles.TrickOrTreat}>
              <Text style={styles.DoorName}>Old Soandso's Door</Text>
              <Image source={GothicDoorPng} style={styles.Door} />
              <View style={styles.TrickOrTreatActions}>
                <ImageButton
                  Svg={TrickIcon}
                  style={styles.TrickOrTreatButton}
                  text="Trick"
                  textStyle={styles.TrickButtonText}
                  onPress={onSelectTrickClick}
                />
                <ImageButton
                  Svg={TreatIcon}
                  style={styles.TrickOrTreatButton}
                  text="Treat"
                  textStyle={styles.TreatButtonText}
                  onPress={onSelectTreatClick}
                />
              </View>
            </View>
          </ImageBackground>
        );
      }}
    />
  );
}
