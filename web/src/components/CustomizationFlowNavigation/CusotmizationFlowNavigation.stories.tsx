import React from 'react';
import CustomizationFlowNavigation from '.';
import {storiesOf} from '@storybook/react';

storiesOf('Customization Flow Navigation', module)
  .addDecorator((story: () => React.ReactNode) => (
    <div style={{flex: 1, backgroundColor: '#000C2E'}}>{story()}</div>
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
      showPreviousButton={false}
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
      showNextButton={false}
      showPreviousButton={true}
      onNextCallback={() => {
        console.log('Next was pressed');
      }}
      onPreviousCallback={() => {
        console.log('Previous was pressed');
      }}
    />
  ));
