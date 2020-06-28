import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[];
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getJobs().subscribe((res)=>{
      this.jobs = res;
      
    },(err) =>{
      console.error(err);
    })

  }

}
