import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountadmine-sidebare',
  templateUrl: './accountadmine-sidebare.component.html',
  styleUrls: ['./accountadmine-sidebare.component.css']
})
export class AccountadmineSidebareComponent implements OnInit {

  email="Loading...";
  fullname="Loading...";
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getAdminData()
  }


  getAdminData(){
    this.auth.getAdminData().subscribe((user)=>{
      this.email=user.user.email;
      this.fullname=user.user.fullname;
      
    },(error)=>{

    })
  }

  logOut(){
    
    if (confirm('Do you really wanna log out now ?')) {
      window.localStorage.removeItem('token');
      this.router.navigate(['home'])
    }
  }

}
