import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//uso de la variable backend que esta en nuestro servidor remoto
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FormularioService {

    backend = environment.backend+"/registroForm";

  constructor(private http : HttpClient) { }

  //funcion para registrar datos de nuestro formulario
  registrarformulario(datos_formulario){
    return this.http.post(`${this.backend}/crear-registro`, datos_formulario);
  }
}
