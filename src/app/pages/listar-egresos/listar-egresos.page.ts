import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service'

@Component({
  selector: 'app-listar-egresos',
  templateUrl: './listar-egresos.page.html',
  styleUrls: ['./listar-egresos.page.scss'],
})
export class ListarEgresosPage implements OnInit {
   datos_obtenidos;
  constructor(private formularioServicie: FormularioService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerDatosFormulario();
 }
 obtenerDatosFormulario(){
    this.formularioServicie.obtenerRegistroFormulario().subscribe(
      (response:any) => {
         this.datos_obtenidos = response.registros;
      },
      error => {
        alert("Error en la petición")
      }
    )
 }
}
