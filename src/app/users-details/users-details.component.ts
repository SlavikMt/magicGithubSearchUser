import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GithubService } from "../github.service";
import { User } from '../user.model';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
 
  repos: any;
  id: string;
  errorMessage: any;
  user: User;
  userName: string;
  userDetails: any;
  
  constructor(private route: ActivatedRoute,
    private router: Router, private githubservice: GithubService) { }
 
 
  ngOnInit() {
       this.getUser()
    //this.userName = this.route.snapshot.paramMap.get('username');
    this.userDetails = {};
    this.getUserInformation();
    console.log(this.userName);
    
   
  } 
getUser():void {
   this.route.params
    .switchMap((params: Params) => this.githubservice.getUser(params['id']))
    .subscribe((user) => this.user = user);
}


  getUserInformation() {
    if (this.userName) {
 
      this.githubservice.getRepos(this.userName).subscribe(repos => {
        console.log(repos);
        this.userDetails.repos = repos;
      },
       
      );
    }
  }


 
 
  }




