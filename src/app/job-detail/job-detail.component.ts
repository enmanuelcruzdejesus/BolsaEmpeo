import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../models/job';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  pageTitle = 'Job Detail';
  errorMessage = '';
  job: Job | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
               private service: DataService) {
  }
  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getJobs(id);
    }
  }

  getJobs(id: number) {
    throw new Error("Method not implemented.");
  }

  onBack(): void {
    this.router.navigate(['/job']);
  }

}
