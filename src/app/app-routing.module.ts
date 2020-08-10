import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Component imports*/
import { PostComponent } from './wall/post/post.component';
import { ProfileComponent } from './wall/user/profile/profile.component';
import { LoginComponent } from './wall/auth/login/login.component'
import { AccountComponent } from './wall/auth/account/account.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

import { BeforeLoginService } from 'src/app/service/auth/before/before-login.service';
const routes: Routes = [
  { path:'', component:PostComponent}, //GET
  { path:'account',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
