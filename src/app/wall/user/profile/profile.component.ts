import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LoginService } from 'src/app/service/auth/login/login.service';
import { TokenService } from 'src/app/service/auth/token/token.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public islogged=false;
  public profile:User;

  constructor( private authService:AuthService,private loginService:LoginService,private tokenService:TokenService) {

    console.log(this.islogged);
  }

  ngOnInit(){
    this.authService.authStatus.subscribe(
      status=>this.islogged=status
    );
    this.resetProfileData();
    if(this.islogged){
      this.getUserData();
    }
  }
  getUserData(){
    this.loginService.profileData(this.tokenService.get()).subscribe(
      response=>{
          this.profile={
              username:response['username'],
              first_name:response['first_name'],
              last_name:response['last_name'],
              phone: response['phone'],
              email: response['email']
          }
      },
      error=>{
        alert("an error ocurred while load the profile data");
      }
    );
  }
  resetProfileData(){
    this.profile={
      username:'loading..',
      first_name:'loading..',
      last_name:'loading..',
      phone:0,
      email:'loading..' 
    }
  }

}
