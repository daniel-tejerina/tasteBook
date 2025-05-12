import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { OrderRecipesPipe } from './pipes/order-recipes.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    SectionHeaderComponent,
    RecipeCardComponent,
    CardContainerComponent,
    AuthFormComponent,
    RecipeFormComponent,
    OrderRecipesPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    // COMPONENTS
    NavBarComponent,
    SectionHeaderComponent,
    RecipeCardComponent,
    CardContainerComponent,
    AuthFormComponent,
    RecipeFormComponent,
    // PIPES
    OrderRecipesPipe
  ]
})
export class SharedModule { }
