import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';
import recipes from "@data/recipes.json"
import { RecipeService } from '@shared/services/recipe.service';
import { SearchService } from '@shared/services/search.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipes-page',
  standalone: false,
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})
export class RecipesPageComponent implements OnInit, OnDestroy {
  allRecipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  private searchSub!: Subscription;

  constructor(private _recipeService: RecipeService, private _searchService: SearchService) {}

  ngOnInit(): void {
    this.loadRecipeData();

    this.searchSub = this._searchService.searchTerm$.subscribe((term) => {
      if (term.length >= 3) {
        this.filteredRecipes = this.allRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(term.toLowerCase())
        )
      } else {
        this.filteredRecipes = this.allRecipes;
      }
    })
  }

  loadRecipeData() :void {
    this._recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.allRecipes = recipes;
        this.filteredRecipes = recipes;
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

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
  }

}
