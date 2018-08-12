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
console.log(kittens.length+'length of kittens')
var newarray=kittens.slice(0)
console.log(kittens.toString()+'items of kittens')
return kittens
}