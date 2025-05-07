import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe-page',
  standalone: false,
  templateUrl: './create-recipe-page.component.html',
  styleUrl: './create-recipe-page.component.css'
})
export class CreateRecipePageComponent {
  constructor(private router: Router) {}

  handleCreate(formValue: any) {
    console.log("Crear Receta", formValue)
    this.router.navigate(["/"])
  }

}
