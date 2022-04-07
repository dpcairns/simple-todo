export function getRandomThrow(): string {

  const randomNumber = getRandomNumber()

  return convertToThrow(randomNumber)
}

export function getRandomNumber(): number {
  return Math.ceil(Math.random() * 3)
}

export function convertToThrow(n: number): string {
  const options = {
    '1': 'rock',
    '2': 'paper',
    '3': 'scissors',
  }

  return options[n]
}

export function didUserWin(user: string, computer: string): string {
  
  if(user === computer) return 'draw'
  
  const userWins = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper',
  }

  if(userWins[user] === computer) return 'win'
  if(userWins[user] !== computer) return 'lose'
  
}