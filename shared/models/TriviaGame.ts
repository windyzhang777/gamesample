export interface TriviaAnswer {
  text: string;
  isAnswer: boolean;
}

export interface TriviaQuestion {
  Question: string;
  Answers: TriviaAnswer[];
}

export interface TriviaGame {
  Difficulty1?: TriviaQuestion;
  Difficulty2?: TriviaQuestion;
  Difficulty3?: TriviaQuestion;
  Difficulty4?: TriviaQuestion;
  Difficulty5?: TriviaQuestion;
}

export interface TriviaGameState {
  currentScore: number;
  curDifficultyLevel: string;
  gameData: TriviaGame;
  error: any;
}
