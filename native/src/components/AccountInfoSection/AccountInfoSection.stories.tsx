import React from 'react';
import {storiesOf} from '@storybook/react-native';
import AccountInfoSection from '.';

const demoProfileImage = require('../../assets/images/demoProfileImage.png');
storiesOf('Account Info Section', module).add('Normal Account Info Section', () => {
  return <AccountInfoSection username={'G-MOM35'} profileImageSource={demoProfileImage} />;
});
