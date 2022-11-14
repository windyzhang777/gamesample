import TriviaGameShared, {TriviaGameProps} from 'shared/containers/screens/TriviaGame';
import React from 'react';
import TriviaGame from '../../TriviaGame';

export default function TriviaGameScreen(props: TriviaGameProps) {
  return (
    <TriviaGameShared
      {...props}
      // eslint-disable-next-line no-empty-pattern
      renderComponent={({}: TriviaGameProps) => <TriviaGame />}
    />
  );
}
