import React from 'react';
import {storiesOf} from '@storybook/react';
import AccountInfoSection from '.';
import demoProfileImage from 'native/src/assets/images/demoProfileImage.png';

storiesOf('AccountInfoSection', module).add('Normal Account Info Section', () => {
  return <AccountInfoSection username={'G-MOM35'} profileImageSource={demoProfileImage} />;
});
