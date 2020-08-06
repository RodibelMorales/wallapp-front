import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Posts } from '../../models/posts';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url= environment.api+'post/'
  
  constructor(private http: HttpClient) { }
  
  getPublicPosts():Observable<any>{
    return this.http.get(this.url+'get/');
  }
  addPosts(posts:Posts):Observable<any>{
    return this.http.post(this.url+'create',posts);
  }
  updatePosts(posts){
    return this.http.put(this.url+'update/'+posts.id,posts);
  }
  deletePosts(posts_id){
    return this.http.delete(this.url+'delete/'+posts_id);
  }
}
