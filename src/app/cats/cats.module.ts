import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatListComponent } from './ui/list/cat-list.component';
import { CatEditedDataComponent } from './ui/edited-data/cat-edited-data.component';
import {TableModule} from 'primeng/table';
import { CatMenuComponent } from './ui/cat-menu/cat-menu.component';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {catsFeatureName, catsReducer} from './store/cats.reducers';
import {CatsEffects} from './store/cats.effects';
import {CatsFacade} from './store/cats.facade';
import {CatsRepository} from './store/cats.repository';


@NgModule({
  declarations: [
    CatListComponent,
    CatEditedDataComponent,
    CatMenuComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    TableModule,
    RouterModule,
    StoreModule.forFeature(catsFeatureName, catsReducer),
    EffectsModule.forFeature([CatsEffects])
  ],
  providers: [
    CatsEffects, CatsFacade, CatsRepository
  ]
})
export class CatsModule { }
