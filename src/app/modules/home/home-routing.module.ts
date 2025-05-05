import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: HomePageComponent
  //   // loadChildren: () => import("@modules/tracks/tracks.module").then(m => m.TracksModule)
  // },
  {
    path: "",
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
