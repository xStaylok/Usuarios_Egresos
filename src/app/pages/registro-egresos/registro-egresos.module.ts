import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';

import { RegistroEgresosPageRoutingModule } from './registro-egresos-routing.module';

import { RegistroEgresosPage } from './registro-egresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEgresosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RegistroEgresosPage]
})
export class RegistroEgresosPageModule {}
