import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { FormsModule }   from '@angular/forms';
import { TableFilterPipe } from '../table-filter.pipe';
import { DetalleComponent } from './detalle/detalle.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
 
@NgModule({
  declarations: [MainComponent,TableFilterPipe, DetalleComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
