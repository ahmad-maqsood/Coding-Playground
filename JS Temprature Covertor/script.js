const inputBoxData = document.getElementById("inputBox");

const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");

let outputText = document.getElementById("outputText");

let inputTemp;
let outputTemp;

function convert(){

    if(inputBoxData.value.trim() == ""){

        outputText.textContent = "Please enter the temperature."
    }
    else if(toFahrenheit.checked){

        inputTemp = Number(inputBoxData.value);
        outputTemp = (inputTemp * (9/5)) + 32;
        outputText.textContent = outputTemp +"℉";
    }
    else if(toCelcius.checked){
        
        inputTemp = Number(inputBoxData.value);
        outputTemp = (inputTemp - 32) * (5/9);
        outputText.textContent = outputTemp +"℃";
    }
    else{

        outputText.textContent = "Please Select a Unit."
    }
}