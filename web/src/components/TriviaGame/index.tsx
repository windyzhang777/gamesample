import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TriviaGameShared, {TriviaGameViewProps} from 'shared/containers/TriviaGameShared';

const TriviaGameStats = () => {
  return (
    <TriviaGameShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      useEffect={useEffect}
      renderComponent={({gameState}: TriviaGameViewProps) => {
        return <div>{gameState.currentScore}</div>;
      }}
    />
  );
};

export default TriviaGameStats;
