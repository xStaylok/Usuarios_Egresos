import { Component, OnInit } from '@angular/core';

//definimos la interface del componente 

interface Componente {
   icono: string;
   nombre: string;
   direccion: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
//declaramos el componente y sus propiedades 

  componentes : Componente [] = [
    
    { 
      icono: "walk-outline" ,
      nombre: "  Registro Usuario",
      direccion: "/registro-usuario",
    },
    
    { 
      icono: "server-outline" ,
      nombre: "  Registro Egresos",
      direccion: "/registro-egresos",
    },

    { 
      icono: "people-circle-outline" ,
      nombre: "  Listar Usuario",
      direccion: "/listar-usuario",
    },

    { 
       icono: "cash-outline",
       nombre: "  Listar Egresos",
       direccion: "/listar-egresos",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
