/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import EmptyScreenShared, {EmptyScreenProps} from 'shared/containers/screens/EmptyScreen';

export default function EmptyScreen(props: EmptyScreenProps) {
  return (
    <EmptyScreenShared
      {...props}
      renderComponent={({emptyScreenName}: EmptyScreenProps) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>
              This is an empty Screen {emptyScreenName ? <>for {emptyScreenName}</> : <></>}
            </Text>
          </View>
        );
      }}
    />
  );
}
