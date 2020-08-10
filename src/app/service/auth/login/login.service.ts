import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url=environment.api+'account/';

  constructor(private http:HttpClient) { }

  login(loginData){
    return this.http.post(this.url+'token/login/',loginData);
  }
  logout(token){
    return this.http.post(this.url+'token/logout/',null,{
      headers: new HttpHeaders({
        'Authorization':'Token '+token
      })
    });
  }
  createAccount(user:User):Observable<any>{
    alert("before");
    return this.http.post(this.url+'users/',user);
  }
  profileData(token){
    return this.http.get(this.url+'users/me/',{
      headers: new HttpHeaders({
        'Authorization':'Token '+token
      })
    });
  }
  setLocalProfileData(id){
    localStorage.setItem('profileId',id);
  }
  getLocalProfileData(){
    return localStorage.getItem('profileId');
  }
  removeLocalProfile(){
    localStorage.removeItem('profileId');
  }
}
