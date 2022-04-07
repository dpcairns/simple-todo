// IMPORT MODULES under test here:
// import { example } from '../example.ts';
import { didUserWin, getRandomThrow } from '../get-random-throw'

const test = QUnit.test;

test('getRandomThrow()', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const options= ['rock', 'paper', 'scissors'];
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = options.includes(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('didUserWin()', (expect) => {
    
    const expected = 'lose';

    const actual = didUserWin('rock', 'paper')

    expect.equal(actual, expected)
})
