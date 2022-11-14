import React from 'react';
import {storiesOf} from '@storybook/react';
import CustomizedDoor from '.';
import Provider from '../../utils/Provider';

storiesOf('Customized Door', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('Default view - blue selected color', () => {
    return <CustomizedDoor />;
  });
