let computerScore = 0;  // track win total. starts at 0 and the loop will increase by 1 in each round
let playerScore = 0;
let message = '';
let newMessage = '';

    // for (let i = 0; i < 5; i++) { // line 14 to 77 plays a single round of computer vs player. put in a 5 round loop.
        function computerPlay() {
            const choice = ['Rock', 'Paper', 'Scissors']; // the array of 3 choices. 0 Rock, 1 Paper, 2 Scissors.
            console.log('array size: ' + choice.length); // shows the size of array, in this case will be 3.
    // Math.random is random number between 0 and 1 not including 1, lots of decimals as well. Then you multiply it by 3. it will give 
    // a random number like this 1.6905987733... but you need it to be an integer. that's where Math.floor comes in.
    // console.log(Math.floor(Math.random() * choices.length)); // math floor rounds down the output of math random * 3 to 
    // the nearest whole integer that is less than the output. (ex: Math.floor(1.6905986987355703) = 1)

            const randomChoice = choice[Math.floor(Math.random() * choice.length)]; // randomizes the array items  
            const randomComputerSelection = randomChoice.toLowerCase(); // need lower case for comparison with player choice
            return randomComputerSelection; // to send the choice to another function or variable
            // if you don't use return, this value is not visible outside this function 
    
    // https://herewecode.io/blog/get-random-element-array-javascript/
        }

        const computerSelection = computerPlay();
        console.log(`computer shows: ${computerSelection}`);
        // console.log(typeof computerSelection);  to check type b/c the if/then's weren't working and want to be sure that 
        // we are comparing strings and not numbers or objects.

function playRound(playerSelection, computerSelection) { // receives the event. notice there is only one argument, the event aka e. notice further below we can still 
    // grab the computer's choice from the function computerPlay() even though we didn't put that in the ( ) of our playRound 
    // function. since our playRound is only receiving e, how did it get the computerSelection? is this bc a function can 
    // grab any var it wants outside of it to use, but any var local to the function can only be seen outside the function when 
    // you use the return? and the computerSelection is the return of the randomComputerSelection from the computerPlay function 
    // but the returned value is received into a global var and that's why the playRound function can make use of it.

    // const playerSelection = e.target.id; // using target.id, we only focus on the id which has the word for rock, paper, scissors 
    // which will be used for comparing the player vs computer when we do our if, else if, else's.
    console.log('Player shows: ' + playerSelection);
    // console.log(typeof playerSelection); // to check type b/c the if/then's weren't working and want to be sure that 
        // we are comparing strings and not numbers or objects.
    console.log('Computer shows: ' + computerSelection);
    // console.log(typeof computerSelection); // this var was never passed to the playRound function. only the event
    // was passed to this function. since this var is a global var, the playRound function can use it

    console.log(`does ${playerSelection} beat ${computerSelection}?`);

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


    // this is testing if computer's choice is handled correclty. when you uncomment this block, the computer's choice is
    // handled correclty.  you commented this out to test the player's choice and those are handled correctly as well. 
    // next is to compare the computer and player choice in one line and see if that works. then build out for each 
    // type of combo and see what happens and then add the scores and show a message

    /*
    if (computerSelection === "rock") {
        console.log('computer is showing rock');
    } 
    else if (computerSelection === "paper") {
        console.log('computer is showing paper');
    }
    else if (computerSelection === "scissors") {
        console.log('computer is showing scissors');
    }
    else {
        console.log('something is weird? because nothing is showing');
    }
    */

    

    // this is testing if player's choice is handled correclty 
    /*
    if (playerSelection === "rock") {
        console.log('player is showing rock');
    }
    else if (playerSelection === "paper") {
        console.log('player is showing paper');
    }
    else if (playerSelection === "scissors") {
        console.log('player is showing scissors');
    }
    else {
        console.log('something is weird? because nothing is showing');
    }
    */
    

    /*  next compare computer and player choice in one line. use something like the below
    if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
        console.log('computer wins bc rock beats scissors');
    } else if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
        console.log('player wins bc paper beats rock');
    } else if ((computerSelection == 'paper') && (playerSelection == 'scissors')) {
        console.log('player wins bc scissors beats paper');
    }
    */


}

// this is testing if you can get the id attribute which has the rock, paper, scissors value which you can compare with 
// the computer's choice and see who wins/loses. the const rock and const paper and const scissors are the only lines 
// you really need to keep bc the lines below the var declaration is just for testing purposes.
const rock = document.querySelector('#rock'); // get the id attribute and put in a var
rock.addEventListener('click', function(e) {  // add event listener with a callback to get the properties of the event
    console.log(e);  // show the entire event
    console.log('Player shows: ' + e.target.id);  // show just the id attribute which is rock
    const playerSelection = rock.id; // put the id attribute in a var
    // console.log('Player shows: ' + player); // show the player's selection
    const singleOutcome = playRound(playerSelection, computerSelection);
    console.log(singleOutcome);
});

const paper = document.querySelector('#paper');   // get the id attribute and put in a var
paper.addEventListener('click', function(e) { // add event listener with a callback to get the properties of the event
    console.log(e);  // show the entire event
    console.log('Player shows: ' + e.target.id);  // show just the id attribute which is paper 
    const playerSelection = paper.id;   // put the id attribute in a var
    // console.log('Player shows: ' + player);   // show the player's selection
    const singleOutcome = playRound(playerSelection, computerSelection);
    console.log(singleOutcome);
});

const scissors = document.querySelector('#scissors'); // get the id attribute and put in a var
scissors.addEventListener('click', function(e) { // add event listener with a callback to get the properties of the event
    console.log(e); // show the entire event
    console.log('Player shows: ' + e.target.id);  // show just the id attribute which is scissors
    const playerSelection = scissors.id;  // put the id attribute in a var
    // console.log('Player shows: ' + player); // show the player's selection
    const singleOutcome = playRound(playerSelection, computerSelection);
    console.log(singleOutcome);
});

/*
rock.addEventListener('click', playRound);  // call the playRound function which passes the entire event
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
*/

/*
if (computerSelection == "rock" && playerSelection == "scissors") {
        message = "You Lose! Rock beats scissors.";
        computerScore = 1 + computerScore;

 // return newMessage = message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(newMessage);
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        message = "You Win! Paper beats rock.";
        playerScore = 1 + playerScore;
        return  newMessage = message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
console.log(newMessage);
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        message = "You Win! Scissors beats paper.";
        playerScore = 1 + playerScore;
         return  newMessage = message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
console.log(newMessage);
    } else if (computerSelection == "paper" && pplayerSelection == "rock") {
        message = "You Lose! Paper beats rock.";
        computerScore = 1 + computerScore;
         return  newMessage = message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
console.log(newMessage);
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        message = "You Win! Rock beats scissors.";
        playerScore = 1 + playerScore;
         return newMessage = message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
console.log(newMessage);
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        message = "You Lose! Scissors beats paper.";
        computerScore = 1 + computerScore;
         return  newMessage = message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
console.log(newMessage);
    } else {
        message = "You tie! You chose the same as the computer.";
         return  newMessage = message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
console.log(newMessage);
    }
*/