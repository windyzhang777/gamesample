import React, {useEffect} from 'react';
import {storiesOf} from '@storybook/react-native';
import EditYourDoor from '.';
import Provider from '../../../utils/Provider';
import {useSelector, useDispatch} from 'react-redux';

storiesOf('Edit Your Door', module)
  .addDecorator((story: any) => <Provider story={story()} />)
  .addDecorator((story: any) => (
    <div style={{backgroundColor: '#020d2c', height: '95vh'}}>{story()}</div>
  ))
  .add('Normal Edit Your Door', () => {
    return (
      <EditYourDoor useSelector={useSelector} useDispatch={useDispatch} useEffect={useEffect} />
    );
  });
