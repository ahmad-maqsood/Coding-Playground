window.alert("It's a number guessing game. Now, two prompts will appear and you have to enter the minimum and the maximum number and then you'll have to guess the number within that range.")
let minNumber = window.prompt("Enter the minimum number");
let maxNumber = window.prompt("Enter the maximum number");
minNumber = Number(minNumber);
maxNumber = Number(maxNumber);
let attempts = 0;

let randomNumber = (Math.random() * (maxNumber - minNumber + 1) + minNumber  );
//Although, the formula is this : (Math.random() * (maxNumber - minNumber) + minNumber  ). But this will prevent the maximum number from printing when we will use the floor function. Thus, we added 1 in it.
randomNumber = Math.floor(randomNumber);

let introMessage = document.getElementById("introMessage");
let outputMessage = document.getElementById("outputMessage");
let attemptsMessage = document.getElementById("attemptsMessage");
introMessage.textContent = `Enter a number between ${minNumber} to ${maxNumber}`;


document.getElementById("submitBtn").onclick = function(){

    attemptsMessage.textContent = ` Total Attempts : ${++attempts}`;
    let guess = document.getElementById("inputBox").value;
    guess = Number(guess);

    if(isNaN(guess)){
        outputMessage.textContent = "It's not a number, you AssHat";
    }
    else if(guess == ""){
        outputMessage.textContent = "Input can't be empty";
    }
    else if(guess == randomNumber){
        outputMessage.textContent = "Well Done. You guessed the right number";
    }
    else if(guess < minNumber || guess > maxNumber){
        outputMessage.textContent = "The number is not in the given range";
    }
    else if(guess < randomNumber){
        outputMessage.textContent = "Try a little bigger number";
    }
    else if(guess > randomNumber){
        outputMessage.textContent = "Try a little smaller number";
    }

}