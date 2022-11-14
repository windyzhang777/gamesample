import {StyleProp, StyleSheet} from 'react-native';
import React from 'react';
import icon from 'src/assets/images/topBarShareIcon.png';
import TouchableImage from '../TouchableImage';

const styles = StyleSheet.create({
  shareIcon: {
    width: 32,
    height: 32,
    marginRight: 15,
  },
});

interface ShareButtonProps {
  onPress: any;
  style?: any;
}

const ShareButton = ({onPress, style}: ShareButtonProps) => (
  <TouchableImage source={icon} style={[styles.shareIcon, style]} onPress={onPress} />
);

export default ShareButton;
