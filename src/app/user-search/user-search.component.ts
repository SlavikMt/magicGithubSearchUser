import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchText: string;
  searchResults: any;
  usersNotFound: boolean;
  constructor(private _githubService: GithubService) { 
    this.usersNotFound = false;
  }

  ngOnInit() {
  }

  searchUsers() {
    if (this.searchText) {
      this._githubService.updateSearchText(this.searchText);
      this.getAllUsers();
    }
  }

  getAllUsers() {
    if (this.searchText) {
      this._githubService.getAllUsers().subscribe(users => {
        this.searchResults = users;
        this.usersNotFound = false;
        console.log(users);
      },
        (err) => {
          console.log('err:' + err);
          this.usersNotFound = true;
        },
        () => console.log('Done')
      );
    }
  }
}









