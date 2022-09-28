// if you ever want to edit this so the buttons disappear and a new button appears to reset the game, then look at this
// home/jodin22sams/repos/javascript-basics/number-game-error.html

// the var randomComputerSelection is local to computerPlay() so it needs a return for the rest of the program to use that
// var, which then is named computerSelection as a global var which means other functions can now grab it.

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

// the const computerSelection is moved down to the button click event bc when you click the button, it has to get both the 
// computer's choice and the player's choice at the same time. if you leave the computer choice before the button event, then 
// the computer choice will never change unless you refresh the page.
// const computerSelection = computerPlay(); // call the function but must use a var to receive the returned value from the function
// console.log(`computer shows: ${computerSelection}`); // this returned value is now a public var so any function can now use it.
        // console.log(typeof computerSelection);  to check type b/c the if/then's weren't working and want to be sure that 
        // we are comparing strings and not numbers or objects.

function playRound(playerSelection, computerSelection) { 

    // const playerSelection = e.target.id; // using target.id, we only focus on the id which has the word for rock, paper, scissors 
    // which will be used for comparing the player vs computer when we do our if, else if, else's.
    console.log('Player shows: ' + playerSelection);
    // console.log(typeof playerSelection); // to check type b/c the if/then's weren't working and want to be sure that 
        // we are comparing strings and not numbers or objects.
    console.log('Computer shows: ' + computerSelection);
    // console.log(typeof computerSelection);

    // console.log(`does ${playerSelection} beat ${computerSelection}?`);

    if (computerSelection === "rock" && playerSelection === "scissors") {
        let message = "You Lose this round! Rock beats scissors.";
        computerScore = 1 + computerScore;
        return message // + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        let message = "You Win this round! Paper beats rock.";
        playerScore = 1 + playerScore;
        return message // + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        let message = "You Win this round! Scissors beats paper.";
        playerScore = 1 + playerScore;
        return message // + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        let message = "You Lose this round! Paper beats rock.";
        computerScore = 1 + computerScore;
        return message // + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        let message = "You Win this round! Rock beats scissors.";
        playerScore = 1 + playerScore;
        return message // + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        let message = "You Lose this round! Scissors beats paper.";
        computerScore = 1 + computerScore;
        return message // + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
    } else {
        let message = "It's a tie! Nobody gets a point. You chose the same as the computer.";
        tieScore = 1 + tieScore;
        return message // + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
    }

}

// this is testing if you can get the id attribute which has the rock, paper, scissors value which you can compare with 
// the computer's choice and see who wins/loses. 

// these vars are part of the original html
const playerCard = document.querySelector('.player-card'); // get the class and put in a var.
const computerCard = document.querySelector('.computer-card'); // get the class and put in a var
const player = document.querySelector('.player-choice'); // get the class and put in a var
const computer = document.querySelector('.computer-choice'); // get the class and put in a var
const singleRound = document.querySelector('.single-round'); // get the class and put in a var
const winner = document.querySelector('.winner'); // get the class and put in a var

// these vars create new html that are divs and will add classes to the new divs
const computerWin = document.createElement('div'); // create a div  
const playerWin = document.createElement('div'); // create a div
const message = document.createElement('div'); // create a div

computerWin.classList.add('computer-score'); // add class to the new div
playerWin.classList.add('player-score'); // add class to the new div
message.classList.add('win-message'); // add class to the new div

// these new divs have new classes and are appended to the parent divs
playerCard.appendChild(playerWin); 
computerCard.appendChild(computerWin);

// the score vars are global so the playRound() can grab it and change it but don't need 
// to return it since it is only updating the global var since it is not just local to playRound()
// also the click event can grab the var's value and use it
let computerScore = 0;  // track win total. starts at 0 and the loop will increase by 1 in each round
let playerScore = 0;
let tieScore = 0; // track tie total but don't show it. originally you had it shown but don't need it.

const rock = document.querySelector('#rock'); // get the id attribute and put in a var
rock.addEventListener('click', function(e) {  // event listener with a callback to get the properties of the event
    console.log(e);  // show the entire event
    console.log('Player shows: ' + e.target.id);  // show just the id attribute which is rock
    const playerSelection = rock.id; // put the id attribute in a var
    const computerSelection = computerPlay();  // calls the function which will return the computer's choice. put in a var
    player.textContent = `Player selects: ${playerSelection}`; // shows the player choice in the div
    computer.textContent = `Computer selects: ${computerSelection}`; // shows the computer choice in the div
    // console.log('Player shows: ' + player); // show the player's selection
    const singleOutcome = playRound(playerSelection, computerSelection); // call the function and pass the playerSelection and
    // the computerSelection. must use var to receive the value that the function returns. the player part is from this block of
    // code within the event listener. the computer part is from the computerPlay() that returns a var which is public so any 
    // function can grab it.
    singleRound.textContent = `${singleOutcome}`; // shows the result of that round in the div
    computerWin.textContent = `Computer score: ${computerScore}`; // shows the computer score
    playerWin.textContent = `Player score: ${playerScore}`; // shows the player score
    // tie.textContent = `Tie: ${tieScore}`;  // shows the tie score
    console.log(singleOutcome); // show the outcome of a single round
    if (computerScore >= 5) {
        winner.appendChild(message);
        message.textContent = 'Computer is the winner! Game over.';
        rock.disabled = true;
        rock.style.backgroundColor = 'white';
        paper.disabled = true;
        paper.style.backgroundColor = 'white';
        scissors.disabled = true;
        scissors.style.backgroundColor = 'white';
        // for future reference if you ever want to create a reset button after the game has finished, then 
        // refer to repos/javascript-basics/number-game-error. this has code for adding a new button and restarting a game
        // it also has a loop to blank out the div p's to show a blank screen for a new game
    } else if (playerScore >= 5) {
        winner.appendChild(message);
        message.textContent = 'Player is the winner! Game over.';
        rock.disabled = true;
        rock.style.backgroundColor = 'white';
        paper.disabled = true;
        paper.style.backgroundColor = 'white';
        scissors.disabled = true;
        scissors.style.backgroundColor = 'white';
    }
});

const paper = document.querySelector('#paper');   // get the id attribute and put in a var
paper.addEventListener('click', function(e) { // event listener with a callback to get the properties of the event
    console.log(e);  // show the entire event
    console.log('Player shows: ' + e.target.id);  // show just the id attribute which is paper 
    const playerSelection = paper.id;   // put the id attribute in a var
    const computerSelection = computerPlay(); // calls the function which will return the computer's choice. put in a var
    player.textContent = `Player selects: ${playerSelection}`; // shows the player choice in the div
    computer.textContent = `Computer selects: ${computerSelection}`; // shows the computer choice in the div
    // console.log('Player shows: ' + player);   // show the player's selection
    const singleOutcome = playRound(playerSelection, computerSelection); // call the function and pass the playerSelection and
    // the computerSelection. must use var to receive the value that the function returns. the player part is from this block of
    // code within the event listener. the computer part is from the computerPlay() that returns a var which is public so any 
    // function can grab it.
    singleRound.textContent = `${singleOutcome}`; // shows the result of that round in the div
    computerWin.textContent = `Computer score: ${computerScore}`; // shows the computer score
    playerWin.textContent = `Player score: ${playerScore}`; // shows the player score
    // tie.textContent = `Tie: ${tieScore}`;  // shows the tie score
    console.log(singleOutcome); // show the outcome of a single round
    if (computerScore >= 5) {
        winner.appendChild(message);
        message.textContent = 'Computer is the winner! Game over.';
        rock.disabled = true;
        rock.style.backgroundColor = 'white';
        paper.disabled = true;
        paper.style.backgroundColor = 'white';
        scissors.disabled = true;
        scissors.style.backgroundColor = 'white';
    } else if (playerScore >= 5) {
        winner.appendChild(message);
        message.textContent = 'Player is the winner! Game over.';
        rock.disabled = true;
        rock.style.backgroundColor = 'white';
        paper.disabled = true;
        paper.style.backgroundColor = 'white';
        scissors.disabled = true;
        scissors.style.backgroundColor = 'white';
    }
});

const scissors = document.querySelector('#scissors'); // get the id attribute and put in a var
scissors.addEventListener('click', function(e) { // add event listener with a callback to get the properties of the event
    console.log(e); // show the entire event
    console.log('Player shows: ' + e.target.id);  // show just the id attribute which is scissors
    const playerSelection = scissors.id;  // put the id attribute in a var
    const computerSelection = computerPlay(); // calls the function which will return the computer's choice. put in a var
    player.textContent = `Player selects: ${playerSelection}`;  // shows the player choice
    computer.textContent = `Computer selects: ${computerSelection}`; // shows the computer choice
    // console.log('Player shows: ' + player); // show the player's selection
    const singleOutcome = playRound(playerSelection, computerSelection); // call the function and pass the playerSelection and
    // the computerSelection. must use var to receive the value that the function returns. the player part is from this block of
    // code within the event listener. the computer part is from the computerPlay() that returns a var which is public so any 
    // function can grab it.
    singleRound.textContent = `${singleOutcome}`;  // shows the result of that round
    computerWin.textContent = `Computer score: ${computerScore}`;  // shows the computer score
    playerWin.textContent = `Player score: ${playerScore}`;  // shows the player score
    // tie.textContent = `Tie: ${tieScore}`;  // shows the tie score
    console.log(singleOutcome);  // show the outcome of a single round
    if (computerScore >= 5) {
        winner.appendChild(message);
        message.textContent = 'Computer is the winner! Game over.';
        rock.disabled = true;
        rock.style.backgroundColor = 'white';
        paper.disabled = true;
        paper.style.backgroundColor = 'white';
        scissors.disabled = true;
        scissors.style.backgroundColor = 'white';
    } else if (playerScore >= 5) {
        winner.appendChild(message);
        message.textContent = 'Player is the winner! Game over.';
        rock.disabled = true;
        rock.style.backgroundColor = 'white';
        paper.disabled = true;
        paper.style.backgroundColor = 'white';
        scissors.disabled = true;
        scissors.style.backgroundColor = 'white';
    }
});


/*  
Display the running score, and announce a winner of the game once one player reaches 5 points.

the running score is in a div for now. add some if/then to show a message when either player or computer gets 5 points.

the first hw for this was a loop of 5 rounds. now this hw isn't using a loop but when the points for either computer 
or player equals 5, then the game stops by disabling the button and changing the color of the button

*/

/*
rock.addEventListener('click', playRound);  // call the playRound function which passes the entire event
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
*/

/* before the final iteration of this hw, you had each button's click event call the playRound function like this: 
scissors.addEventListener('click', playRound).

then the playRound function would only have (e) and no other arguments.

function playRound(e) {
    const playerSelection = e.target.id; using target.id, we only focus on the id which has the word for rock, paper, scissors

    then you would bring the computerSelection and it would still work and make the comparison of player vs computer.

    the reason this worked was bc the computerSelection var was a global var and not local to any function. that's why other 
    functions could grab it and make use of it. also the computerSelection is just the final name you gave the var that holds the 
    value that is returned from the computerPlay(). the var inside computerPlay() is local to only that function and no
    other part of the program can use it. that's why you used the return to send it to const computerSelection = computerPlay(). 

    now that the var computerSelection holds the random value from the computerPlay(), this var which is now global can be used 
    by other parts of the program and that is how you are using the add event listener and passing two arguments to the playRound(). 
}  

MAIN IDEA IS THAT FUNCTIONS CAN GRAB ANY VAR THAT IS GLOBAL. BUT ANY VAR INSIDE THE FUNCTION CANNOT BE GRABBED BY OTHER PARTS 
OF THE PROGRAM. IN ORDER TO USE THE LOCAL VAR OF A FUNCTION, YOU MUST USE RETURN. ALSO WHEN CALLING A FUNCTION AND YOU WANT TO 
BE ABLE TO USE THE RETURNED LOCAL VAR, YOU MUST CALL THE FUNCTION AND ASSIGN IT TO A PUBLIC VAR. LIKE THIS: 

const singleOutcome = playRound(playerSelection, computerSelection). this is calling the playRound() and passing 2 arguments.
and the playRound() does something and returns a value. but that returned value must be received in a var. and that is why 
you call the playRound() using const something = playRound() instead of just calling it like this

playRound()


notes below were your original guesses. now you understand better about global and local var's. especially when dealing with 
functions and returning things from a function to another var so that other var can now be used by other parts of the program.

// receives the event. notice there is only one argument, the event aka e. notice further below we can still 
    // grab the computer's choice from the function computerPlay() even though we didn't put that in the ( ) of our playRound 
    // function. since our playRound is only receiving e, how did it get the computerSelection? is this bc a function can 
    // grab any var it wants outside of it to use, but any var local to the function can only be seen outside the function when 
    // you use the return? and the computerSelection is the return of the randomComputerSelection from the computerPlay function 
    // but the returned value is received into a global var and that's why the playRound function can make use of it?

*/
