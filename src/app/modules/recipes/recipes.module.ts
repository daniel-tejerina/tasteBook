import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { SharedModule } from "../../shared/shared.module";
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import { UpdateRecipePageComponent } from './pages/update-recipe-page/update-recipe-page.component';
import { ReadRecipePageComponent } from './pages/read-recipe-page/read-recipe-page.component';


@NgModule({
  declarations: [
    RecipesPageComponent,
    CreateRecipePageComponent,
    UpdateRecipePageComponent,
    ReadRecipePageComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
]
})
export class RecipesModule { }
