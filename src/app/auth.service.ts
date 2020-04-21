import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {


  }
  



  isConnected():boolean{
    if (window.localStorage.getItem('token')!=null) {
      return true;
    }

    return false;
  }
  

  createRoute(routeData):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     return this.http.post<any>('http://localhost:3001/routeCreate',{
       departure:routeData.departure,
       arrival:routeData.arrival,
       number:routeData.number,
       date:routeData.date,
       time:routeData.time,
       price:routeData.price,
       duration:routeData.duration,

     },httpOptions );
  }


  createUser(userData):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     return this.http.post<any>('http://localhost:3001/userCreate',{
       email:userData.login,
       fullname:userData.fullname,
       password:userData.password
     },httpOptions );
  }
  createAdmin(userData):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     return this.http.post<any>('http://localhost:3001/adminCreate',{
       email:userData.login,
       fullname:userData.fullname,
       password:userData.password
     },httpOptions );
  }
  loginAdmin(login,password):Observable<any>{
    const httpOption= {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     return this.http.post<any>('http://localhost:3001/adminAuth',{
       email:login,
       password:password,
       
     },httpOption );
  }


  login(login,password):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
     return this.http.post<any>('http://localhost:3001/userAuth',{
       email:login,
       password:password,
       
     },httpOptions );
  }
  getUserData():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token')
      })
    };
     return this.http.get<any>('http://localhost:3001/userInfo',httpOptions );
  }



  getAdminData():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': window.localStorage.getItem('token1')
      })
    };
     return this.http.get<any>('http://localhost:3001/adminInfo',httpOptions );
  }


}
