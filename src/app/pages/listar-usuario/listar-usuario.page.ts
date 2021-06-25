import { Component, OnInit } from '@angular/core';
//importar servicio
import { FormularioService } from '../../servicios/formulario.service'
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.page.html',
  styleUrls: ['./listar-usuario.page.scss'],
})
export class ListarUsuarioPage implements OnInit {
  
  datos_obtenidos;
  constructor(private formularioServicie: FormularioService) { }

  ngOnInit() {
  }
   ionViewWillEnter(){
      this.obtenerDatosFormulario();
   }
   obtenerDatosFormulario(){
      this.formularioServicie.obtenerUsuario().subscribe(
        (response:any) => {
           this.datos_obtenidos = response.usuarios;
        },
        error => {
          alert("Error en la petición")
        }
      )
   }
}
