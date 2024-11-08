//generate a random number between 1 and 100 (including 1 and 100)
function generateRandomNumber(){
    return Math.floor(Math.random()*100 +1);
}


//prompt the user to enter a number
function getPlayerGuess(){
    let input = prompt("Please enter a number", "");

    while(input !== null){

        if(!Number.isInteger(+input)){
            //if the input has letters or converts to a float prompt again
            alert("Your input is invalid!");
            input = prompt("Please enter a number!", "");
        }else if(input.trim().length === 0){
            //if the input is empty prompt again
            alert("Your input is invalid!");
            input = prompt("Please enter a number", "");
        } else{
            return +input; // Return as number
        }

    }

    return null; // Return null if the user cancels
}


//compare the guessed number with the correct number
function checkGuess(inputPlayer, correctNumber){

    if(inputPlayer > correctNumber){
        return "Your guess is too high!";
    }else if(inputPlayer < correctNumber){
        return "Your guess is too low";
    }else{
        return "Correct!";
    }
}


// Assignment 4-bonus
// Bonus function: Calculate the score based on attempts
function calculateScore(attempts, maxScore = 100, scorePenalty = 10) {
    // Calculate score based on remaining attempts
    return maxScore - (attempts - 1) * scorePenalty;
}
//*******************************************************

// Assignment 4-e
// Main game function
function game() {
    // Generate the random number to guess
    const correctNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;
    let playerWon = false;

    console.log("Welcome to the number guessing game!");

    // Loop to give the player multiple attempts to guess
    while (attempts < maxAttempts) {
        // Get the player's guess
        let guess = getPlayerGuess();

        // If the user cancels the prompt (guess is null), end the game
        if (guess === null) {
            console.log("Game canceled by player.");
            return;
        }

        // Increment the attempt counter
        attempts++;

        // Check if the guess is correct
        const result = checkGuess(guess, correctNumber);
        console.log(result);

        // If the guess is correct, break the loop
        if (result === "Correct!") {
            playerWon = true;
            break;
        }
    }

    // After the loop ends, check if the player won or lost
    if (playerWon) {
        console.log(`Congratulations! You've guessed the correct number in ${attempts} attempts.`);
        //bonus
        const score = calculateScore(attempts); // Call bonus function
        console.log(`Your score is: ${score}`);
        //*************************************
    } else {
        console.log(`Game over! You've used all ${maxAttempts} attempts and now you lose! Mwahahahaha.... The correct number was ${correctNumber}.`);
        //bonus
        console.log("Your score is: 0"); // No points if they didn't guess the number
        //*******************************
    }
}

// Start the game
game();
