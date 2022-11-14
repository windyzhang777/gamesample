import React, {ReactNode} from 'react';
import {SafeAreaView, View, StyleProp, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  children: ReactNode | ReactNode[];
  testID?: string;
  style?: StyleProp<ViewStyle>;
};

export function Container({children, testID, style}: Props) {
  return (
    <SafeAreaView style={[styles.center, style ? style : {}]} testID={testID}>
      {children}
    </SafeAreaView>
  );
}
