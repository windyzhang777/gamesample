import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  Image,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {LocalImage} from '../LocalImage';

interface ImageButtonProps {
  imageStyle?: StyleProp<ImageStyle>;
  onPress: () => void;
  source?: any;
  style?: StyleProp<ImageStyle>;
  Svg?: any;
  textStyle?: StyleProp<TextStyle>;
  text?: string;
}

export const ImageButton = ({
  imageStyle,
  onPress,
  source,
  style,
  Svg,
  text,
  textStyle,
}: ImageButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {source && <LocalImage source={source} style={imageStyle} />}
      {Svg && <Svg style={imageStyle} width="100%" />}
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
