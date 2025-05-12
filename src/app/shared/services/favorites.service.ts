import { Injectable } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private localStorageKey = "favorites";

  constructor() { }

  getFavorites(): string[] {
    const data = localStorage.getItem(this.localStorageKey)
    return data ? JSON.parse(data) : [];
  }

  saveFavorites(favorites: string[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(favorites))
  }

  isFavorite(recipe: Recipe): boolean {
    return this.getFavorites().includes(recipe._id!)
  }

  toggleFavorite(recipe: Recipe): boolean {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(recipe._id!);

    if (index !== -1) {
      favorites.splice(index, 1)
      this.saveFavorites(favorites)
      return false;
    } else {
      favorites.push(recipe._id!);
      this.saveFavorites(favorites)
      return true;
    }
  }

  removeFavorite(id: string) {
    const favorites = this.getFavorites().filter(favId => favId !== id);
    this.saveFavorites(favorites);
  }
}
