import React from 'react';
import {View, Text} from 'react-native';
import {AuthenticationHandlerProps} from './AuthenticationHandlerProps';

const AuthenticationHOC = (props: AuthenticationHandlerProps) => (
  <View>
    <Text>ERROR: Not Auth wrapper found for this platform</Text>
    <Text>Props: {props}</Text>
  </View>
);

export default AuthenticationHOC;
