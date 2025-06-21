import { Quiz } from './Quiz';

export type ResultState = {
  score: number;
  total: number;
  quiz: Quiz;
  userAnswers: Record<number, string>;
};