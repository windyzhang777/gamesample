import React from 'react';
import {storiesOf} from '@storybook/react';
import TotorListItem from '.';
import {BrowserRouter} from 'react-router-dom';

storiesOf('Toter List Item', module)
  .addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>)
  .add('One Item', () => (
    <TotorListItem
      toterItem={{
        toterId: 'toter_1',
        toterName: 'Trick or Treater #1',
      }}
    />
  ));
