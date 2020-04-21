import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {

  createdSuccessfully:boolean=false;
  errorMessage="";
  isLoading:boolean=false;

  addRouteForm = new FormGroup({
    departure:new FormControl('',[Validators.required,Validators.min(3)]),
    arrival:new FormControl('',[Validators.required,Validators.min(3)]),
    number:new FormControl('',[Validators.required,Validators.min(3)]),
    Date:new FormControl('',[Validators.required,Validators.min(6)]),
    Time:new FormControl('',[Validators.required,Validators.min(4)]),
    price:new FormControl('',[Validators.required,Validators.min(3)]),
    duration:new FormControl('',[Validators.required,Validators.min(2)]),
    
    
  })
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  AddRoute(e){
    this.errorMessage="";
    this.isLoading=true;
    this.createdSuccessfully=false;

    
      this.auth.createRoute(this.addRouteForm.value).subscribe((data)=>{
        console.log(data);
        
        try{
          let res = data;
          
          if (res.success == true) {
            this.createdSuccessfully=true;
            this.isLoading=false;
            this.addRouteForm.setValue({
              departure:"",
              arrival:"",
              number:"",
              date:"",
              time:"",
              price:"",
              duration:""
            })
        }else{
          this.isLoading=false;
          this.errorMessage=res.message;
        }
        }catch(e){
          this.isLoading=false;
          this.errorMessage="Something went wrong, try again.";
        }
  
        
      },(error)=>{
        this.isLoading=false;
        this.errorMessage="Something went wrong, try again.";
      })
    
  }
}