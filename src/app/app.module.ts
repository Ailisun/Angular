import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';



const routes:Route[] =[
  {path:'', component:MainLayoutComponent, children:[
      {path: '', redirectTo:'users', pathMatch:'full'},
      {path:'users', component:UsersComponent, children:[
          {path:':id', component:UserDetailsComponent}
        ]},
      {path:'posts', component:PostsComponent, children:[
          {path:':id', component:PostDetailsComponent}
        ]},
      {path:'comments', component:CommentsComponent, children:[
          {path:':id', component: CommentsDetailsComponent}
        ]}
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    PostsComponent,
    PostComponent,
    CommentComponent,
    CommentsComponent,
    CommentsDetailsComponent,
    HeaderComponent,
    UserComponent,
    MainLayoutComponent
  ],
  imports: [
    RouterTestingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
