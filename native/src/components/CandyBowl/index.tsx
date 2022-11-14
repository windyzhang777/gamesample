import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CandyBowlShared, {CandyBowlViewProps} from 'shared/containers/CandyBowl';

import {Text} from 'react-native';

const CandyBowl = () => {
  return (
    <CandyBowlShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({copy}: CandyBowlViewProps) => {
        return <Text>{copy.title}</Text>;
      }}
    />
  );
};

export default CandyBowl;
