import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/Ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('TestRecipe', 'This is a test', 
        'https://www.viewfromprague.com/wp-content/uploads/2020/03/Traditional-Czech-Goulash-Recipe.jpg', 
        [
            new Ingredients('Knedlík', 5),
            new Ingredients('Maso', 1)
        ]),
        new Recipe('AnotherTestRecipe', 'This is a another test', 
        'https://www.viewfromprague.com/wp-content/uploads/2020/03/Traditional-Czech-Goulash-Recipe.jpg',
        [
            new Ingredients('Knedlík', 5),
            new Ingredients('Maso', 1)
        ]),
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}