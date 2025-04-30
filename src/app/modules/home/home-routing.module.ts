import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
    // loadChildren: () => import("@modules/tracks/tracks.module").then(m => m.TracksModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
