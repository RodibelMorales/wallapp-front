import { Component, OnInit } from '@angular/core';
import { FormGroup,NgForm,Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/service/auth/login/login.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public userAccount:User;
  newAccountForm:FormGroup;

  createFormGroup(){
    return new FormGroup({
      email: new FormControl(null,[Validators.required]),
      first_name:new FormControl(null,[Validators.required]),
      last_name:new FormControl(null,[Validators.required]),
      username:new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      re_password:new FormControl(null,[Validators.required]),
    });
  }



  constructor(
    private loginService:LoginService,
    private formBuilder:FormBuilder,
    private router:Router
  ){
    this.newAccountForm=this.createFormGroup();
  }

  ngOnInit(){
    this.resetAccountForm();
  }

  createAccount(data){
    console.log(data);
    if(this.newAccountForm.valid){
      this.loginService.createAccount(data).subscribe(
        response=>{
          console.log(response);
          alert('Welcome to wallApp: '+response.first_name+' '+response.last_name);
          this.resetAccountForm();
          this.router.navigate(['']);
        },
        error=>{
          alert('can´t save the new account'+error.error.error);
        }
      )
    }
  }
  resetAccountForm(){
    this.userAccount={
      username:null,
      first_name:null,
      last_name:null,
      email:null,
      phone:null,
      password:null,
      re_password:null
    };
  }
}
