import React from 'react';
import {storiesOf} from '@storybook/react';
import CustomizedAvatar from '.';
import Provider from '../../utils/Provider';

storiesOf('Customized Avatar', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('Default view - blue selected color', () => {
    return <CustomizedAvatar />;
  });
