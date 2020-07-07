import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Job } from '../models/job';
import {Category} from '../models/category';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnDestroy, OnInit {


  dataSource: MatTableDataSource<Job>;
  @ViewChild('TablePaginator', {static: true}) tablePaginator: MatPaginator;
  @ViewChild('TableSort', {static: true}) tableSort: MatSort;

  public displayedColumns = ['company', 'location','position','detail'];

  //dtOptions: DataTables.Settings = {};
  detailj:any;
  CATEGORIES: string[] = [];
  jobs:any;
 // dtTrigger = new Subject();
  config = {
    itemsPerPage: 10,
    currentPage: 1
  };;
  


 
  constructor(private service: DataService, private router: Router) {

    this.dataSource = new MatTableDataSource;
    
   }

  

  ngOnInit(): void {
   /* this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
*/
    this.fetchJobs(); 

    this.dataSource.data = this.jobs;
    this.dataSource.paginator = this.tablePaginator;
    this.dataSource.sort = this.tableSort;
    
   
    
    
   /* this.service.getJobs().subscribe(jobs=>{
      this.jobs = jobs;
      this.dtTrigger.next();
    });
    */

   
  //  this.dtTrigger.next();
    
  //  this.categoryFiller();
    
    


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  jobDetail(id:any): void{
 
       this.router.navigate(['/jobs/'+id]);
    
   }

   postJob(): void {

    this.router.navigate(['/create-job'])

   }

  ngOnDestroy():void{

  //  this.dtTrigger.unsubscribe();

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
      

      for(let counter in this.jobs){

      
        if(!this.CATEGORIES.includes(this.jobs[counter].category.tipo)){
  
          this.CATEGORIES.push(this.jobs[counter].category.tipo);
          console.log(this.jobs[counter].category.tipo);
        }
  
      }
      
  
    },(err) =>{
      console.error(err);
    })

   

  }



pageChanged(event){
  this.config.currentPage = event;
}



}
