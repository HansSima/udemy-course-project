import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Hamburger', 'Recept na hamburger', 
    //     'https://www.apetitonline.cz/sites/default/files/styles/middle_cropped/public/bez-nazvu-3_0.jpg', 
    //     [
    //         new Ingredients('Rajce', 5),
    //         new Ingredients('Maso', 1),
    //         new Ingredients('Houska', 1)
    //     ]),
    //     new Recipe('Gulas', 'Recept na gulas', 
    //     'https://www.viewfromprague.com/wp-content/uploads/2020/03/Traditional-Czech-Goulash-Recipe.jpg',
    //     [
    //         new Ingredients('Knedlík', 5),
    //         new Ingredients('Maso', 1)
    //     ]),
    //   ];

    private recipes: Recipe[] = [];

    constructor (private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}