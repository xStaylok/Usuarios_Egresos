import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioPageRoutingModule } from './registro-usuario-routing.module';

import { RegistroUsuarioPage } from './registro-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUsuarioPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RegistroUsuarioPage]
})
export class RegistroUsuarioPageModule {}
