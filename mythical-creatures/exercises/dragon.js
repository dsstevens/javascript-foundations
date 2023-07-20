function createDragon(dragonName, riderName, dragonTemperment) {
  var dragon = {
    name: dragonName,
    rider: riderName,
    temperment: dragonTemperment,
    timesEaten: 0,
    hungry: true
  }
  return dragon 
  }

function greetRider(dragon) {
  var greeting = `Hi, ${dragon.rider}!`
  return greeting
} 

function eat(dragon) {
  dragon.timesEaten +=1
if (dragon.timesEaten >=3) {
  dragon.hungry = false
}
  return dragon 
}

function findFireBreathers(fireBreathers) {
  var fireDudes = []
  for (var i = 0; i < fireBreathers.length; i++) {
    if (fireBreathers[i].temperment === 'aggressive') {
      fireDudes.push(fireBreathers[i])
    }
  }
  return fireDudes
}
/* 
-i dont remember exactly what we had but here's what works
-remember issues with scope, make sure that the return value is accessible so has to be outside of the for loop, otherwise will stop iterating upon returning once
-declare an empty array var in order to push the desired index values which are aggressive into the output in 107.
-can call that var whatever you want, but make sure that it's the parameter as well. (i'm still not sure why tbh)
-remember that [i] is impt as an accessor to tell JS to specifically look at all the object temperment values in the array
-on line 27 we had allDragons.length but were overlooking line 105 which states that the array is saved in the var fireBreathers
-lastly we need a method to push the specific instances of the array into our new array var and return that 
*/

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}