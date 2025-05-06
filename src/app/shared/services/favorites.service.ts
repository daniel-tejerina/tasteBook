import { Injectable } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private localStorageKey = "favorites";

  constructor() { }

  getFavorites(): Recipe[] {
    const data = localStorage.getItem(this.localStorageKey)
    return data ? JSON.parse(data) : [];
  }

  saveFavorites(favorites: Recipe[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(favorites))
  }

  isFavorite(recipe: Recipe): boolean {
    return this.getFavorites().some(fav => fav.name === recipe.name)
  }

  toggleFavorite(recipe: Recipe): boolean {
    const favorites = this.getFavorites();
    const exists = favorites.some(fav => fav.name === recipe.name);

    if (exists) {
      const updated = favorites.filter(fav => fav.name !== recipe.name);
      this.saveFavorites(updated)
      return false;
    } else {
      favorites.push(recipe);
      this.saveFavorites(favorites)
      return true;
    }
  }
}
