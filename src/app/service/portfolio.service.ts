import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) {}
    
  obtenerDatos():Observable<any>{
    //Llama al archivo creado para los datos
      return this.http.get('./assets/data/data.json');
    }

    CargaJS(archivos:string[]){
      for (let archivo of archivos){
        let script = document.createElement('script');
        script.src="./assets/js/"+archivo+".js";
        let body=document.getElementsByTagName("body")[0];
        body.appendChild(script );
      }
    }
    traerClase(nombre:string){
      let algo= document.querySelector(nombre);
    }

  }

