const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
     const appendCat = [...cats.slice(0,3),"Broom"];
     return appendCat;
}
function prependCat(){
    const prependCat = ["Arnold", ...cats.slice(0,3)];
    return prependCat;
}
function removeLastCat(){
    const removeLastCat = cats.slice(0,2);
    return removeLastCat;
}
function removeFirstCat(){
    const removeFirstCat = cats.slice (1,3);
    return removeFirstCat;s
}
