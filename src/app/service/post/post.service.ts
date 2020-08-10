import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Posts } from '../../models/posts';

import { TokenService } from 'src/app/service/auth/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url= environment.api+'post/'
  
  constructor(private http: HttpClient,private tokenService:TokenService) { }
  
  getPublicPosts():Observable<any>{
    return this.http.get(this.url+'get/');
  }
  addPosts(posts:Posts):Observable<any>{
    return this.http.post(this.url+'create',posts,{
      headers: new HttpHeaders({
        'Authorization':'Token '+ this.tokenService.get()
      })
    });
  }
  updatePosts(posts){
    return this.http.put(this.url+'update/'+posts.id,posts,{
      headers: new HttpHeaders({
        'Authorization':'Token '+ this.tokenService.get()
      })
    });
  }
  deletePosts(posts_id){
    return this.http.delete(this.url+'delete/'+posts_id,{
      headers: new HttpHeaders({
        'Authorization':'Token '+ this.tokenService.get()
      })
    });
  }
}
