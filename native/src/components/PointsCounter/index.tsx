import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import styles from './PointsCounter.stylesheet';
import {LocalImage} from '../LocalImage';

export interface PointsCounter {
  counterIcon: string;
  pointCount: number;
  style?: StyleProp<ViewStyle>;
}

export default function PointsCounter({counterIcon, pointCount, style = {}}: PointsCounter) {
  return (
    <View style={[styles.PointsCounter, style]}>
      <LocalImage source={counterIcon} style={styles.PointsCounterIcon} />
      <View style={styles.PointsCounterCountContainer}>
        <Text style={styles.PointsCounterCount}>{pointCount}</Text>
      </View>
    </View>
  );
}
