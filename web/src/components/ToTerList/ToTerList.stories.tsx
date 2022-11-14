import React from 'react';
import {storiesOf} from '@storybook/react';
import TotorList from '.';
import {BrowserRouter} from 'react-router-dom';

storiesOf('Toter List', module)
  .addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>)
  .add('Normal List', () => (
    <TotorList
      toterList={{
        toterItems: [
          {
            toterId: 'toter_1',
            toterName: 'Trick or Treater #1',
          },
          {
            toterId: 'toter_2',
            toterName: 'Trick or Treater #2',
          },
          {
            toterId: 'toter_3',
            toterName: 'Trick or Treater #3',
          },
          {
            toterId: 'toter_4',
            toterName: 'Trick or Treater #4',
          },
        ],
      }}
    />
  ));
