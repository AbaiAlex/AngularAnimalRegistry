import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from './highlight.directive';
import {TableDirective} from './table.directive';



@NgModule({
  declarations: [HighlightDirective, TableDirective],
  exports: [HighlightDirective, TableDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
