import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_SERVER = "http://localhost:8080/rest"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPersonas(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/allPersonas")
  }

  public savePersona(persona: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "/savePersona", persona)
  }

  public edit(persona: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "/savePersona", persona)
  }

  public deletePersona(id: string): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "/deletePersona/" + id)
  }
}
