import React from 'react';
import {storiesOf} from '@storybook/react';
import BackDrop from '.';

storiesOf('BackDrop', module).add('Normal BackDrop', () => {
  return <BackDrop isNavOpen={true} />;
});
