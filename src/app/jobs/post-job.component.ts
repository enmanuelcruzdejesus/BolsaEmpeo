import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Job } from '../models/job';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  
  job = new Job();
    public response  : any = null;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  postJob() : void{
      
    this.service.createJob(this.job).subscribe((res)=>{
     
     this.response = res;
     
     this.router.navigate(['/jobs']);
   },(err)=>{
     console.error(err);
   });


}


}
