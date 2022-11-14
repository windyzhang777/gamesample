import React from 'react';
import {Image, ImageStyle} from 'react-native';

export interface StaticAssetProps {
  //uri used to display image
  uri: string;
  styles?: ImageStyle;
}
// component to display image for selected eyes, mouth, etc..
const StaticAsset = ({uri, styles}: StaticAssetProps) => (
  <>{uri ? <Image source={{uri}} style={{...styles}} /> : <></>}</>
);

export default StaticAsset;
