import { Component, OnInit } from '@angular/core';

export class EnviarDatos {
  constructor(
    public dato1,
    public dato2,
  ){}

}

@Component({
  selector: 'app-registro-egresos',
  templateUrl: './registro-egresos.page.html',
  styleUrls: ['./registro-egresos.page.scss'],
})
export class RegistroEgresosPage implements OnInit {

  datos_formulario;
  constructor() {
    this.datos_formulario = new EnviarDatos("Ingrese una breve descripción", "0000000");
   }

  ngOnInit() {
  }

  enviarDatos(){
    console.log("Datos del formulario: ", this.datos_formulario)
  }
}
