import React from 'react';
import {View, Text} from 'react-native';
import styles from './CustomizationHeader.stylesheet';
import customizationHeaderImage from 'src/assets/images/CustomizationHeader.png';
import {LocalImage} from '../LocalImage';

export interface CustomizationHeaderProps {
  headerText: string;
}

export default function CustomizationHeader({headerText}: CustomizationHeaderProps) {
  return (
    <View style={styles.CustomizationHeader}>
      <LocalImage style={styles.CustomizationHeaderImage} source={customizationHeaderImage} />
      <Text style={styles.CustomizationHeaderText}>{headerText}</Text>
    </View>
  );
}
