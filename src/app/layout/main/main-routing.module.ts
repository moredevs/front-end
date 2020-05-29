import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [  {  path:'',  component:MainComponent},
{  path:'drink/:id',  component:DetalleComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
