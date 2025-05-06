import { Component, OnInit } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';
import recipes from "@data/recipes.json"

@Component({
  selector: 'app-recipes-page',
  standalone: false,
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})
export class RecipesPageComponent implements OnInit {
  allRecipes: Recipe[] = recipes;

  ngOnInit(): void {
    
  }

}
