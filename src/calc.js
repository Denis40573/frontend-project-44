import { greeting, question, successfulCompletionGame, correctAnswer, wrongAnswer } from '../src/index.js';

const mathOperations = ['+', '-', '*']; 

const userName = greeting();

console.log('What is the result of the expression?');

export const calculationGame = () => {
  let i = 0;
  while (i <= 2) {
    const firstOperand = Math.floor(Math.random() * (99 - 10 + 1) + 1);
    const secondOperand = Math.floor(Math.random() * (99 - 10 + 1) + 1);
    const randomIndex = Math.floor(Math.random() * (2 - 0 + 1));

    const userAnswer = question(`${firstOperand} ${mathOperations[randomIndex]} ${secondOperand}`);

    let expectedAnswer;
    switch (randomIndex) {
      case 0:
        expectedAnswer = firstOperand + secondOperand;
        break;
      case 1:
        expectedAnswer = firstOperand - secondOperand;
        break;
      case 2:
        expectedAnswer = firstOperand * secondOperand;
        break;
    }

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