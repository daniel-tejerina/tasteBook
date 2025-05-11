import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '@shared/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-recipe-page',
  standalone: false,
  templateUrl: './create-recipe-page.component.html',
  styleUrl: './create-recipe-page.component.css'
})
export class CreateRecipePageComponent {
  constructor(private router: Router, private _recipesService: RecipeService) {}

  handleCreate(formValue: any) {
    console.log("Crear Receta", formValue)
    this._recipesService.createRecipe(formValue).subscribe({
      next: () => {
        Swal.fire({
          icon: "success",
          title: "Receta creada",
          text: "La receta fue guardada exitosamente",
          timer: 2000,
          showCancelButton:false
        }).then(() => {
          this.router.navigate(["/"])
        })
      },
      error: (err) => {
        console.error("Error al crear receta", err)
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al guardar la receta"
        })
      }
    })
  }

}
