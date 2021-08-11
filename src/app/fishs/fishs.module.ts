import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FishsRoutingModule } from './fishs-routing.module';
import { FishListComponent } from './ui/list/fish-list.component';
import { FishEditedDataComponent } from './ui/edited-data/fish-edited-data.component';
import {TableModule} from 'primeng/table';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {fishsFeatureName, fishsReducer} from './store/fishs.reducers';
import {FishsEffects} from './store/fishs.effects';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FishsRepository} from './store/fishs.repository';
import {FishsFacade} from './store/fishs.facade';



@NgModule({
  declarations: [
    FishListComponent,
    FishEditedDataComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FishsRoutingModule,
    StoreModule.forFeature(fishsFeatureName, fishsReducer),
    EffectsModule.forFeature([FishsEffects]),
  ],
  providers: [
    FishsEffects, FishsFacade, FishsRepository
  ]
})
export class FishsModule { }
