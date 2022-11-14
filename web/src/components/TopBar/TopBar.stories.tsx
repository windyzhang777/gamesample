import React from 'react';
import {storiesOf} from '@storybook/react';
import TopBar from '.';

storiesOf('Top Bar', module).add('Top Bar', () => {
  return (
    <>
      <TopBar
        toggleDrawerCallback={() => {
          console.log('Drawer Open Callback');
        }}
        shareButtonCallback={() => {
          console.log('Share Callback');
        }}
        topBarTitle={'Westgate Hills'}
      />
    </>
  );
});
