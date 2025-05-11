import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '@core/models/recipe.model';
import { FavoritesService } from '@shared/services/favorites.service';

@Component({
  selector: 'app-recipe-card',
  standalone: false,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe!: Recipe;

  @Output() view = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  isFavorite: boolean = false;

  constructor(public _favoriteService: FavoritesService) {}

  ngOnInit(): void {
    this.isFavorite = this._favoriteService.isFavorite(this.recipe);
  }

  // CRUD

  onViewClick(): void {
    this.view.emit(this.recipe._id);
  }

  onEditClick(): void {
    this.edit.emit(this.recipe._id)
  }

  onDeleteClick() {
    this.delete.emit(this.recipe._id)
  }
}
