import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

    user = new User();
    public response  : any = null;

   constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register() : void{
      
      this.service.registerUser(this.user).subscribe((res)=>{
       this.service.setToken(res.token);
       this.response = res;
       localStorage.setItem('token',res.token);
       this.router.navigate(['/login']);
     },(err)=>{
       console.error(err);
     });
  

  }

}
