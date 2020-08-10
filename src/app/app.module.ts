import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { PersonFill,BoxArrowInLeft,BoxArrowInRight,
          Globe,PeopleFill,LockFill,ThreeDotsVertical,
          HandThumbsUp,ChatDots,Clock } from 'ngx-bootstrap-icons';
/* Services */
import { LoginService } from './service/auth/login/login.service';
import { TokenService } from './service/auth//token/token.service';
import { AuthService } from './service/auth/auth.service';
import { AfterLoginService } from './service/auth/after/after-login.service';
import { BeforeLoginService } from './service/auth/before/before-login.service'; 

/* Component */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './wall/post/post.component';
import { LoginComponent } from './wall/auth/login/login.component';
import { AccountComponent } from './wall/auth/account/account.component';
import { ProfileComponent } from './wall/user/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ListpostComponent } from './wall/post/listpost/listpost.component';


/*GLOBAL ICONS */
const icons={
  PersonFill,
  BoxArrowInLeft,
  BoxArrowInRight,
  Globe,
  PeopleFill,
  LockFill,
  ThreeDotsVertical,
  HandThumbsUp,
  ChatDots,
  Clock
}

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent,
    AccountComponent,
    ProfileComponent,
    NavigationComponent,
    ListpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [
    LoginService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
