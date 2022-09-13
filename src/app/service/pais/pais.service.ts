import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private API_SERVER = "http://localhost:8080/rest/allPais"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPais(): Observable<any> {
    return this.httpClient.get(this.API_SERVER)
  }

}
