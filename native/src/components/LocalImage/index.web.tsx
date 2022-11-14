import {Image} from 'react-native';
import React from 'react';

export const LocalImage = (props) => <Image {...props} source={{uri: props.source}} />;
