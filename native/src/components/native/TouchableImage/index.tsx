import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  TouchableOpacity,
  Image,
} from 'react-native';

interface TouchableImageProps {
  onPress?: (event: GestureResponderEvent) => void;
  source: ImageSourcePropType;
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
      <Image style={imageStyle} source={source} />
    </TouchableOpacity>
  );
}
