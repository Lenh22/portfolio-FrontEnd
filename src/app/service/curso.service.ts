import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
URL= environment.URL +"Curso/"

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.URL + 'lista');
  }
  public save(curso:Curso):Observable<any>{
    return this.httpClient.post<any>(this.URL+"create",curso);
  }
  public update(id:number,curso:Curso):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`,curso);
  }
  public details(id: number): Observable<Curso>{
    return this.httpClient.get<Curso>(this.URL + `detail/${id}`);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
