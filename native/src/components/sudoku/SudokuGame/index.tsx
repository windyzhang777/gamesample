import React, {useState} from 'react';
import {Text, Button, View, SafeAreaView} from 'react-native';

import styles from './SudokuGame.stylesheet';
import {sudokuGameGenerator, sudokuGameSolver} from './sudokuGameUtils';
import SudokuSquare from '../SudokuSquare';

const SudokuGame = () => {
  const [curGame, setGame] = useState({grid: undefined});
  const [isSolvable, setIsSolvable] = useState(false);

  const handleStartPress = () => {
    setGame(sudokuGameGenerator());
    setIsSolvable(true);
  };
  const handleSolvePress = async () => {
    if (curGame.grid) {
      const newGame = {...(await sudokuGameSolver(curGame))};
      setGame(newGame);
      setIsSolvable(false);
    }
  };
  const gridLayout = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  return (
    <SafeAreaView>
      <Text style={styles.Text}>Spooky Sudoku</Text>
      <Button onPress={handleStartPress} title="New Game" />
      <Button onPress={handleSolvePress} disabled={!isSolvable} title="Show Solution" />
      {curGame.grid && (
        <View style={styles.game}>
          {gridLayout.map((row, xIndex) => (
            <View key={xIndex} style={styles.row}>
              {row.map((cell, yIndex) => (
                <SudokuSquare
                  key={yIndex}
                  game={curGame}
                  xOffset={xIndex * 3}
                  yOffset={yIndex * 3}
                />
              ))}
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default SudokuGame;
