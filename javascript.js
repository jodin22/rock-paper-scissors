/* multi-line comments */
// or single line comments
// console.log ("Hello, World!");

// alert ("Did the console.log work?");

// the below is selecting rock paper or scissors by the computer but it will randomize the choice

// line 80 was first attempt at game() and loop. didn't work. tried again with just the loop and kept 
// the code for the single round the same (lines 14 to 74). wrapped the code for the single round inside a loop.
// the loop works. next step is to do the game().

function game() {
let computerScore = 0;
let playerScore = 0;
for (let i = 0; i < 5; i++) {
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors']; // the array of 3 choices. 0 Rock, 1 Paper, 2 Scissors.
    // for (const selection of selections) {
    console.log(choice.length); // shows the size of array, in this case will be 3.
    // Math.random is random number between 0 and 1 not including 1, lots of decimals as well. Then you multiply it by 3. it will give 
    // a random number like this 1.6905987733... but you need it to be an integer. that's where Math.floor comes in.
    // console.log(Math.floor(Math.random() * choices.length)); // math floor rounds down the output of math random * 3 to 
    // the nearest whole integer that is less than the output. (ex: Math.floor(1.6905986987355703) = 1)

    const randomChoice = choice[Math.floor(Math.random() * choice.length)]; // randomizes the array items  
    const computerSelection = randomChoice.toLowerCase(); // need lower case for comparison with player choice
    return computerSelection; // to send the choice to another function or variable 
    
    // https://herewecode.io/blog/get-random-element-array-javascript/
}

const computerSelection = computerPlay();  // puts the return of the function into a variable
// console.log(computerPlay()); shows the computer choice but will not pass the value to the playRound
// function.
console.log(computerSelection); // prints the value. maybe console.log(computerPlay()) is sufficient without
// line 30? Not true. Must do it this way, line 30 and 33.

// the below plays a single round. shows who the winner is. 
const playerInput = prompt("Please input Rock, Paper or Scissors: ", "Scissors");
const playerSelection = playerInput.toLowerCase(); // convert to lower case for comparison
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        let message = "You Lose! Rock beats scissors.";
        computerScore = 1 + computerScore;
        return message + ` Computer win: ${computerScore}. Player win: ${playerScore}`;
        // console.log(message);
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        let message = "You Win! Paper beats rock.";
        playerScore = 1 + playerScore;
        return message + ` Computer win: ${computerScore}. Player win: ${playerScore}`;
        
        
        // console.log(message);
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        let message = "You Win! Scissors beats paper.";
        playerScore = 1 + playerScore;
        return message + ` Computer win: ${computerScore}. Player win: ${playerScore}`;
        
        // console.log(message);
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        let message = "You Lose! Paper beats rock.";
        computerScore = 1 + computerScore;
        return message + ` Computer win: ${computerScore}. Player win: ${playerScore}`;
        
        // console.log(message);
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        let message = "You Win! Rock beats scissors.";
        playerScore = 1 + playerScore;
        return message + ` Computer win: ${computerScore}. Player win: ${playerScore}`;
        
        // console.log(message);
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        let message = "You Lose! Scissors beats paper.";
        computerScore = 1 + computerScore;
        return message + ` Computer win: ${computerScore}. Player win: ${playerScore}`;
        
        // console.log(message);
    } else {
        let message = "You tie! You chose the same as the computer.";
        return message + ` Computer win: ${computerScore}. Player win: ${playerScore}`;
        // console.log(message);
    }
      
}

console.log(playRound(playerSelection, computerSelection)); // prints the return of the function which are 
// messages

}

}

game();
// game() calls the playRound() but from inside the game(). plays 5 rounds only so a loop for 5 times

/* function game() { // seems to generate the computer and user input correctly, but 
    // it fails all the conditions and only shows the else part of the tie message. continue troubleshooting
    for (let i = 0; i < 5; i++) {
        computerPlay();
        const playerInput = prompt("Please input Rock, Paper or Scissors: ");
        const playerSelection = playerInput.toLowerCase(); // convert to lower case for comparison
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
    }
} */


// if computerSelection is rock and playerSelection is rock, then show tie
// if computerSelection is rock and playerSelection is scissors, then show computer wins
// if computerSelection is rock and playerSelection is paper, then show player wins
/*
if computer is paper and player is scissors, then show you win
if computer is paper and player is rock, then show you lose
if computer is paper and player is paper, show tie

if computer is scissors and player is rock, then show you win
if computer is scissors and player is paper, then show you lose
if computer is scissors and player is scissors, then show tie

*/





