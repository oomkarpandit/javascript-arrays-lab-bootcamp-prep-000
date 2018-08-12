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
  var end=kittens.length
var newarray=kittens.splice(end,0,name)
console.log(kittens.toString()+'items of kittens')
console.log(newarray.toString()+'items of newarray')

return newarray
}