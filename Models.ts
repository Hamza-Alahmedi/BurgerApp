// Define a base class for menu items
class MenuItem {
  constructor(public name: string, public price: number) {}
}

// Ingredient class extends MenuItem
class Ingredient extends MenuItem {}

// Dressing class extends MenuItem
class Dressing extends MenuItem {}

// Drink class extends MenuItem
class Drink extends MenuItem {}

// Burger class
class Burger {
  ingredients: Ingredient[];
  dressings: Dressing[];
  drink: Drink;

  constructor(ingredients: Ingredient[], dressings: Dressing[], drink: Drink) {
    this.ingredients = ingredients;
    this.dressings = dressings;
    this.drink = drink;
  }

  // Method to calculate the total price of the burger
  calculateTotal(): number {
    const ingredientsTotal = this.ingredients.reduce((total, ingredient) => total + ingredient.price, 0);
    const dressingsTotal = this.dressings.reduce((total, dressing) => total + dressing.price, 0);
    const drinkTotal = this.drink.price;

    return ingredientsTotal + dressingsTotal + drinkTotal;
  }
}

// Mock data for Ingredients
const ingredients: Ingredient[] = [
  new Ingredient('Bun', 1.5),
  new Ingredient('Patty', 3.0),
  new Ingredient('Lettuce', 0.5),
  new Ingredient('Tomato', 0.7),
  new Ingredient('Cheese', 1.0),
];

// Mock data for Dressings
const dressings: Dressing[] = [
  new Dressing('Ketchup', 0.2),
  new Dressing('Mayo', 0.3),
  new Dressing('Mustard', 0.4),
  new Dressing('BBQ Sauce', 0.5),
  new Dressing('Thousand Island', 0.6),
];

// Mock data for Drinks
const drinks: Drink[] = [
  new Drink('Coke', 1.0),
  new Drink('Pepsi', 1.0),
  new Drink('Sprite', 1.0),
  new Drink('Iced Tea', 1.5),
  new Drink('Lemonade', 1.5),
];

// Mock data for Burger
const burger = new Burger(ingredients.slice(0, 3), dressings.slice(0, 2), drinks[0]);

// Calculate and log the total price
const totalPrice = burger.calculateTotal();
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
