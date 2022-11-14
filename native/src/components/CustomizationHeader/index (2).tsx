import React from 'react';
import SharedCustomizationHeader, {
  CustomizationHeaderProps,
} from 'shared/containers/CustomizationHeader';
import {View, Image, Text} from 'react-native';
import styles from './CustomizationHeader.stylesheet';
import customizationHeaderImage from '../../assets/images/CustomizationHeader.png';

export default function CustomizationHeader(props: CustomizationHeaderProps) {
  return (
    <SharedCustomizationHeader
      {...props}
      renderComponent={({headerText}: CustomizationHeaderProps) => {
        return (
          <View style={styles.CustomizationHeader}>
            <Image style={styles.CustomizationHeaderImage} source={customizationHeaderImage} />
            <Text style={styles.CustomizationHeaderText}>{headerText}</Text>
          </View>
        );
      }}
    />
  );
}
