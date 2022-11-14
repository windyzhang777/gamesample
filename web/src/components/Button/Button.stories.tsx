import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('Light', () => {
    return (
      <div style={{backgroundColor: '#000', height: '100vh'}}>
        <Button btnColor="light">X</Button>
      </div>
    );
  })
  .add('Dark', () => {
    return <Button btnColor="dark">X</Button>;
  });
