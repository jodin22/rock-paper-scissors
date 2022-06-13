/* multi-line comments */
// or single line comments
// console.log ("Hello, World!");

// alert ("Did the console.log work?");

// the below is selecting rock paper or scissors by the computer but it will randomize the choice

function game() {
    let computerScore = 0;  // track win total. starts at 0 and the loop will increase by 1 in each round
    let playerScore = 0;

    for (let i = 0; i < 5; i++) { // line 14 to 77 plays a single round of computer vs player. put in a 5 round loop.
        function computerPlay() {
            const choice = ['Rock', 'Paper', 'Scissors']; // the array of 3 choices. 0 Rock, 1 Paper, 2 Scissors.
            console.log(choice.length); // shows the size of array, in this case will be 3.
    // Math.random is random number between 0 and 1 not including 1, lots of decimals as well. Then you multiply it by 3. it will give 
    // a random number like this 1.6905987733... but you need it to be an integer. that's where Math.floor comes in.
    // console.log(Math.floor(Math.random() * choices.length)); // math floor rounds down the output of math random * 3 to 
    // the nearest whole integer that is less than the output. (ex: Math.floor(1.6905986987355703) = 1)

            const randomChoice = choice[Math.floor(Math.random() * choice.length)]; // randomizes the array items  
            const computerSelection = randomChoice.toLowerCase(); // need lower case for comparison with player choice
            return computerSelection; // to send the choice to another function or variable
            // if you don't use return, this value is not visible outside this function 
    
    // https://herewecode.io/blog/get-random-element-array-javascript/
        }

        const computerSelection = computerPlay();  // calls the function and puts the return of the function into a variable
        console.log("Computer shows: " + `${computerSelection}`); // prints the value. 
        
// the below gets the player info and compares with the computer info. shows who the winner is and keeps score.
        const playerInput = prompt("Please input Rock, Paper or Scissors: ", "Scissors");
        const playerSelection = playerInput.toLowerCase(); // convert to lower case for comparison
        console.log("Player shows: " + `${playerSelection}`);

        function playRound(playerSelection, computerSelection) {
            if (computerSelection === "rock" && playerSelection === "scissors") {
                let message = "You Lose! Rock beats scissors.";
                computerScore = 1 + computerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        // console.log(message);
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                let message = "You Win! Paper beats rock.";
                playerScore = 1 + playerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        // console.log(message);
            } else if (computerSelection === "paper" && playerSelection === "scissors") {
                let message = "You Win! Scissors beats paper.";
                playerScore = 1 + playerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        // console.log(message);
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                let message = "You Lose! Paper beats rock.";
                computerScore = 1 + computerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        // console.log(message);
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                let message = "You Win! Rock beats scissors.";
                playerScore = 1 + playerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        // console.log(message);
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                let message = "You Lose! Scissors beats paper.";
                computerScore = 1 + computerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        // console.log(message);
            } else {
                let message = "You tie! You chose the same as the computer.";
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        // console.log(message);
            }
      
        }

console.log(playRound(playerSelection, computerSelection)); // calls the function and prints the return of the function which are 
// messages

    }

}

game();

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





