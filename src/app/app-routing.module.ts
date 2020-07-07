import { AuthguardService } from './services/authguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './jobs/job-list.component';
import {JobDetailComponent} from './jobs/job-detail.component';
import { LoginComponent } from './users/login.component';
import { RegisterComponent } from './users/register.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { PostJobComponent } from './jobs/post-job.component';



const routes: Routes = [
  {path: '' , redirectTo: "/login" , pathMatch: 'full'},
  {path:'jobs' , component: JobListComponent, canActivate: [AuthguardService]},
  {path:'jobs/:id' , component: JobDetailComponent, canActivate: [AuthguardService]},
  {path:'login' , component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'create-job' , component: PostJobComponent},
  {path: '**' , component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [JobListComponent,JobDetailComponent,LoginComponent,RegisterComponent,PagenotfoundComponent,PostJobComponent];
