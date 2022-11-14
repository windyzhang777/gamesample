import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CustomizationHeader from '.';
import {View} from 'react-native';

storiesOf('Customization Header', module)
  .addDecorator((story: () => React.ReactNode) => (
    <View style={{flex: 1, backgroundColor: '#000C2E'}}>{story()}</View>
  ))
  .add('Header Example', () => <CustomizationHeader headerText={'Customization Header'} />);
