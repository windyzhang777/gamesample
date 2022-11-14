import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './ShineButon.stylesheet';
import ButtonShine from 'src/assets/images/ButtonShine.png';
import {LocalImage} from 'src/components/LocalImage';

export interface ShineButtonProps {
  buttonContent: JSX.Element;
  onPress: () => void;
  backgroundColor?: string;
  underlayColor?: string;
  borderRadius?: number;
  style?: any;
}

export default function ShineButton({
  buttonContent,
  onPress,
  backgroundColor = 'white',
  underlayColor = '#ADADAD',
  borderRadius = 25,
  style = {},
}: ShineButtonProps) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View
        style={[
          styles.ShineButtonUnderlay,
          {
            backgroundColor: underlayColor,
            borderRadius: borderRadius,
          },
        ]}
      />
      <View
        style={[
          styles.ShineButton,
          {
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
          },
        ]}>
        <LocalImage
          source={ButtonShine}
          style={[
            styles.ShineButtonShine,
            {
              right: borderRadius,
            },
          ]}
        />
        {buttonContent}
      </View>
    </TouchableOpacity>
  );
}
