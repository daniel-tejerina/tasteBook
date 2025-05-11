import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '@core/models/recipe.model';
import { RecipeService } from '@shared/services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-recipe-page',
  standalone: false,
  templateUrl: './update-recipe-page.component.html',
  styleUrl: './update-recipe-page.component.css'
})
export class UpdateRecipePageComponent implements OnInit {
  recipe!: Recipe | undefined;
  id!: string | null;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private _recipesService: RecipeService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    console.log("ID recibido", this.id)

    this._recipesService.getRecipeById(this.id).subscribe(data => {
      this.recipe = data!;
    })
  }

  handleEdit(formValue: any) {
    console.log("Editar", formValue);
    this._recipesService.updateRecipe(this.id, formValue).subscribe(() => {
      Swal.fire({
        icon: "success",
        title: "Receta actualizada",
        timer: 2000,
        showConfirmButton: false
      }).then(() => this.router.navigate(["/"]))
    })
  }
}
