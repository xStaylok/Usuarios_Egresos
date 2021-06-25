import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service'

@Component({
  selector: 'app-listar-egresos',
  templateUrl: './listar-egresos.page.html',
  styleUrls: ['./listar-egresos.page.scss'],
})
export class ListarEgresosPage implements OnInit {
   egresos_obtenidos;
  constructor(private formularioServicie: FormularioService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerEgresoFormulario();
 }
 obtenerEgresoFormulario(){
    this.formularioServicie.obtenerEgreso().subscribe(
      (response:any) => {
         this.egresos_obtenidos = response.egresos;
      },
      error => {
        alert("Error en la petición")
      }
    )
 }
}
