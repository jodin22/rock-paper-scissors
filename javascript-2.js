let computerScore = 0;  // track win total. starts at 0 and the loop will increase by 1 in each round
    let playerScore = 0;

    // for (let i = 0; i < 5; i++) { // line 14 to 77 plays a single round of computer vs player. put in a 5 round loop.
        function computerPlay() {
            const choice = ['Rock', 'Paper', 'Scissors']; // the array of 3 choices. 0 Rock, 1 Paper, 2 Scissors.
            console.log('array size ' + choice.length); // shows the size of array, in this case will be 3.
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

        const computerPreSelection = computerPlay();
        const computerSelection = computerPreSelection + ' is from the computerPlay function';
        console.log(computerSelection);
        // console.log(computerSelection);
/* 

        function playRound(playerSelection, computerSelection) {
            if (computerSelection === "rock" && playerSelection === "scissors") {
                let message = "You Lose! Rock beats scissors.";
                computerScore = 1 + computerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(message);
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                let message = "You Win! Paper beats rock.";
                playerScore = 1 + playerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(message);
            } else if (computerSelection === "paper" && playerSelection === "scissors") {
                let message = "You Win! Scissors beats paper.";
                playerScore = 1 + playerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(message);
            } else if (computerSelection === "paper" && pplayerSelection === "rock") {
                let message = "You Lose! Paper beats rock.";
                computerScore = 1 + computerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(message);
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                let message = "You Win! Rock beats scissors.";
                playerScore = 1 + playerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(message);
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                let message = "You Lose! Scissors beats paper.";
                computerScore = 1 + computerScore;
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(message);
            } else {
                let message = "You tie! You chose the same as the computer.";
                return message + ` Computer win total: ${computerScore}. Player win total: ${playerScore}`;
        console.log(message);
            }
      
        }

*/
        // console.log(playRound(playerSelection, computerSelection)); // calls the function and prints the return of the function which are 
// messages

        const rock = document.querySelector('#rock');
        rock.addEventListener('click', function(e) {
            console.log(e);
            console.log('Player shows: ' + e.target.id);
            playerSelection = rock.id;
            console.log(playerSelection);
        });
        
        const paper = document.querySelector('#paper');
        paper.addEventListener('click', function(e) {
            console.log(e);
            console.log('Player shows: ' + e.target.id);
            playerSelection = paper.id;
            console.log(playerSelection);
        });
        
        const scissors = document.querySelector('#scissors');
        scissors.addEventListener('click', function(e) {
            console.log(e);
            console.log('Player shows: ' + e.target.id);
            playerSelection = scissors.id;
            console.log(playerSelection);
        });

function playRound(e) { // receives the event. notice there is only one argument, the event aka e. notice further below we can still 
    // grab the computer's choice from the function computerPlay() even though we didn't put that in the ( ) of our playRound 
    // function. since our playRound is only receiving e, how did it get the computerSelection? is this bc a function can 
    // grab any var it wants outside of it to use, but any var local to the function can only be seen outside the function when 
    // you use the return?
    
    /* 
    const rock2 = document.querySelector('#rock');
    const paper2 = document.querySelector('#paper');
    const scissors2 = document.querySelector('#scissors');
    */

    const playerSelection = e.target.id; // using target.id, we only focus on the id which has the word for rock, paper, scissors 
    // which will be used for comparing the player vs computer when we do our if, else if, else's.
    console.log('Player shows: ' + playerSelection); // show the player's choice
    console.log('Computer shows: ' + computerSelection); // 
}

rock.addEventListener('click', playRound);  // call the playRound function which passes the event
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
