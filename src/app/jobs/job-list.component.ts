import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Job } from '../models/job';
import {Category} from '../models/category';


//Probe con los datos de abajo y me dió resultado, probar tras poblar BD.


/*


var ejemplo : Category = {tipo:"HR"};

let date1: Date = new Date("2019-01-16");  


*/

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {

  /*
 ELEMENT_DATA: Job[] = [
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
  {company: "Claro", position: 'Hydrogen', location: "Santo Domingo", category:ejemplo, url: "", email: "", logo:"", description: "", date: date1, type: "" },
];


  displayedColumns: string[] = ['company', 'position', 'location'];


  */

  jobs: Job[];
  constructor(private service: DataService, private router: Router) { }

  CATEGORIES: Category[];


  ngOnInit(): void {
    
    this.service.getJobs().subscribe((res)=>{
      this.jobs = res;
      
      this.jobs.forEach(element => {

        if(!this.CATEGORIES.includes(element.category)){
          this.CATEGORIES.push(element.category);

        }
        
      });

       
      
    },(err) =>{
      console.error(err);
    })



  }



}
