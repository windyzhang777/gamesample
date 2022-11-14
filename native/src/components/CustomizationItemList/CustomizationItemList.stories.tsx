import React, {useState, useEffect} from 'react';
import {storiesOf} from '@storybook/react-native';
import {NativeRouter} from 'react-router-native';
import CustomizationItemList from '.';
import {View} from 'react-native';
import CustomizationItem from '../CustomizationItem';

const items = Array.from({length: 40}, () => (
  <CustomizationItem
    icon={
      <View
        style={{
          width: 25,
          height: 50,
          backgroundColor: 'black',
        }}
      />
    }
    customizationKey={Math.floor(Math.random() * 1000) + ''}
    customizationValue={Math.floor(Math.random() * 1000) + ''}
  />
));

storiesOf('Customization List', module)
  .addDecorator((story: () => React.ReactNode) => <NativeRouter>{story()}</NativeRouter>)
  .addDecorator((story: () => React.ReactNode) => (
    <View style={{flex: 1, backgroundColor: '#010c2e'}}>{story()}</View>
  ))
  .add('One Item Customization List', () => {
    return (
      <CustomizationItemList useEffect={useEffect} useState={useState} numColumns={4}>
        <CustomizationItem
          customizationKey={'1'}
          customizationValue={''}
          icon={
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'black',
              }}
            />
          }
        />
      </CustomizationItemList>
    );
  })
  .add('Multiple Customization List', () => {
    return (
      <CustomizationItemList useEffect={useEffect} useState={useState} numColumns={4}>
        {items}
      </CustomizationItemList>
    );
  });
