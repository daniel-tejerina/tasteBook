import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SectionHeaderComponent,
    RecipeCardComponent,
    CardContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    SectionHeaderComponent,
    RecipeCardComponent,
    CardContainerComponent
  ]
})
export class SharedModule { }
