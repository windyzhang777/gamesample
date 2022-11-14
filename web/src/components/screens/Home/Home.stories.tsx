import React from 'react';
import {storiesOf} from '@storybook/react';
import Home from '.';
import Provider from '../../../utils/Provider';
import {useSelector} from 'react-redux';

storiesOf('Home Screen', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('Normal Navigation Item', () => {
    return <Home useSelector={useSelector} />;
  });
