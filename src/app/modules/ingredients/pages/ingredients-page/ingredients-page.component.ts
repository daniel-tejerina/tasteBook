import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@core/models/ingredient.model';
import { Recipe } from '@core/models/recipe.model';
import recipes from "@data/recipes.json"
import { RecipeService } from '@shared/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingredients-page',
  standalone: false,
  templateUrl: './ingredients-page.component.html',
  styleUrl: './ingredients-page.component.css'
})
export class IngredientsPageComponent implements OnInit {
  recipes: Recipe[] = recipes;

  ingredients: Ingredient[] = []

  constructor(private http: HttpClient, private _recipesService: RecipeService) {};

  ngOnInit(): void {
    this._recipesService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.ingredients = this.getGroupedIngredients(this.recipes);
      },
      error: (err) => {
        console.log("Error al obtener recetas", err);
        Swal.fire("Error", "No se pudieron cargar las recetas", "error")
      }
    })
  }
  

  // Get all ingredients from recipes into a single array
  private getAllIngredients(recipes: Recipe[]): Ingredient[] {
    return recipes.flatMap(recipe => recipe.ingredients)
  }

  // Combines ingredients by name, summing the amounts.
  private sumIngredientsByName(ingredients: Ingredient[]): { [name: string] :number } {
    const result: { [name: string] :number } = {} 
    
    ingredients.forEach(ingredient => {
      const amount = Number(ingredient.amount);
      if (result[ingredient.name]) {
        result[ingredient.name] += amount;
      } else {
        result[ingredient.name] = amount;        
      }
    })

    return result;
  }

  // returns a list of ingredients with the correct format
  private getGroupedIngredients(recipes: Recipe[]): Ingredient[] {
    const allIngredients = this.getAllIngredients(recipes);
    const groupedIngredients = this.sumIngredientsByName(allIngredients);

    return Object.entries(groupedIngredients).map(([name, amount]) => ({ name, amount }));
  }

}
