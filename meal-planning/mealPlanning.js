const { totalmem } = require("os")

function createMeal(mealType, calories){
  var meals = {
    type: mealType,
    calorieGoal: calories,
    dishes: []
  }
  return meals
} 

function addDish(meals, mealObj){
  if(mealObj.calories <= meals.calorieGoal){
    meals.dishes.push(mealObj)
  }
  meals.calorieGoal = meals.calorieGoal - mealObj.calories
 
  return meals
}

function calculateCalories(meals){
  //for loop solution
  // let totalCals = 0
  
  // for (let i = 0; i < meals.dishes.length; i++) {
  //   totalCals += meals.dishes[i].calories
  // }
  // return `${meals.type} has a total of ${totalCals} calories.`

  reduce solution
   return `${meals.type} has a total of ${meals.dishes.reduce((totalCals, curr) => totalCals + curr.calories, 0)} calories.`

}


calculateCalories
module.exports = { 
  createMeal, 
  addDish, 
  calculateCalories
}