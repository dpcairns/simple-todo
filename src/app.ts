// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './get-random-throw'
const usersOptions = document.querySelector('#users-options')
const playButton = document.querySelector('#play')
const resultsSpan = document.querySelector('#results')
const tallySpan = document.querySelector('#tally')

// initialize state
let computersThrow = getRandomThrow()
let wins = 0;
let losses = 0;
let games = 0;

// set event listeners to update state and DOM 
playButton.addEventListener('click', () => {
  const usersPlay: HTMLInputElement = usersOptions.querySelector('input:checked')
  
  const gameResult = didUserWin(usersPlay.value, computersThrow)

  if(gameResult === 'draw') {
    games ++;

    updateResults(wins, losses, games, `you played ${usersPlay.value} and tied our ${computersThrow}`)
    computersThrow = getRandomThrow()
  } 
  if(gameResult === 'win') {
    wins ++;
    games ++;

    updateResults(wins, losses, games, `you played ${usersPlay.value} and beat our ${computersThrow}`)
    computersThrow = getRandomThrow()
  } else if( gameResult === 'lose') {
    losses ++;
    games ++;

    updateResults(wins, losses, games, `you played ${usersPlay.value} and lost to our ${computersThrow}`)
    computersThrow = getRandomThrow()
  }
  
})

const updateResults = (w: number, l: number, g: number, message: string) => {
  resultsSpan.textContent = message;

  tallySpan.textContent = `
    wins: ${wins}
    losses: ${losses}
    draws: ${games - (wins + losses)}
    total games: ${games}
  `
}

