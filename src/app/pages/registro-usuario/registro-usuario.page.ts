import { Component, OnInit } from '@angular/core';

export class EnviarDatos {
 constructor(
   public dato1,
   public dato2,
   public dato3,
   public dato4,
   public dato5,
 ){}

}

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  datos_formulario;
  constructor() { 
    this.datos_formulario = new EnviarDatos("Ingrese su nombre", "Ingrese su apellido" , "0", "Ingrese su email", "contraseña");
  }

  ngOnInit() {
  }

  enviarDatos(){
    console.log("Datos del formulario: ", this.datos_formulario)
  }
}
