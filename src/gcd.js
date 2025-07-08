import { greeting, question, successfulCompletionGame, correctAnswer, wrongAnswer } from "../src/index.js";

export const getGreatestCommonDivisior = (firstNumber, secondNumber) => {
  let a;
  let b;
  
  if (firstNumber > secondNumber) {
    a = firstNumber;
    b = secondNumber;
  } else {
    a = secondNumber;
    b = firstNumber;
  }
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
 
export const getBiggestDivisior = () => {
  const userName = greeting();
    
  console.log('Find the greatest common divisor of given numbers.');
    
  let i = 0;
  while (i <= 2) {
    const firstNumber = Math.floor(Math.random() * (100 - 10 + 1) + 1);
    const secondNumber = Math.floor(Math.random() * (100 - 10 + 1) + 1);
    const expectedAnswer = getGreatestCommonDivisior(firstNumber, secondNumber);
    
    const userAnswer = question(`${firstNumber} ${secondNumber}`);
    
    if (+ userAnswer === expectedAnswer) {
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

