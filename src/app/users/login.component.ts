import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  response: any;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  Login(): void{
   this.service.login(this.user).subscribe((res)=>{
      this.service.setToken(res.token);
      this.user = res.user;
      this.response = res;    
      this.router.navigate(['/jobs']);

   },
    (error) => {
      console.error(error);
    }
   )
  }


}
