import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import {LocalImage} from '../LocalImage';

interface TouchableImageProps {
  onPress?: (event: GestureResponderEvent) => void;
  source: ImageSourcePropType | string;
  style?: StyleProp<ImageStyle>;
}

export default function TouchableImage({onPress, source, style}: TouchableImageProps) {
  const imageStyle = {
    flex: 1,
    width: undefined,
    height: undefined,
  };
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <LocalImage style={imageStyle} source={source} />
    </TouchableOpacity>
  );
}
