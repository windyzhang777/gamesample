import React from 'react';
import {storiesOf} from '@storybook/react';
import CustomizeDoor from '.';
import Provider from '../../utils/Provider';

storiesOf('Customize Door', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('Default view', () => {
    return <CustomizeDoor />;
  });
