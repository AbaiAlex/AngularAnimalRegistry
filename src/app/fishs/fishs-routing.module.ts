import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FishListComponent} from './ui/list/fish-list.component';
import {FishEditedDataComponent} from './ui/edited-data/fish-edited-data.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: FishListComponent },
  { path: 'editedData/:id', component: FishEditedDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishsRoutingModule { }
