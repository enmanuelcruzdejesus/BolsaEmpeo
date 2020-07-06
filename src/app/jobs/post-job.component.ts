import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Job } from '../models/job';
import { Category } from '../models/category';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  
    job = new Job();
    categories: Category[];
    response  : any = null;


  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe((res)=>{
      this.categories = res;
      this.categories.forEach((v)=>{
          console.log(v);
      });
    },(err)=>{
      console.error(err);
    });
  }

  postJob() : void{
    
    var formdata = new FormData();
    formdata.append("company",this.job.company);
    formdata.append("category",this.job.category);
    formdata.append("type",this.job.type);
    formdata.append("url",this.job.url);
    formdata.append("position",this.job.position);
    formdata.append("location",this.job.location);
    formdata.append("compemail",this.job.email);
    formdata.append("description",this.job.description);


    this.service.createJob(formdata).subscribe((res)=>{
     
     this.response = res;
     
     
     this.router.navigate(['/jobs']);
   },(err)=>{
     console.error(err);
   });


}


}
