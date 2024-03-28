function nameMenuItem(name) {
console.log(`Delicious ${name}`)
return `Delicious ${name}`
}


function createMenuItem(name, price, type){ 
  var mealDetails = {
    name: name,
    price: price,
    type: type,
  } 
  return mealDetails
}

function addIngredients(ingredient, arrayOfIngredients) {
  if (!arrayOfIngredients.includes(ingredient)) {
  arrayOfIngredients.push(ingredient);
// console.log(ingredient);
// console.log(arrayOfIngredients);
} 
}

//need a conditional
//if the ingredient is not in array of ingredient, push it to array
//bang operator -- look it up!
//THANKS ROCK!


function formatPrice(price){
  return "$" + price; //adding "$" string to price 
}


function decreasePrice(price){
return price * .90;
}

function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
   return recipe
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}


