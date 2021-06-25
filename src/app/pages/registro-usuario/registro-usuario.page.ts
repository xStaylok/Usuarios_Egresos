import { Component, OnInit } from '@angular/core';
//importar servicio
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos {
 constructor(
   public nombre,
   public apellido,
   public rut,
   public correo,
   public passsword,
 ){}

}

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  datos_formulario;
  constructor(private formularioServicie: FormularioService ) { 
    this.datos_formulario = new EnviarDatos("", "" , "00000000-0", "", "");
  }

  ngOnInit() {
  }

  enviarDatos(){
    this.formularioServicie.registrarUsuario(this.datos_formulario).subscribe(

      (response:any)=>{
        if(response.usuario){
          alert("Datos registrados exitosamente");
        }else{
          alert("Datos no registrados")
        }
      
      },
      error => {
        alert("Error al registrar")
      }
    )


    console.log("Datos del formulario: ", this.datos_formulario)
  }
}
