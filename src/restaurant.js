function createRestaurant(name){
return restaurants = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
} 
}

function addMenuItem(pizzaRestaurant, bbqPizza){
if (!pizzaRestaurant.menus[bbqPizza.type]) {
    pizzaRestaurant.menus[bbqPizza.type] = []
} 
  if (!pizzaRestaurant.menus[bbqPizza.type].includes(bbqPizza)) {
    pizzaRestaurant.menus[bbqPizza.type].push(bbqPizza);
  }
}



function removeMenuItem(restaurant, itemName, itemType){
var menuType = restaurant.menus[itemType];
if (menuType) {
  for (var i = 0; i < menuType.length; i++) {
    if (menuType[i].name === itemName) {
      menuType.splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
    }
  }
} return `Sorry, we don't sell ${itemName}, try adding a new recipe!`

//use splice here! research splice in array prototype methods.
// splice - if it finds a match based on the function, it will remove the menu item
}

function checkForFood(restaurant, foodItem){
  var menuType = restaurant.menus[foodItem.type];
  if(menuType) {
    for (var i = 0; i < menuType.length; i++) {
    if (menuType[i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`
    }
  } 
} 
return `Sorry, we aren't serving ${foodItem.name} today.`
} 
//restaurant and food item as parameters. the restaurant parameter is an object defined in test
// it checks if foodItem exists within the menu of the restaurant (still unclear here - research more into fucntion)
//if that parameter exists, it iterates (loops) over the menu items of that restaurant. 
//depending on if that item is found in the restaurant, it will return a message that is defined(?) in the test! 
//breathe! rome wasn't built in a day. 

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}