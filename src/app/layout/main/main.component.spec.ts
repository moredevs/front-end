import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
 import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { TableFilterPipe } from '../table-filter.pipe';
import { ServiceService } from '../service.service';
import { DetalleComponent } from './detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';



describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, TableFilterPipe,DetalleComponent ],
      imports : [   RouterTestingModule.withRoutes([
        {  path:'',  component:MainComponent},
        {  path:'drink/:id',  component:DetalleComponent 
        }
      ]), FormsModule, NgxSkeletonLoaderModule,AutocompleteLibModule,HttpClientTestingModule, HttpClientModule],
      providers:[ServiceService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
