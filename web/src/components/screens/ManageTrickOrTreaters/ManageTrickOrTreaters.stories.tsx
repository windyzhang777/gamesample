import React from 'react';
import {storiesOf} from '@storybook/react';
import ManageTrickOrTreaters from '.';
import Provider from '../../../utils/Provider';
import {useSelector} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

storiesOf('Manage ToTer', module)
  .addDecorator((story) => (
    <BrowserRouter>
      <Provider story={story()} />
    </BrowserRouter>
  ))
  .add('Normal Toter List', () => {
    return <ManageTrickOrTreaters useSelector={useSelector} />;
  });
