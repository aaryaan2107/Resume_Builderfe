import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = 'http://localhost:3000';
  constructor(private http:HttpClient , private router: Router) { }

  login(email:String,password:String): Observable<any> {
    return this.http.post(`${this.url}/Apis/login`,{email,password}).pipe(
      map((response: any) => {
        if (typeof response === 'object' && response.token) {
          localStorage.setItem('token', response.token);
          return true;
        } else {
          return false;
        }
      })
    );;
  }

  html(): Observable<any> {
    return this.http.get<any[]>(`${this.url}/Apis/html`);
  }
  
  alluser(): Observable<any> {
    return this.http.get<any[]>(`${this.url}/Apis/alluser`);
  }

}
