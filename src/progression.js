import { greeting, question, successfulCompletionGame, correctAnswer, wrongAnswer } from '../src/index.js';

const numericalSequence = (initialNumber, step) => {
  const sequence = [];
  let currentNumber = initialNumber;
  let i = 0;

  while (i <= 9) {
    currentNumber += step;
    sequence.push(currentNumber);
    i += 1;
  }
  return sequence;
};

export const progressionGame = () => {
  const userName = greeting();

  console.log('What number is missing in the progression?');

  let i = 0;
  while (i <= 2) {
    const step = Math.floor(Math.random() * (15 - 2 + 1)) + 2;
    const initialNumberOfSequence = Math.floor(Math.random() * (80 - 1 + 1)) + 2;
    const sequence = numericalSequence(initialNumberOfSequence, step);

    const indexOfHiddenElement = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    const expectedAnswer = sequence[indexOfHiddenElement];

    sequence[indexOfHiddenElement] = '..';

    const userAnswer = question(`${sequence.join(' ')}`);

    if (+userAnswer === expectedAnswer) {
      correctAnswer();
      i += 1;
    } else {
      wrongAnswer(userAnswer, expectedAnswer, userName);
      break;
      }
    }

  if (i > 2) {
      successfulCompletionGame(userName);
  }
};