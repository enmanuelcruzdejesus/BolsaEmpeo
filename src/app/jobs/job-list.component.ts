import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Job } from '../models/job';
import {Category} from '../models/category';
import { Subject } from 'rxjs';
import {JobDetailComponent} from '../jobs/job-detail.component';




@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};

  itemsPerPage: 2;
  detailj:any;
  CATEGORIES: string[] = [];
  jobs : Job[] = [];
  p: { [id: string]: number} = {};
  

  dtTrigger = new Subject();

  config = {
    itemsPerPage: 50,
    currentPage: 1,
    totalItems: this.itemsPerPage,
  };
  


 
  constructor(private service: DataService, private router: Router) {

    
   }

  

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 1,
    };

    this.fetchJobs(); 
   
    this.dtTrigger.next();

  }

  jobDetail(id:any): void{
 
       this.router.navigate(['/jobs/'+id]);
    
   }

   postJob(): void {

    this.router.navigate(['/create-job'])

   }

  ngOnDestroy():void{

    this.dtTrigger.unsubscribe();

  }

  categoryFiller(){

    this.service.getJobs().subscribe(jobs=>{
      this.jobs = jobs;
      
    });
    for(let counter in this.jobs){
      

      
      if(!this.CATEGORIES.includes(this.jobs[counter].category.tipo)){

        this.CATEGORIES.push(this.jobs[counter].category.tipo);
        console.log(this.jobs[counter].category.tipo);
      }

    }
  }
  fetchJobs(){
    

    this.service.getJobs().subscribe((res)=>{
      this.jobs = res;
      
      
      console.log(res);
      

      for(let counter of this.jobs){
        this.itemsPerPage+=1;
      
        if(!this.CATEGORIES.includes(counter.category.tipo)){
  
          this.CATEGORIES.push(counter.category.tipo);
          console.log(counter.category.tipo);
        }
  
      }
      
  
    },(err) =>{
      console.error(err);
    });

   

  }



pageChanged(event){
  this.config.currentPage = event;
}

login(){
  this.router.navigate(['/login']);

}

signUp(){

  this.router.navigate(['/register']);

}

adminPanel(){
  this.router.navigate(['/adminpanel']);
}

logout(){
  this.service.logoutUser();
  this.router.navigate(['']);
}



}
