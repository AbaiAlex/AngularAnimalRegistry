import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatListComponent} from './ui/list/cat-list.component';
import {CatEditedDataComponent} from './ui/edited-data/cat-edited-data.component';
import {CatMenuComponent} from './ui/cat-menu/cat-menu.component';

const routes: Routes = [
  { path: '', component: CatMenuComponent},
  { path: 'list', component: CatListComponent},
  { path: 'editedData/:id', component: CatEditedDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
