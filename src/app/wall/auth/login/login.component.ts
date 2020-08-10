import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/* Models */
import { User } from 'src/app/models/user';
/* Services */
import { LoginService } from 'src/app/service/auth/login/login.service';
import { FormGroup,NgForm,Validators, FormControl,FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/service/auth/token/token.service';
import { AuthService } from 'src/app/service/auth/auth.service';

/*Component to refresh profile section */
import { ProfileComponent } from 'src/app/wall/user/profile/profile.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user_login:User;
  public islogged:boolean;
  loginForm;

  constructor(
    private loginService:LoginService,
    private tokenService:TokenService,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetLoginForm();
    this.authService.authStatus.subscribe(
      status=>this.islogged=status
    );
  }
  
  login(loginData){
    this.loginService.login(loginData).subscribe(
      response=>{
        this.startSession(response);
      },
      error=>{
        console.log(error.error);
      }
    );
  }
  startSession(data){
    this.tokenService.handle(data.auth_token);
    this.authService.changeAuthStatus(true);
    location.reload();
  }
  resetLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:null,
      password:null
    });
  }
}
