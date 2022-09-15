import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
URL = environment.URL+ 'Idioma/'
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.URL + 'lista');
  }
  public save(idioma:Idioma):Observable<any>{
    return this.httpClient.post<any>(this.URL+"create",idioma);
  }
  public update(id:number,idioma:Idioma):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`,idioma);
  }
  public details(id: number): Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.URL + `detail/${id}`);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
