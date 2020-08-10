import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

import { TokenService } from 'src/app/service/auth/token/token.service';



@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url= environment.api+'comment/';
  constructor(private http: HttpClient,private tokenService:TokenService) { }

  addComment(comment:Comment):Observable<any>{
    return this.http.post(this.url+'create',comment,{
      headers: new HttpHeaders({
        'Authorization':'Token '+ this.tokenService.get()
      })
    });
  }
}
