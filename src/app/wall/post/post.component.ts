import { Component, OnInit,ViewChild  } from '@angular/core';
import { FormGroup,NgForm,Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/posts';
import { PostService } from 'src/app/service/post/post.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ListpostComponent } from './listpost/listpost.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  public posts : Posts;
  public islogged :boolean;
  postForm;
  @ViewChild(ListpostComponent, { static: false }) postListComponent: ListpostComponent;
  constructor(
    private postService:PostService,
    private formBuilder: FormBuilder,
    private router:Router,
    private authService:AuthService
  ) {
    this.postForm = this.formBuilder.group({
      content: '',
      likes:0,
      privacity_id:1,
      user_id:13
    });
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(
      status=>this.islogged=status
    );
  }

  addPost(data){
    if(this.postForm.valid){
      this.postService.addPosts(data).subscribe(
        response=>{
            this.postListComponent.getPublicPosts();
            this.postForm = this.formBuilder.group({
              content: '',
              likes:0,
              privacity_id:1,
              user_id:13
            });
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
