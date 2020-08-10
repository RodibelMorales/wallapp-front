import { Component, OnInit } from '@angular/core';
import { FormGroup,NgForm,Validators, FormControl,FormBuilder } from '@angular/forms';
import { Posts } from 'src/app/models/posts';
import { Comment } from 'src/app/models/comment';
/*Services */
import { PostService } from 'src/app/service/post/post.service';
import { CommentService } from 'src/app/service/comment/comment.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LoginService } from 'src/app/service/auth/login/login.service';
@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent implements OnInit {
  commentModel:Comment;
  postsList: any=[];
  commentForm:FormGroup;
  commentContainerToShow='';
  public islogged:boolean;
  createFormGroup(){
    return new FormGroup({
      comment : new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(55)]),
      post_id : new FormControl(null,[Validators.required]),
    });
  }
  constructor(
    private postService:PostService,
    private commentService: CommentService,
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private loginService:LoginService
  ) {
    this.commentForm=this.createFormGroup();
  }

  ngOnInit(): void {
    this.resetFormComment();
    this.getPublicPosts();
    this.authService.authStatus.subscribe(
      status=>this.islogged=status
    );
  }
  getPublicPosts(){
    this.postService.getPublicPosts().subscribe((data:Posts[])=>{
        this.postsList=data;
      },
      error=>{
          console.log(error);
          alert("something is worg to get el posts list: "+error.error);
      })
  }
  addCommnet(data,postsid){
    this.commentModel={
      comment:data.comment,
      comment_likes:0,
      post_id:postsid,
      user_id:parseInt(this.loginService.getLocalProfileData())
    };
    this.commentService.addComment(this.commentModel).subscribe(
      response=>{
        if(response.status="success"){
          this.getPublicPosts();
          this.resetFormComment();
        }else{
          alert('response errors');
        }
      },
      error=>{
        console.log(error.error);
        alert("an error ocurred: "+error.error);
      }
    );
  }
  resetFormComment(){
    this.commentModel = {
      comment:'',
      comment_likes:0,
      post_id:null,
      user_id:0
    };
  }
  showComments(postId,event){
    event.preventDefault();
    this.commentContainerToShow=postId;
  }
}
