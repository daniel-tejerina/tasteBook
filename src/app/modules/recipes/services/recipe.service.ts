import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly apiURL = environment.api

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    const url = `${this.apiURL}/recipes/get`
    
    return this.http.get<any[]>(url).pipe(
      map(response => response.map(item => ({
        _id: item._id,
        name: item.name,
        description: item.description,
        imagePath: item.imagePath,
        ingredients: item.ingredients
      })))
    );
  }
}

