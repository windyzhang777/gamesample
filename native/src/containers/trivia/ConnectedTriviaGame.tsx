import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getGameData as getGameDataAction} from 'src/store/trivia-game/actions';
import {triviaGameSelector} from 'src/store/trivia-game/selectors';
import TriviaGame from 'src/components/trivia/TriviaGame';

const ConnectedTriviaGame = () => {
  /** This is where we would implement our react logic
   * Such as using hooks
   */
  const dispatch = useDispatch();

  // Get initial game data
  useEffect(() => {
    getGameDataAction({}, dispatch);
  }, []);

  const gameState = useSelector(triviaGameSelector);

  const getGameData = () => {
    getGameDataAction({}, dispatch);
  };

  return <TriviaGame gameState={gameState} getGameData={getGameData} />;
};

export default ConnectedTriviaGame;
