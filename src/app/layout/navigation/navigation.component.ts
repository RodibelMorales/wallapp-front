import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LoginService } from 'src/app/service/auth/login/login.service';
import { TokenService } from 'src/app/service/auth/token/token.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public islogged:boolean;
  
  constructor(
    private authService:AuthService,
    private loginService:LoginService,
    private tokenService:TokenService
  ) { }

  ngOnInit(){
    this.authService.authStatus.subscribe(
      status=>this.islogged=status
    );
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.loginService.logout(this.tokenService.get()).subscribe(
      response=>{
        this.tokenService.remove();
        location.reload();
      },
      error=>{
        alert("something is wrong with the logout!!!, please try again");
      }
    );
  }
}
