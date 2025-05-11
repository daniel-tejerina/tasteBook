import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "recipes",
    loadChildren: () => import("@modules/recipes/recipes.module").then(m => m.RecipesModule)
  },
  {
    path: "favorites",
    loadChildren: () => import("@modules/favorites/favorites.module").then(m => m.FavoritesModule)
  },
  {
    path: "ingredients",
    loadChildren: () => import("@modules/ingredients/ingredients.module").then(m => m.IngredientsModule)
  },
  {
    path: "**",
    redirectTo: "/recipes"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
