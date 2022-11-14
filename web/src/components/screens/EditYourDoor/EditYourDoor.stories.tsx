import React, {useEffect} from 'react';
import {storiesOf} from '@storybook/react';
import EditYourDoor from '.';
import Provider from '../../../utils/Provider';
import {useSelector, useDispatch} from 'react-redux';

storiesOf('Edit Door', module)
  .addDecorator((story) => <Provider story={story()} />)
  .addDecorator((story) => (
    <div style={{backgroundColor: '#020d2c', height: '95vh'}}>{story()}</div>
  ))
  .add('Normal Edit Door', () => {
    return (
      <EditYourDoor useSelector={useSelector} useDispatch={useDispatch} useEffect={useEffect} />
    );
  });
