import React from 'react';
import {StyleSheet} from 'react-native';

import BatImage from 'src/assets/images/ActiveBat.png';
import {LocalImage} from 'src/components/LocalImage';

const styles = StyleSheet.create({
  batIcon: {alignSelf: 'center', width: 42, height: 14},
});

const BatIcon = () => <LocalImage source={BatImage} style={styles.batIcon} />;

export default BatIcon;
