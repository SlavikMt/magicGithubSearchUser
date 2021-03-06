import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { GithubService } from './github.service';
import { FooterComponent } from './footer/footer.component';
import { UserSearchComponent } from './user-search/user-search.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    UsersDetailsComponent,
    FooterComponent,
    UserSearchComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
