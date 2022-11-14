import React from 'react';
import {RenderedComponent} from 'shared/models/RenderedComponent';
import {getGameData} from 'shared/store/trivia-game/actions';
import {get} from 'shared/utils/object';
import {TriviaGameState} from '../../models/TriviaGame';

export interface TriviaGameViewProps {
  gameState: TriviaGameState;
}

/**
 * These are the properties of the Trivia Game
 * These are passed to the dummy rendering component
 */
export interface TriviaGameProps extends RenderedComponent<TriviaGameViewProps> {
  useDispatch?: any;
  useSelector?: any;
  useEffect?: any;
}

function TriviaGameShared({
  renderComponent,
  useDispatch,
  useSelector,
  useEffect,
}: TriviaGameProps): React.ReactElement {
  /**
   * This is where we would implement our react logic
   * Such as using hooks
   */
  const dispatch = useDispatch();
  useEffect(() => {
    getGameData({}, dispatch);
  }, []);
  //dispatching saga for retrieving the game data from the api
  // this returns a promise error, also shouldn't this be in useEffect?
  // accessing the game state for our components
  const triviaGameSelector = (state: any) => get(state, 'triviaGame', {});
  const gameState = useSelector(triviaGameSelector);
  /**
   * This contains all the render properties
   * for what data we pass to be rendered
   */
  const renderProps: TriviaGameViewProps = {
    gameState,
  };
  return renderComponent(renderProps);
}

export default TriviaGameShared;
