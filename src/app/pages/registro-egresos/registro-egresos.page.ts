import { Component, OnInit } from '@angular/core';
//importar servicio
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos {
  constructor(
    public descripcion,
    public precio,
  ){}

}

@Component({
  selector: 'app-registro-egresos',
  templateUrl: './registro-egresos.page.html',
  styleUrls: ['./registro-egresos.page.scss'],
})
export class RegistroEgresosPage implements OnInit {

  datos_egreso;
  constructor(private formularioServicie: FormularioService) {
    this.datos_egreso = new EnviarDatos("", "0000000");
   }

  ngOnInit() {
  }

  enviarDatos(){
      this.formularioServicie.registrarEgreso(this.datos_egreso).subscribe(

        (response:any)=>{
          if(response.egreso){
            alert("Egreso registrado exitosamente");
          }else{
            alert("Egreso no registrado")
          }

        },
        error => {
          alert("Error al registrar los egresos")
        }
      )
    
    
    
    console.log("Datos del formulario: ", this.datos_egreso)
  }
}
