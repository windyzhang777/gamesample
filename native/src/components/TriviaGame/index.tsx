import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';

import TriviaGameShared, {TriviaGameViewProps} from 'shared/containers/TriviaGameShared';

const TriviaGameStats = () => {
  return (
    <TriviaGameShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      useEffect={useEffect}
      renderComponent={({gameState}: TriviaGameViewProps) => {
        return (
          <View>
            <Text>{gameState.currentScore}</Text>
          </View>
        );
      }}
    />
  );
};

export default TriviaGameStats;
