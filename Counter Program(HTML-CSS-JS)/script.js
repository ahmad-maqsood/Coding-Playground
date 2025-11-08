let increase = document.getElementById("incButton");
let decrease = document.getElementById("decButton");
let reset = document.getElementById("resetButton");
let counter = document.getElementById("counter");

let count = 0;   //JS var

increase.onclick = function(){
count++;
counter.textContent = count;
}

decrease.onclick = function(){
count--;
counter.textContent = count;
}

reset.onclick = function(){
count = 0;
counter.textContent = count;

}
