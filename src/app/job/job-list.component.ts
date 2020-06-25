import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Job } from '../models/job';

@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  data: Job[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    
     this.service.getJobs().subscribe((res) => {
       this.data = res
       console.log(res);
     })
    
  }

}
