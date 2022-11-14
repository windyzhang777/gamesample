/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {storiesOf} from '@storybook/react-native';
import TopBar from '.';
import {View, Text} from 'react-native';

storiesOf('Top Bar', module).add('Top Bar', () => {
  return (
    <>
      <TopBar
        drawerOpenCallback={() => {
          console.log('Drawer Open Callback');
        }}
        shareButtonCallback={() => {
          console.log('Share Callback');
        }}
        topBarTitle={'Westgate Hills'}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>This is an empty Screen</Text>
      </View>
    </>
  );
});
