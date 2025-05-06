import { Component, Input } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';

@Component({
  selector: 'app-card-container',
  standalone: false,
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
  @Input() recipes: Recipe[] = [];

  onView() {
    console.log("Ver")
  }

  onEdit() {
    console.log("Editar")
  }

  onDelete() {
    console.log("Borrar")
  }
}
