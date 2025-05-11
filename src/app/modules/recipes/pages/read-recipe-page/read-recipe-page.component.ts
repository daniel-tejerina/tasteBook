import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '@core/models/recipe.model';
import { RecipeService } from '@shared/services/recipe.service';

@Component({
  selector: 'app-read-recipe-page',
  standalone: false,
  templateUrl: './read-recipe-page.component.html',
  styleUrl: './read-recipe-page.component.css'
})
export class ReadRecipePageComponent implements OnInit {
  recipeId!: string | null;
  recipe!: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private _recipesService: RecipeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get("id");

    console.log("ID recibido", this.recipeId)

    this._recipesService.getRecipeById(this.recipeId).subscribe(data => {
      console.log(data)
      this.recipe = data;
      console.log("Receta", this.recipe)
    })
  }

  onEdit() {
    this.router.navigate(["/recipes/edit", this.recipeId])
  }

  onDelete() {
    console.log("Eliminar")
  }
}
