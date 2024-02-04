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

  rmakeid(): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.get<any[]>(`${this.url}/Apis/rmakeId`,{ headers: headers });
  }
  
  getrmakeid(rmakeid:String | null): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.post(`${this.url}/Apis/getrdata`,{rmakeid},{ headers: headers });
  }

  personal_info(rmakeid:Number,frist_nm:String,last_nm:String,dob:Date,gender:String,marital_status:String,profession:String,address:String,country:String,phone:Number,email:String): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.post(`${this.url}/Apis/personal_info`,{rmakeid,frist_nm,last_nm,dob,gender,marital_status,profession,address,country,phone,email},{ headers: headers });
  }

  
  skils_info(rmakeid:Number, skils:any): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.post(`${this.url}/Apis/skils`,{rmakeid,skils},{ headers: headers });
  }

  work_hs(rmakeid:Number, work_hs:any): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.post(`${this.url}/Apis/work_hs`,{rmakeid,work_hs},{ headers: headers });
  }

  education(rmakeid:Number, education:any): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.post(`${this.url}/Apis/education`,{rmakeid,education},{ headers: headers });
  }
  professional_summary(rmakeid:String | null,professional_summary : String, interest1:String , interest2:String ,interest3:String): Observable<any> {
    const headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.post(`${this.url}/Apis/professional_summary`,{rmakeid,professional_summary,interest1, interest2,interest3},{ headers: headers });
  }

}
