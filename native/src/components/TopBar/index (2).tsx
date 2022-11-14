import React from 'react';
import TopBarShared, {TopBarProps} from 'shared/containers/TopBar';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import styles from './TopBar.stylesheet';
import TouchableImage from '../native/TouchableImage';

export interface NativeTopBarProps {
  style?: StyleProp<ViewStyle>;
}

/**
 * This is a native version of rendering
 * @param {TopBarProps} props
 */
export default function TopBar(props: TopBarProps & NativeTopBarProps) {
  //Merge in style overrides
  const topBarStyles = [styles.TopBar, props.style];
  //This is just passing down the properties
  return (
    <TopBarShared
      {...props}
      renderComponent={({drawerOpenCallback, topBarTitle, shareButtonCallback}: TopBarProps) => {
        // This is where the native rendering is happening
        return (
          <View style={topBarStyles}>
            <TouchableImage
              source={require('../../assets/images/topBarDrawerIcon.png')}
              style={styles.TopBarDrawerIcon}
              onPress={drawerOpenCallback}
            />
            <Text style={styles.TopBarTitle}>{topBarTitle}</Text>
            <TouchableImage
              source={require('../../assets/images/topBarShareIcon.png')}
              style={styles.TopBarShareIcon}
              onPress={shareButtonCallback}
            />
          </View>
        );
      }}
    />
  );
}
