/* multi-line comments */
// or single line comments
console.log ("Hello, World!");

alert ("Did the console.log work?");

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors']; // the array of choices, 3. 0 Rock, 1 Paper, 2 Scissors.
    // for (const selection of selections) {
    console.log(choices.length); // shows the size of array, in this case will be 3.
    // Math.random is random number between 0 and 1 not including 1, lots of decimals as well. Then you multiply it by 3. it will give 
    // a random number like this 1.6905987733... but you need it to be an integer. that's where Math.floor comes in.
    // console.log(Math.floor(Math.random() * choices.length)); // math floor rounds down the output of math random * 3 to 
    // the nearest whole integer that is less than the output. (ex: Math.floor(1.6905986987355703) = 1)

    const showChoices = choices[Math.floor(Math.random() * choices.length)]; // randomizes the array items  
    console.log(showChoices);

    // https://herewecode.io/blog/get-random-element-array-javascript/
}

computerPlay();

