import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent} from './dogs/dogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DogDetailComponent} from './dog-detail/dog-detail.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AppComponent },
  // { path: 'detail/:id', component: DogDetailComponent },
  { path: 'dogs', component: DashboardComponent},
  { path: 'cats', loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule) },
  { path: 'fishs', loadChildren: () => import('./fishs/fishs.module').then(m => m.FishsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
