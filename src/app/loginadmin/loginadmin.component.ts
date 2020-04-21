import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  
  loginForm = new FormGroup({
    login:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
        
  });

  createdSuccessfully:boolean=false;
  errorMessage="";
  isloading:boolean=false;


  constructor(private auth :AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    console.log();
    this.auth.loginAdmin(this.loginForm.value.login,this.loginForm.value.password).subscribe((data)=>{
      console.log(data);
      
      try{
        let res = data;
        
        if (res.success == true) {
          this.isloading=false;
          window.localStorage.setItem('token',res.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          
          this.router.navigate(['/adminAccount'])
      }else{
        this.isloading=false;
        this.errorMessage=res.message;
      }
      }catch(e){
        this.isloading=false;
        this.errorMessage="Something went wrong, try again.";
      }

      
    },(error)=>{
      this.isloading=false;
      this.errorMessage="Something went wrong, try again.";
    })
  }
}

