import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../services/data.service';
import { Job } from '../models/job';
import { Category } from '../models/category';




@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})


export class JobListComponent implements OnInit {


  displayedColumns = [ 'location', 'position', 'company'];
  dataSource: MatTableDataSource<JobData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  data: Job[];
  categories: Category[];

  constructor(private service: DataService) { 

    const jobs: JobData[] = [];
    for (let i = 1; i <= 100; i++) { jobs.push(createNewJob(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(jobs);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  ngOnInit(): void {
    
    

    this.service.getJobs().subscribe((res) => {
      this.data = res
      console.log(res);
    })
    
   
 }

}
function createNewJob(id: number): JobData {
  const location =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
  
    location: location,
    position: Math.round(Math.random() * 100).toString(),
    company: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface JobData {
  location: string;
  position: string;
  company: string;
}

  

  
  





