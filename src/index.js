import readlineSync from 'readline-sync'

export const greeting = () => {
  console.log('Welcome to the Brain Games!')

  const userName = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${userName}!`)
  return userName
}

export const question = (expression) => {
  console.log(`Question: ${expression}`)

  const userAnswer = readlineSync.question('Your answer: ')
  return userAnswer
}

export const successfulCompletionGame = userName => console.log(`Congratulations, ${userName}!`)

export const correctAnswer = () => console.log('Correct!')

export const wrongAnswer = (userAnswer, correctAnswer, userName) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
