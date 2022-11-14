import React from 'react';
import {storiesOf} from '@storybook/react';
import EditToTer from '.';
import Provider from '../../../utils/Provider';
import {useSelector} from 'react-redux';

storiesOf('Edit ToTer', module)
  .addDecorator((story) => <Provider story={story()} />)
  .add('Normal Edit ToTer', () => {
    return (
      <EditToTer
        useSelector={useSelector}
        match={{
          params: {
            toterId: 'toter_1',
          },
        }}
      />
    );
  });
