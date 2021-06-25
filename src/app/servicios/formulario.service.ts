import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//uso de la variable backend que esta en nuestro servidor remoto
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FormularioService {

    backend = environment.backend;

  constructor(private http : HttpClient) { }

  //funcion para registrar datos de nuestro formulario
  registrarUsuario(datos_formulario){
    return this.http.post(`${this.backend}/usuario/crear-usuario`, datos_formulario);
  }

  registrarEgreso(datos_egreso){
    return this.http.post(`${this.backend}/egreso/crear-egreso`, datos_egreso);
  }


  obtenerUsuario(){
    return this.http.get(`${this.backend}/usuario/obtener-usuarios`);
  }

  obtenerEgreso(){
    return this.http.get(`${this.backend}/egreso/obtener-egresos`);
  }

  obtenerEgresoporUsuario(){
  return this.http.get(`${this.backend}/egreso/obtener-egresos-usuario/:id`);
  }
}
