import React, {useState} from 'react';
import {
  TriviaGameState,
  DifficultyLevel,
  isLastDifficultyLevel,
  TriviaGamePoints,
} from 'src/models/TriviaGame';
import {Alert, Text} from 'react-native';
import ResetModal from 'src/components/ResetModal';
import styles from './TriviaGameQuestions.stylesheet';
import ShineButton from '../../buttons/ShineButton';

interface TriviaGameQuestionsState {
  curDifficultyLevel: DifficultyLevel | string;
  setNextDifficulty: () => void;
  resetTimer: () => void;
  stopTimer: () => void;
  score: number;
  setScore: any;
  resetGame: () => void;
  isGameOver: boolean;
  setIsGameOver: any;
  seconds: number;
}
const TriviaGameQuestions = ({
  gameData,
  score,
  setScore,
  curDifficultyLevel,
  setNextDifficulty,
  stopTimer,
  resetTimer,
  resetGame,
  setIsGameOver,
  isGameOver,
  seconds,
}: TriviaGameState & TriviaGameQuestionsState) => {
  const gameDataItem = gameData[curDifficultyLevel];
  const [message, setMessage] = useState('');

  const getPoints = () => {
    const level = parseInt(curDifficultyLevel[curDifficultyLevel.length - 1], 10);
    const time = seconds >= 7 ? 0 : seconds <= 2 ? 2 : 1;
    return TriviaGamePoints[time][level - 1];
  };

  const updateScore = () => {
    setScore((curScore: number) => curScore + getPoints());
  };

  const getCorrectAnswer = () => {
    const correctAnswer = gameDataItem.Answers.find((answer) => answer.isAnswer);
    return correctAnswer?.text;
  };

  const checkAnswer = (answer: {isAnswer: boolean}) => {
    const newMessage = isLastDifficultyLevel(curDifficultyLevel) ? 'Game Over \n' : '';
    setMessage(newMessage);
    const {isAnswer} = answer;
    if (isLastDifficultyLevel(curDifficultyLevel)) {
      if (isAnswer) {
        updateScore();
        setMessage('Correct!');
      } else {
        setMessage(`Incorrect! The correct answer was ${getCorrectAnswer()}.`);
      }
      setIsGameOver(true);
    }
    stopTimer();
    const handlePress = () => {
      if (isAnswer) {
        updateScore();
      }
      setNextDifficulty();
      resetTimer();
    };
    // send score here
    if (!isLastDifficultyLevel(curDifficultyLevel)) {
      if (isAnswer) {
        Alert.alert(
          'Correct!',
          '',
          [
            {
              text: 'OK',
              onPress: handlePress,
            },
          ],
          {
            cancelable: false,
          },
        );
        // Change this to update user's Spooky Points
      } else {
        Alert.alert(
          `Incorrect! The correct answer was ${getCorrectAnswer()}`,
          '',
          [
            {
              text: 'OK',
              onPress: handlePress,
            },
          ],
          {
            cancelable: false,
          },
        );
      }
    }
  };

  if (!gameDataItem) {
    return null;
  }

  const {Question, Answers} = gameDataItem;
  return (
    <>
      <Text style={styles.QuestionText}>{Question}</Text>
      {Answers.map((answer) => (
        <ShineButton
          key={answer.text}
          borderRadius={25}
          onPress={() => checkAnswer(answer)}
          style={[styles.AnswerButton]}
          underlayColor={'#E23B37'}
          backgroundColor={'#E23B37'}
          buttonContent={<Text style={styles.AnswerButtonText}>{answer.text}</Text>}
        />
      ))}
      <Text style={styles.ScoreText}>Score: {score}</Text>
      {isLastDifficultyLevel(curDifficultyLevel) && seconds === 0 && (
        <ResetModal resetGame={resetGame} message={`Times up! You scored ${score} points!`} />
      )}
      {isGameOver && (
        <ResetModal resetGame={resetGame} message={`${message} You scored ${score} points!`} />
      )}
    </>
  );
};
export default TriviaGameQuestions;
