let first,second,third

rand=Math.random()
// First Word
if(rand<=0.33){
first="Crazy";
}
else if(rand>0.33 && rand<=0.66){
    first="Amazing"
}
else if(rand>0.66){
    first="Fire"
}

rand=Math.random()
// Second Word
if(rand<=0.33){
second="Engine"
}
else if(rand>0.33 && rand<=0.66){
    second="Foods"
}
else if(rand>0.66){
    second="Garments"
}

rand=Math.random()
// Third Word
if(rand<=0.33){
    third="Bros"
}
else if(rand>0.33 && rand<=0.66){
    third="Limited"
}
else if(rand>0.66){
    third="Hub"
}

console.log(`${first} ${second} ${third}`)