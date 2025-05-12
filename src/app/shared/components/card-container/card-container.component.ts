import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '@core/models/recipe.model';
import { FavoritesService } from '@shared/services/favorites.service';
import { RecipeService } from '@shared/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-container',
  standalone: false,
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
  @Input() recipes: Recipe[] = [];
  @Input() searchTerm: string = "";
  filteredRecipes: Recipe[] = [];

  constructor(
    private router: Router, 
    private _recipesService: RecipeService,
    private _favoritesService: FavoritesService
  ) {}

  receiveData(event: string): void {
    console.log("Estoy en el componente CardContainer:", event);
  }

  onView(id: string) {
    console.log(id)
    this.router.navigate(["/recipes/view", id])
  }

  onEdit(id: string) {
    console.log(id)
    this.router.navigate(["/recipes/edit", id])
  }

  onDelete(id: string) {
    console.log("Borrar", id)
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta accion no puede deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.isConfirmed) {
        this._recipesService.deleteRecipe(id).subscribe(() => {
          this._favoritesService.removeFavorite(id);
          Swal.fire("¡Eliminada!", "La receta fue eliminada correctamente.", "success");

          this.loadRecipes();
        })
      }
    })
  }

  loadRecipes() {
    this._recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    })
  }
}
