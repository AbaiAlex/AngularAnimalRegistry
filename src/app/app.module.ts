import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import { DetailViewerComponent } from './detail-viewer/detail-viewer.component';
import {SharedModule} from 'primeng/api';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appInitialReducerMap, appInitialState} from './store/app.reducers';
import {AppEffects} from './store/app.effects';
import {AppFacade} from './store/app.facades';
import {BadgeModule} from 'primeng/badge';
import {ToastModule} from 'primeng/toast';
import { HighlightDirective } from './directives/highlight.directive';
import { TableDirective } from './directives/table.directive';
import {DirectivesModule} from './directives/directives.module';




@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailComponent,
    DashboardComponent,
    DetailViewerComponent,
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    CalendarModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}),
    CheckboxModule,
    SharedModule,
    BadgeModule,
    ToastModule,
    StoreModule.forRoot(appInitialReducerMap, {initialState: appInitialState}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AppFacade],
  exports: [
    DetailViewerComponent,
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
