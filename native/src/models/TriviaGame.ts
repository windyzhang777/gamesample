export interface TriviaAnswer {
  text: string;
  isAnswer: boolean;
}

export interface TriviaQuestion {
  Question: string;
  Answers: TriviaAnswer[];
}

export interface TriviaGame {
  [Difficulty: string]: TriviaQuestion;
}

export interface TriviaGameState {
  gameData: TriviaGame;
  error: any;
}

export enum DifficultyLevel {
  One = 'Difficulty1',
  Two = 'Difficulty2',
  Three = 'Difficulty3',
  Four = 'Difficulty4',
  Five = 'Difficulty5',
}

export const isLastDifficultyLevel = (difficultyLevel: DifficultyLevel | string): boolean =>
  difficultyLevel === DifficultyLevel.Five;

export const TriviaGamePoints = [
  [5, 10, 15, 20, 25],
  [3, 5, 10, 15, 20],
  [1, 3, 5, 10, 15],
];
