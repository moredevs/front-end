import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AsideComponent } from './layout/aside/aside.component';
import { ServiceService } from '../app/layout/service.service';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
 
import { CommonModule } from '@angular/common';
 

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
 
    CommonModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
