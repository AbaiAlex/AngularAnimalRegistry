import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent} from './dogs/dogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DogDetailComponent} from './dog-detail/dog-detail.component';
import {CatListComponent} from './cats/ui/list/cat-list.component';
import {CatEditedDataComponent} from './cats/ui/edited-data/cat-edited-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DogDetailComponent },
  { path: 'dogs', component: DashboardComponent},
  { path: 'cats', loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }