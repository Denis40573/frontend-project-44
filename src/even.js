import readlineSync from 'readline-sync'

const isEven = (number) => number % 2 === 0

const correctAnswer = (booleanValue) => {
    return booleanValue === true ? 'yes' : 'no'
}

export const brainEven = () => {
  console.log('Welcome to the Brain Games!')

  const userName = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`)

  for (let i = 0; i <= 2; i += 1) {
      const number = Math.ceil(Math.random() * 100)

      console.log(`Question: ${number}`)

      const userAnswer = readlineSync.question('Your answer: ')
      const validUserAnswer = `${userAnswer.toLowerCase()}`
      const expectedResponse = correctAnswer(isEven(number))

      if (expectedResponse !== validUserAnswer) {
          return console.log(`'${validUserAnswer}' is wrong answer ;(. Correct answer was '${expectedResponse}'.\nsLet's try again, ${userName}!`)
      }
      else {
          console.log('Correct!')
      }
  }
  console.log(`Congratulations, ${userName}!`)
}