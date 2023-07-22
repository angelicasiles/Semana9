import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MantenimientosComponent } from './mantenimientos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    MantenimientosComponent,
    ClientesComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    MantenimientosRoutingModule
  ]
})
export class MantenimientosModule { }
