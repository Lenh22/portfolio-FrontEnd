import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
URL = environment.URL + 'Habilidad/'
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + 'lista');
  }
  public save(skill:Skill):Observable<any>{
    return this.httpClient.post<any>(this.URL+"create",skill);
  }
  public update(id:number,skill:Skill):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`,skill);
  }
  public details(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `detail/${id}`);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
