import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AboutMe } from '../model/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  URL = environment.URL + "AboutMe/";

  constructor(private httpClient:HttpClient) { }
  
  public lista(): Observable<AboutMe[]>{
    return this.httpClient.get<AboutMe[]>(this.URL + 'lista');
  }
  public save(about:AboutMe):Observable<any>{
    return this.httpClient.post<any>(this.URL+"create",about);
  }
  public update(id:number,about:AboutMe):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`,about);
  }
  public details(id: number): Observable<AboutMe>{
    return this.httpClient.get<AboutMe>(this.URL + `detail/${id}`);
  }
  // public delete(id:number):Observable<any>{
  //   return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  // }


}
