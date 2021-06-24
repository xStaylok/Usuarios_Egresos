import { Component, OnInit } from '@angular/core';
//importar servicio
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos {
 constructor(
   public campo1,
   public campo2,
   public campo3,
   public campo4,
   public campo5,
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
    this.datos_formulario = new EnviarDatos("Ingrese su nombre", "Ingrese su apellido" , "0", "Ingrese su email", "contraseña");
  }

  ngOnInit() {
  }

  enviarDatos(){
    this.formularioServicie.registrarformulario(this.datos_formulario).subscribe(

      (response:any)=>{
        if(response.registro){
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
