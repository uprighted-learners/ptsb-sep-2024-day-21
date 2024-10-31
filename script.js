// create potion ingredients
function createIngredient(name, effect) {
    return {
        name: name,
        effect: effect
    }
}

// create potions
function createPotion(name, ingredients) {
    return {
        name: name,
        ingredients: ingredients
    }
}

// initialized ingredients
let unicornHair = createIngredient("unicorn hair", ["sparkle"])
let dragonScale = createIngredient("dragon scale", ["fire resistance"])
let fairyDust = createIngredient("fairy dust", ["flight"])
let nightshade = createIngredient("nightshade", ["sleep"])

// ingredient inventory
let ingredients = [unicornHair, dragonScale, fairyDust, nightshade]

// initialized potions
let robotLegs = createPotion("robot legs", [unicornHair, dragonScale])
let dreamDust = createPotion("fairy wings", [fairyDust, nightshade])
let poison = createPotion("poison", [nightshade, nightshade])
let keanuPotion = createPotion("keanu potion", [unicornHair, dragonScale, fairyDust, nightshade])

// potion recipe inventory
let potionRecipes = [robotLegs, dreamDust, poison, keanuPotion]

// function to lists avialable ingredients of the potions and their effects
function displayInventory(inventory) {
    console.log("Available potions:")
    inventory.forEach(ingredient => {
        console.log(ingredient.name + ": " + ingredient.ingredients.map(ingredient => ingredient.name).join(", "))
    })
}

function createOrder(potionName) {
    return {
        potionName: potionName,
    }
}

function generateOrder() {
    let randomPotion = potionRecipes[Math.floor(Math.random() * potionRecipes.length)]
    return createOrder(randomPotion.name)
}

function displayOrder(order) {
    console.log("Order: " + order.potionName)
}

// function to prompt the user for multiple ingredients
function selectedIngredients() {
    let selectedIngredients = prompt("Enter the ingredients you want to use separated by commas: ")
    return selectedIngredients.split(",").map(name => name.trim())
}

function checkIngredients(selectedIngredients, potion) {
    // Check if each selected ingredient matches required potion ingredients
    return potion.ingredients.every(requiredIngredient =>
        selectedIngredients.some(selectedName => selectedName === requiredIngredient.name)
    );
}

function fulfillOrder(order, selectedIngredients) {
    let potion = potionRecipes.find(potion => potion.name === order.potionName);
    console.log("Order: " + order.potionName);
    if (checkIngredients(selectedIngredients, potion)) {
        console.log("Order fulfilled!");
        console.log("Potion created: " + potion.name);
    } else {
        console.log("Sorry, the ingredients don't match the potion recipe.");
    }
}

// Run the potion shop
fulfillOrder(generateOrder(), selectedIngredients());
