import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recipe-page',
  standalone: false,
  templateUrl: './update-recipe-page.component.html',
  styleUrl: './update-recipe-page.component.css'
})
export class UpdateRecipePageComponent implements OnInit {
  recipe: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get("id");

    this.recipe = {
      "name": "Ensalada Cesar",
      "description": "Ensalada clasica con aderezo Cesar y crutones",
      "ingredients": [
          {
              "name": "Lechuga",
              "amount": 1
          },
          {
              "name": "Pollo a la parrilla",
              "amount": 1
          },
          {
              "name": "Aderezo Cesar",
              "amount": 1
          },
          {
              "name": "Queso parmesano",
              "amount": 1
          },
          {
              "name": "Crutones",
              "amount": 1
          }
      ],
      "imagePath": "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/755f697272cbcdc6e5df2adb44b1b705.jpg"
    }
  }

  handleEdit(formValue: any) {
    console.log("Editar", formValue);
    this.router.navigate(["/"])
  }
}
