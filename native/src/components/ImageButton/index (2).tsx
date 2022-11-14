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

interface ImageButtonProps {
  onPress: () => void;
  source?: ImageSourcePropType;
  Svg?: React.FC<SvgProps>;
  imageStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  text?: string;
}

export const ImageButton = ({
  onPress,
  source,
  imageStyle,
  Svg,
  style,
  text,
  textStyle,
}: ImageButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {source && <Image source={source} style={imageStyle} />}
      {Svg && <Svg style={imageStyle} width="100%" />}
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
