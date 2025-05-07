import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import { UpdateRecipePageComponent } from './pages/update-recipe-page/update-recipe-page.component';

const routes: Routes = [
  {
    path: "",
    component: RecipesPageComponent,
    // outlet: "child",
  },
  {
    path: "create",
    component: CreateRecipePageComponent,
    // outlet: "child"
  },
  {
    path: "edit",
    component: UpdateRecipePageComponent,
    // outlet: "child"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
