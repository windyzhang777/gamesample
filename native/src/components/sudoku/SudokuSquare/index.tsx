import React from 'react';
import {SafeAreaView, View} from 'react-native';
import SudokuInput from '../SudokuInput';
import styles from './SudokuSquare.stylesheet';

interface SudokuSquareProps {
  game: any;
  xOffset: number;
  yOffset: number;
}

const SudokuSquare = ({game, xOffset, yOffset}: SudokuSquareProps) => {
  const getSquare = (grid: Array<Array<number>>) => {
    return [
      [grid[xOffset][yOffset], grid[xOffset][yOffset + 1], grid[xOffset][yOffset + 2]],
      [grid[xOffset + 1][yOffset], grid[xOffset + 1][yOffset + 1], grid[xOffset + 1][yOffset + 2]],
      [grid[xOffset + 2][yOffset], grid[xOffset + 2][yOffset + 1], grid[xOffset + 2][yOffset + 2]],
    ];
  };

  const fullSquare = getSquare(game.grid);

  return (
    <SafeAreaView>
      <View style={styles.square}>
        {fullSquare.map((row, xIndex) => {
          return (
            <View key={xIndex} style={styles.row}>
              {row.map((cell, yIndex) => {
                return (
                  <SudokuInput
                    key={yIndex}
                    defaultValue={cell.toString()}
                    x={xIndex + xOffset}
                    y={yIndex + yOffset}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default SudokuSquare;
