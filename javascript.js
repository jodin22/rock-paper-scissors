/* multi-line comments */
// or single line comments
// console.log ("Hello, World!");

// alert ("Did the console.log work?");

// the below is selecting rock paper or scissors by the computer but it will randomize the choice
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors']; // the array of 3 choices. 0 Rock, 1 Paper, 2 Scissors.
    // for (const selection of selections) {
    console.log(choice.length); // shows the size of array, in this case will be 3.
    // Math.random is random number between 0 and 1 not including 1, lots of decimals as well. Then you multiply it by 3. it will give 
    // a random number like this 1.6905987733... but you need it to be an integer. that's where Math.floor comes in.
    // console.log(Math.floor(Math.random() * choices.length)); // math floor rounds down the output of math random * 3 to 
    // the nearest whole integer that is less than the output. (ex: Math.floor(1.6905986987355703) = 1)

    const randomChoice = choice[Math.floor(Math.random() * choice.length)]; // randomizes the array items  
    const computerChoice = randomChoice.toLowerCase();
    return computerChoice; // to send the choice to another function or variable 

    // https://herewecode.io/blog/get-random-element-array-javascript/
}

// the below plays a single round. shows who the winner is. 
const playerInput = prompt("Please input Rock, Paper or Scissors: ");
const playerSelection = playerInput.toLowerCase(); // convert to lower case for comparison
// playerSelection.toLowerCase();
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playerSelection);

/*function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        let loseMessage = "You lose! Rock beats scissors.";
        console.log(loseMessage);
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        let winMessage = "You win! Paper beats rock.";
        console.log(winMessage);
    } else {
        console.log("You tie");
    }
}
playRound();*/

// if computerSelection is rock and playerSelection is rock, then show tie
// if computerSelection is rock and playerSelection is scissors, then show computer wins
// if computerSelection is rock and playerSelection is paper, then show player wins




