import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CandyBowlShared, {CandyBowlViewProps} from 'shared/containers/CandyBowl';

const CandyBowl = () => {
  return (
    <CandyBowlShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({copy}: CandyBowlViewProps) => {
        return <div>{copy.title}</div>;
      }}
    />
  );
};

export default CandyBowl;
