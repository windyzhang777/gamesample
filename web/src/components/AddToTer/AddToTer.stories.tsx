import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import AddToTer from '.';
import Provider from '../../utils/Provider';
import {useDispatch} from 'react-redux';

storiesOf('AddToTer', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('Totter', () => {
    return <AddToTer useDispatch={useDispatch} useState={useState} />;
  });
