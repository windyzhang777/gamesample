import SudokuGame from './sudokuGameClass';

export const sudokuGameGenerator = () => {
  const sudokuInstance = new SudokuGame({mode: '9'});
  console.log('Sudoku generating');
  sudokuInstance.generate();
  return sudokuInstance;
};

export const sudokuGameSolver = async (sudokuInstance: any) => {
  console.log('Sudoku solver starting');
  const sudokuSolvedStatus = sudokuInstance.solve(false);
  console.log('Sudoku Solved:', sudokuSolvedStatus);
  return sudokuInstance;
};
