import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';
import recipes from "@data/recipes.json"
import { RecipeService } from '@modules/recipes/services/recipe.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipes-page',
  standalone: false,
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})
export class RecipesPageComponent implements OnInit {
  allRecipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipeData();
  }

  loadRecipeData() :void {
    this._recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.allRecipes = recipes;
      },
      error: (err) => {
        console.error("Error al obtener las recetas", err);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al cargar las recetas. Por favor, intentelo mas tarde.",
          confirmButtonText: "Cerrar"
        })
      },
    })
  }

}
