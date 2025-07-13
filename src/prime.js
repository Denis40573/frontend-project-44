import { greeting, question, successfulCompletionGame, correctAnswer, wrongAnswer } from '../src/index.js'

const isPrimeNumber = (number) => {
  const sqrtOfNumber = Math.round(Math.sqrt(number))

  const isGreaterThenThree = number > 3
  const isEven = number % 2 === 0

  let expectedAnswer = 'no'

  if (number === 2 || number === 3) {
    expectedAnswer = 'yes'
  }
 else if (isGreaterThenThree && !isEven) {
    for (let i = 3; i <= sqrtOfNumber; i += 1) {
      if (number % i === 0) {
        expectedAnswer = 'no'
        break
      }
 else {
        expectedAnswer = 'yes'
      }
    }
  }
  return expectedAnswer
}

export const isPrime = () => {
  const userName = greeting()

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let i = 0
  while (i <= 2) {
    const number = Math.floor(Math.random() * (300 - 2 + 1)) + 2
    const expectedAnswer = isPrimeNumber(number)

    const userAnswer = question(`${number}`)
    const validUserAnswer = `${userAnswer.toLowerCase()}`

    if (validUserAnswer === expectedAnswer) {
      correctAnswer()
      i += 1
    }
 else {
      wrongAnswer(userAnswer, expectedAnswer, userName)
      break
    }
  }

  if (i > 2) {
    successfulCompletionGame(userName)
  }
}