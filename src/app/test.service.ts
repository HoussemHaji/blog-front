import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://backend-service.default.svc.cluster.local';
  getData(): Observable<any> {
    return this.http.get<String>(`${this.baseUrl}/test`);
  }

}
