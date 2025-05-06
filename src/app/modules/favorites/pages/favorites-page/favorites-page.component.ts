import { Component, OnInit } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';
import recipes from "@data/recipes.json"
import { FavoritesService } from '@shared/services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  standalone: false,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit {
  favoriteRecipes!: Recipe[];

  constructor(public _favoriteService: FavoritesService) {}

  ngOnInit(): void {
    this.favoriteRecipes = this._favoriteService.getFavorites()
  }

}
