//generate a random number between 1 and 100 (including 1 and 100)
function generateRandomNumber(){
    return Math.floor(Math.random()*100 +1);
}

console.log("Generated number: " + generateRandomNumber());

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
            return input
        }

    }

    return null;
}

console.log(getPlayerGuess());

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