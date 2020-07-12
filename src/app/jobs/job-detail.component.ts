import { Component, OnInit } from '@angular/core';
import {JobListComponent} from '../jobs/job-list.component';
import {Job} from '../models/job';
import {ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {


   job = new Job();
  
  constructor(private route: ActivatedRoute, private service: DataService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.service.getJobById(id).subscribe((res)=>{
       
        this.job = res;

        
      });

     
  
    });

    
  }

  



}
