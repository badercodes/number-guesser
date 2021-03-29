let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

// testing generateTarget works as expected - CONFIRMED
// for (let i = 0; i < 10; i++) console.log(generateTarget());

// Takes 3 parameters, returns TRUE if human wins, or FALSE if PC wins
// Tie ==> Human wins
// Different numbers, the closer to actual secret # wins.

const compareGuesses = (userGuess, computerGuess, secretAnswer) => {
  if (errorUserGuess(userGuess)) {
    alert("Guess number has to be between 0-9 inclusive");
    return -1;
  }
  // console.log(errorUserGuess(userGuess));
  let userResult = Math.abs(secretAnswer - userGuess);
  let computerResult = Math.abs(secretAnswer - computerGuess);

  // console.log(`The userResult is ${userResult}`);
  // console.log(`The computerResult is ${computerResult}`);

  if (userResult > computerResult)
    // computer wins
    return false;
  // user wins in tie or if difference less computer
  else return true;
};

// testing compareGuess
// console.log(compareGuess(7, 7, 10));

// Takes 1 parameter, no retun, updates Global Var human score, computer score;

const updateScore = (winner) => {
  if (winner === "human") humanScore++;
  if (winner === "computer") computerScore++;
};

// testing updateScore
// updateScore("human");
// console.log(`humanScore is ${humanScore}`);
// updateScore("computer");
// console.log(`computerScore is ${computerScore}`);
// updateScore("garbage");
// console.log(`humanScore is ${humanScore} & computerScore is ${computerScore}`);

const advanceRound = () => currentRoundNumber++;

// testing advanceRound
// advanceRound();
// advanceRound();
// console.log(currentRoundNumber);

const errorUserGuess = (guessNumber) => guessNumber < 0 || guessNumber > 9;
