import React, {useEffect, useState, useCallback} from 'react';
import {Text, Alert, SafeAreaView} from 'react-native';

import styles from './TriviaGame.stylesheet';
import TriviaGameQuestions from 'src/components/trivia/TriviaGameQuestions';
import {DifficultyLevel, isLastDifficultyLevel, TriviaGameState} from 'src/models/TriviaGame';

export interface TriviaGameProps {
  getGameData: () => void;
  gameState: TriviaGameState;
}

const TriviaGame = ({getGameData, gameState}: TriviaGameProps) => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const [difficultyLevel, setDifficultyLevel] = useState<string>(DifficultyLevel.One);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const resetGame = useCallback(() => {
    setDifficultyLevel(DifficultyLevel.One);
    setIsActive(true);
    setSeconds(10);
    setScore(0);
    setIsGameOver(false);
    // get new questions
    getGameData();
  }, [getGameData]);

  const resetTimer = () => {
    setSeconds(10);
    setIsActive(true);
  };

  const setNextDifficulty = useCallback(() => {
    if (!isLastDifficultyLevel(difficultyLevel)) {
      const level = parseInt(difficultyLevel[difficultyLevel.length - 1], 10) + 1;
      const newDifficulty = `Difficulty${level}`;
      setDifficultyLevel(newDifficulty);
    } else {
      Alert.alert('Game Over');
    }
  }, [difficultyLevel]);

  const timesUp = useCallback(() => {
    if (!isLastDifficultyLevel(difficultyLevel)) {
      Alert.alert('Times up!', '', [
        {
          onPress: () => {
            setNextDifficulty();
            resetTimer();
          },
        },
      ]);
    }
  }, [difficultyLevel, setNextDifficulty]);

  const stopTimer = () => {
    setIsActive(false);
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((timeRemaining) => timeRemaining - 1);
      }, 1000);
    }
    if (seconds <= 0 && isActive) {
      clearInterval(interval);
      setIsActive(false);
      timesUp();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, timesUp]);

  const shouldRenderGameQuestions = gameState && gameState.gameData;

  return (
    <SafeAreaView style={styles.TriviaGame}>
      <Text style={styles.TimerText}>{seconds.toString()}</Text>
      {shouldRenderGameQuestions && (
        <TriviaGameQuestions
          {...gameState}
          curDifficultyLevel={difficultyLevel}
          setNextDifficulty={setNextDifficulty}
          resetTimer={resetTimer}
          stopTimer={stopTimer}
          score={score}
          setScore={setScore}
          resetGame={resetGame}
          setIsGameOver={setIsGameOver}
          isGameOver={isGameOver}
          seconds={seconds}
        />
      )}
    </SafeAreaView>
  );
};
export default TriviaGame;
