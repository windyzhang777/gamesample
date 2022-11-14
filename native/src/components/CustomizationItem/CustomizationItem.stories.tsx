import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {NativeRouter} from 'react-router-native';
import CustomizationItem from '.';
import {View} from 'react-native';

storiesOf('Customization Item', module)
  .addDecorator((story: () => React.ReactNode) => <NativeRouter>{story()}</NativeRouter>)
  .addDecorator((story: () => React.ReactNode) => (
    <View style={{flex: 1, backgroundColor: 'black'}}>{story()}</View>
  ))
  .add('Empty Customization Item', () => {
    return <CustomizationItem customizationKey={'test'} customizationValue={'value'} />;
  })
  .add('Selected Customization Item', () => {
    return (
      <CustomizationItem selected={true} customizationKey={'test'} customizationValue={'value'} />
    );
  })
  .add('Black Customization Item', () => {
    return (
      <CustomizationItem
        icon={
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'black',
            }}
          />
        }
        customizationKey={'test'}
        customizationValue={'value'}
      />
    );
  })
  .add('Selected Black Customization Item', () => {
    return (
      <CustomizationItem
        selected={true}
        icon={
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'black',
            }}
          />
        }
        customizationKey={'test'}
        customizationValue={'value'}
      />
    );
  });
