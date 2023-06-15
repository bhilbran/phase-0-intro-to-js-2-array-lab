// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (name){
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    let newArray = cats.slice(name)
    newArray.push(name)
    return newArray
}
function prependCat(name){
    let newArray = cats.slice(name)
    newArray.unshift(name)
    return newArray
}
function removeLastCat(name){ 
let newArray = cats.slice(name)
    newArray.pop(name)
    return newArray
}       
function removeFirstCat(name){ 
    let newArray = cats.slice(name)
        newArray.shift(name)
        return newArray
    }       