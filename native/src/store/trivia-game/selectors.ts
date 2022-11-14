// accessing the game state for our components
import {get} from 'src/utils/object';
import {TriviaGameState} from 'src/models/TriviaGame';

// Keys - used to search up the path in the reducer slice like door.something
const triviaGameKey = 'triviaGame';

// Selectors
/**
 * Returns the whole door state
 * @param state
 */
export const triviaGameSelector = (state: any): TriviaGameState =>
  get(state, `${triviaGameKey}`, {});
