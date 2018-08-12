// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  console.log(kittens.length)
  var end=kittens.length
var newarray=kittens.splice(2,0,name)
return newarray
}