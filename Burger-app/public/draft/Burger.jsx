// Burger class
class Burger {
  constructor(ingredients, dressings, drink) {
    this.ingredients = ingredients;
    this.dressings = dressings;
    this.drink = drink;
  }

  // Method to calculate the total price of the burger
  calculateTotal() {
    const ingredientsTotal = this.ingredients.reduce(
      (total, ingredient) => total + ingredient.price,
      0
    );
    const dressingsTotal = this.dressings.reduce(
      (total, dressing) => total + dressing.price,
      0
    );
    const drinkTotal = this.drink.price;

    return ingredientsTotal + dressingsTotal + drinkTotal;
  }
}
