document.getElementById("myButton").onclick = function(){
    
    let age = document.getElementById(`ageInput`).value;
    let output = document.getElementById(`outputText`);
    
    if (age == ""){          //Checks for empty Input
        output.textContent = `Type Something`;
    }
    else if(isNaN(age)){   //Runs when "age" is not a number.
        output.textContent = `Wrong Input Format`;
    }
    else if(age == 0){
        output.textContent = `You cannot drive. You are just a baby.`;
    }
    else if(age<0){
        output.textContent = `Age can't be negative.`;
    }
    else if(age<18){
        output.textContent = `You cannot drive.`;
    }
    else if(age>=18){
        output.textContent = `You can drive.`;
    }
}