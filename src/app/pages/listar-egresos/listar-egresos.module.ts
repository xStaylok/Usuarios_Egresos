import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { ListarEgresosPageRoutingModule } from './listar-egresos-routing.module';

import { ListarEgresosPage } from './listar-egresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEgresosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ListarEgresosPage]
})
export class ListarEgresosPageModule {}
