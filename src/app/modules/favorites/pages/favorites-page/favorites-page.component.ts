import { Component, OnInit } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';
import recipes from "@data/recipes.json"
import { FavoritesService } from '@shared/services/favorites.service';
import { RecipeService } from '@shared/services/recipe.service';

@Component({
  selector: 'app-favorites-page',
  standalone: false,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit {
  favoriteRecipes!: Recipe[];

  constructor(
    public _favoriteService: FavoritesService,
    private _recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const favoritesIds = this._favoriteService.getFavorites()

    this._recipeService.getRecipes(). subscribe(allRecipes => {
      this.favoriteRecipes = allRecipes.filter(recipe => {
        const id = recipe._id
        const isFavorite = favoritesIds.includes(id!);
        return isFavorite;
      })
      console.log(this.favoriteRecipes)
    })
  }

}
