import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CustomizationFlowNavigation from '.';
import {View} from 'react-native';

storiesOf('Customization Flow Navigation', module)
  .addDecorator((story: () => React.ReactNode) => (
    <View style={{flex: 1, backgroundColor: '#000C2E'}}>{story()}</View>
  ))
  .add('Navigation', () => (
    <CustomizationFlowNavigation
      showNextButton={true}
      showPreviousButton={true}
      onNextCallback={() => {
        console.log('Next was pressed');
      }}
      onPreviousCallback={() => {
        console.log('Previous was pressed');
      }}
    />
  ))
  .add('Just Next', () => (
    <CustomizationFlowNavigation
      showNextButton={true}
      onNextCallback={() => {
        console.log('Next was pressed');
      }}
      onPreviousCallback={() => {
        console.log('Previous was pressed');
      }}
    />
  ))
  .add('Just Previous', () => (
    <CustomizationFlowNavigation
      showNextButton={true}
      onNextCallback={() => {
        console.log('Next was pressed');
      }}
      onPreviousCallback={() => {
        console.log('Previous was pressed');
      }}
    />
  ));
