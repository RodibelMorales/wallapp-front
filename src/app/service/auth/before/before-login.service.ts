import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/service/auth/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService {


  constructor(private tokenService: TokenService,private router:Router) { }
  redirectValidator(status:boolean){
    if(status){
      this.router.navigateByUrl('');
    }
    return !status;
  }
}
