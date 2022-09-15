import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
 URL = environment.URL + 'Proyecto/';
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }
  public save(proyecto:Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.URL+"create",proyecto);
  }
  public update(id:number,proyecto:Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`,proyecto);
  }
  public details(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
