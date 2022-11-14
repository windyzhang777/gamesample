import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Home from '.';
import Provider from '../../../utils/Provider';

storiesOf('Home Screen', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('Normal Navigation Item', () => {
    return <Home />;
  });
