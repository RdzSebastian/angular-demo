import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private API_SERVER = "http://localhost:8080/rest"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEstadosByPais(idPais: string): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/getAllEstadosByPais/" + idPais)
  }

}