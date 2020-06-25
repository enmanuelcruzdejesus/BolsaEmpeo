import { Job } from "src/app/models/job";
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<Job[]>{

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type':'application/json'})
    }
    return this.httpClient.get<Job[]>("http://localhost:3000/api/jobs/");

  }

  

}
