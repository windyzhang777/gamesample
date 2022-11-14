import React, {useState, useEffect} from 'react';
import {storiesOf} from '@storybook/react-native';
import CustomizationMessageSelector from '.';
import {View} from 'react-native';
import {CatalogResponse} from 'src/models/Door';

storiesOf('CustomizationMessageSelector', module)
  .addDecorator((story: () => React.ReactNode) => (
    <View style={{flex: 1, backgroundColor: '#000C2E'}}>{story()}</View>
  ))
  .add('Empty CustomizationMessageSelector', () => {
    return <CustomizationMessageSelector children={[]} />;
  })
  .add('One Item CustomizationMessageSelector', () => {
    return (
      <CustomizationMessageSelector
        children={[{ItemId: 'hello', DisplayName: 'Hello World1'}] as CatalogResponse[]}
      />
    );
  })
  .add('Multiple Items CustomizationMessageSelector', () => {
    return (
      <CustomizationMessageSelector
        children={
          [
            {ItemId: 'hello', DisplayName: 'Hello World1'},
            {ItemId: 'hello1', DisplayName: 'Hello World2'},
            {ItemId: 'hello2', DisplayName: 'Hello World3'},
            {ItemId: 'hello3', DisplayName: 'Hello World4'},
            {ItemId: 'hello4', DisplayName: 'Hello World5'},
            {ItemId: 'hello5', DisplayName: 'Hello World3'},
            {ItemId: 'hello6', DisplayName: 'Hello World6'},
          ] as CatalogResponse[]
        }
      />
    );
  });
