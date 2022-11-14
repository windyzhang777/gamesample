import React, {useEffect} from 'react';
import {storiesOf} from '@storybook/react';
import EditYourAvatar from '.';
import Provider from '../../../utils/Provider';
import {useSelector, useDispatch} from 'react-redux';

storiesOf('Edit Your Avatar', module)
  .addDecorator((story: any) => <Provider story={story()} />)
  .addDecorator((story: any) => (
    <div style={{backgroundColor: '#020d2c', height: '95vh'}}>{story()}</div>
  ))
  .add('Normal Edit Your Avatar', () => {
    return (
      <EditYourAvatar useSelector={useSelector} useDispatch={useDispatch} useEffect={useEffect} />
    );
  });
