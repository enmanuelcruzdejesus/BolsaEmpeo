import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./services/data.service";
import { JobListComponent } from './job/job-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobDetailComponent } from './job-detail/job-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PostJobComponent } from './post-job/post-job.component';




@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailComponent,
    PostJobComponent

  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
