// Create potion ingredients
function createIngredient(name, effect) {
    return {
        name: name,
        effect: effect
    };
}

// Create potions
function createPotion(name, ingredients) {
    return {
        name: name,
        ingredients: ingredients
    };
}

// Initialized ingredients
let unicornHair = createIngredient("unicorn hair", "sparkle");
let dragonScale = createIngredient("dragon scale", "fire resistance");
let fairyDust = createIngredient("fairy dust", "flight");
let nightshade = createIngredient("nightshade", "sleep");

// Ingredient inventory
let ingredients = [unicornHair, dragonScale, fairyDust, nightshade];

// Initialized potions
let robotLegs = createPotion("robot legs", [unicornHair, dragonScale]);
let dreamDust = createPotion("fairy wings", [fairyDust, nightshade]);
let poison = createPotion("poison", [nightshade, nightshade]);
let keanuPotion = createPotion("keanu potion", [unicornHair, dragonScale, fairyDust, nightshade]);

// Potion recipe inventory
let potionRecipes = [robotLegs, dreamDust, poison, keanuPotion];

// Function to list available potions and their ingredients
function displayInventory(inventory) {
    console.log("Available potions:");
    inventory.forEach(potion => {
        console.log(potion.name + ": " + potion.ingredients.map(ingredient => ingredient.name).join(", "));
    });
}

// Function to create an order
function createOrder(potionName) {
    return {
        potionName: potionName,
    };
}

// Generate a random order
function generateOrder() {
    let randomPotion = potionRecipes[Math.floor(Math.random() * potionRecipes.length)];
    return createOrder(randomPotion.name);
}

// Display the current order
function displayOrder(order) {
    console.log("Order: " + order.potionName);
}

// Function to prompt the user for multiple ingredients
function getSelectedIngredients() {
    let selectedIngredients = prompt("Enter the ingredients you want to use separated by commas: ");
    return selectedIngredients.split(",").map(name => name.trim());
}

// Function to check if the selected ingredients match the potion recipe
function checkIngredients(selectedIngredients, potion) {
    let selectedEffects = selectedIngredients.flatMap(ingredientName =>
        ingredients.find(item => item.name === ingredientName)?.effect || []
    );

    let potionEffects = potion.ingredients.map(ingredient => ingredient.effect);

    return potionEffects.every(effect => selectedEffects.includes(effect));
}

// Fulfill order
function fulfillOrder(order, selectedIngredients) {
    let potion = potionRecipes.find(potion => potion.name === order.potionName);

    if (checkIngredients(selectedIngredients, potion)) {
        console.log("Order fulfilled!");
        console.log("Ingredients: " + selectedIngredients.join(", "));
        console.log("Effects: " + potion.ingredients.map(ingredient => ingredient.effect).join(", "));
    } else {
        console.log("Sorry, the ingredients don’t match the required potion recipe.");
    }
}

// Start the game






// STRETCH GOALS:
// Introduce Potency Levels for Ingredients
// Allow Players to Learn New Potion Recipes
// Introduce Special Requests with Time Limits
// Create a Potion Quality Scoring System
