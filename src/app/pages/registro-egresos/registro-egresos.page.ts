import { Component, OnInit } from '@angular/core';
//importar servicio
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos {
  constructor(
    public campo1,
    public campo2,
  ){}

}

@Component({
  selector: 'app-registro-egresos',
  templateUrl: './registro-egresos.page.html',
  styleUrls: ['./registro-egresos.page.scss'],
})
export class RegistroEgresosPage implements OnInit {

  datos_formulario;
  constructor(private formularioServicie: FormularioService) {
    this.datos_formulario = new EnviarDatos("Ingrese una breve descripción", "0000000");
   }

  ngOnInit() {
  }

  enviarDatos(){
      this.formularioServicie.registrarformulario(this.datos_formulario).subscribe(

        (response:any)=>{
          if(response.registro){
            alert("Egreso registrado exitosamente");
          }else{
            alert("Egreso no registrado")
          }

        },
        error => {
          alert("Error al registrar los egresos")
        }
      )
    
    
    
    console.log("Datos del formulario: ", this.datos_formulario)
  }
}
