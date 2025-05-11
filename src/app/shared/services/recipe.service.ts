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

  createRecipe(recipe :Recipe) {
    return this.http.post<Recipe>(`${this.apiURL}/recipes/add`, recipe)
  }

  updateRecipe(id: string | null, recipe: Partial<Recipe>): Observable<any> {
    const url = `${this.apiURL}/recipes/edit/${id}`;
    return this.http.put(url, recipe);
  }

  getRecipeById(id: string | null): Observable<Recipe | undefined> {
    console.log("Estoy en el servicio:", id)
    return this.getRecipes().pipe(
      map(recipes => recipes.find(r => r._id === id))
    )
  }

  deleteRecipe(id: string) {
    return this.http.delete(`${this.apiURL}/recipes/delete/${id}`)
  }

  private apiRecipeFormatter(data: any): Recipe {
    return {
      _id: data._id,
      name: data.name,
      description: data.description,
      imagePath: data.imagePath,
      ingredients: data.ingredients
    }
  }
}

