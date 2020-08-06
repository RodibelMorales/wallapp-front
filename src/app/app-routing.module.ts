import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Component imports*/
import { PostComponent } from './wall/post/post.component';
import { CommentsComponent } from './wall/comments/comments.component';
import { ProfileComponent } from './wall/user/profile/profile.component';
import { LoginComponent } from './wall/auth/login/login.component'
import { AccountComponent } from './wall/auth/account/account.component';
import { NavigationComponent } from './layout/navigation/navigation.component';


const routes: Routes = [
  { path:'',component:LoginComponent }, //GET
  { path:'wall', component:PostComponent }, //GET
  { path:'profile',component:ProfileComponent} //GET
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
