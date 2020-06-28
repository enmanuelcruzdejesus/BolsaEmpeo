import { Job } from "src/app/models/job";
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../models/category';
import {User} from '../models/user';
import { RegisterComponent } from '../users/register.component';
import { ThrowStmt, CastExpr } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };




  constructor(private httpClient: HttpClient)
  { 
     
  }

  setToken(token: string){
  
    localStorage.setItem('token',token);
   
  }



  registerUser(user: User): Observable<any>{
      
    
      return this.httpClient.post<any>("http://localhost:3000/api/users/",user,this.httpOptions);
    
  }

  login(user: User): Observable<any>{
    return this.httpClient.post<any>("http://localhost:3000/api/users/login/",user,this.httpOptions);
  }



  getCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:3000/api/categories/",this.httpOptions); 
  }

  createCategory(c: Category): Observable<Category>{

     return this.httpClient.post<Category>("http://localhost:3000/api/category/",c,this.httpOptions);
     
  }

  updateCategory(c: Category): Observable<Category>{

    return this.httpClient.put<Category>("http://localhost:3000/api/category/",c,this.httpOptions);
    
 }


  getJobs(): Observable<Job[]> {

     console.log(JSON.stringify(this.httpOptions));
      return this.httpClient.get<Job[]>("http://localhost:3000/api/jobs/",this.httpOptions);
      
  }
   
  getJobById(id: string){

    return this.httpClient.get<Job[]>("http://localhost:3000/api/jobs/"+id,this.httpOptions);
  }

  getJobByCategory(id: string): Observable<Job[]>{

    return this.httpClient.get<Job[]>("http://localhost:3000/api/jobs/category/"+id,this.httpOptions);

  }

  createJob(j: Job): Observable<Job>{

    return this.httpClient.post<Job>("http://localhost:3000/api/jobs/",j,this.httpOptions);
     
  }

  editJob(j: Job): Observable<Job> {
    return this.httpClient.put<Job>("http://localhost:3000/api/jobs/",j,this.httpOptions);
  }

 

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(): string{
    return localStorage.getItem('token');
  }

  errorHandler(errorResponse: HttpErrorResponse){
     if(errorResponse.error instanceof ErrorEvent){
       console.error("Client side error", errorResponse.error.message);
     }
     else{
       console.error("Server side error",errorResponse);
     }
     return throwError("There is a problem with the service");
  }

  

}
