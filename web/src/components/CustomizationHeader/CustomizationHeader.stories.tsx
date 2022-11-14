import React from 'react';
import {storiesOf} from '@storybook/react';
import CustomizationHeader from '.';

storiesOf('Customization Header', module)
  .addDecorator((story: () => React.ReactNode) => (
    <div style={{flex: 1, backgroundColor: '#000C2E', color: '#fff'}}>{story()}</div>
  ))
  .add('Header Example', () => <CustomizationHeader headerText={'Customization Header'} />);
