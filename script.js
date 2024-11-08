function generateRandomNumber(){
    return Math.floor(Math.random()*100 +1);
}

function getPlayerGuess(){
    let input = prompt("Please enter a number", "");

    while(input !== null){

        if(!Number.isInteger(+input)){
            alert("Your input is invalid!");
            input = prompt("Please enter a number!", "");
        }else if(input.trim().length === 0){
            alert("Your input is invalid!");
            input = prompt("Please enter a number", "");
        } else{
            return +input;
        }

    }

    return null;
}

function checkGuess(inputPlayer, correctNumber){

    if(inputPlayer > correctNumber){
        return "Your guess is too high!";
    }else if(inputPlayer < correctNumber){
        return "Your guess is too low";
    }else{
        return "Correct!";
    }
}

function calculateScore(attempts, maxScore = 100, scorePenalty = 10) {
    return maxScore - (attempts - 1) * scorePenalty;
}

function game() {
    const correctNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;
    let playerWon = false;

    console.log("Welcome to the number guessing game!");

    while (attempts < maxAttempts) {
        let guess = getPlayerGuess();

        if (guess === null) {
            console.log("Game canceled by player.");
            return;
        }

        attempts++;

        const result = checkGuess(guess, correctNumber);
        console.log(result);

        if (result === "Correct!") {
            playerWon = true;
            break;
        }
    }

    if (playerWon) {
        console.log(`Congratulations! You've guessed the correct number in ${attempts} attempts.`);

        const score = calculateScore(attempts);
        console.log(`Your score is: ${score}`);

    } else {
        console.log(`Game over! You've used all ${maxAttempts} attempts and now you lose! Mwahahahaha.... The correct number was ${correctNumber}.`);
        console.log("Your score is: 0"); 
    }
}

game();
