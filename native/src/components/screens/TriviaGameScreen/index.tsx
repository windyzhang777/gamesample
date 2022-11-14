import React from 'react';
import {View} from 'react-native';
import TriviaGameShared, {TriviaGameProps} from 'shared/containers/screens/TriviaGame';
import styles from './TriviaGame.stylesheet';
import TriviaGame from '../../TriviaGame';

export default function TriviaGameScreen(props: TriviaGameProps) {
  return (
    <TriviaGameShared
      {...props}
      // eslint-disable-next-line no-empty-pattern
      renderComponent={({}: TriviaGameProps) => (
        <View style={styles.TriviaGame}>
          <TriviaGame />
        </View>
      )}
    />
  );
}
