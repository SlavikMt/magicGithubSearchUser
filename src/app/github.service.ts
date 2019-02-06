import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GithubService {
  private searchText: string;
  private clientId = '60b9f23dedffbdfc476c';
  private clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';



  private apiURL = "https://api.github.com/users";

  constructor(private http: Http) { 
    this.searchText = '';
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.apiURL)
      .map(this.extractUsers)
      .catch(this.handleError);
  }

  getUser(username): Observable<User> {

    let url = this.apiURL + "/" + username;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }



  private extractUsers(res: Response) {
    let users: User[] = [];
    let body = res.json();
    body.map(user => {
      users.push(new User({
               login: user.login,
               name: user.name,  
               avatar_url: user.avatar_url
       
      }))

    })
    return users;

  }
  private extractData(res: Response) {
    let body = res.json();
    
    return new User ({
      login: body.login,
      created_at : body.created_at,
      avatar_url : body.avatar_url,
      name : body.name,
      location: body.location,
      company: body.company,
      email: body.email,
      repo: body.public_repos
    });
  }



  getAllUsers() {
    if (this.searchText) {
      return this.http.get('https://api.github.com/search/users?q=' + this.searchText
        + '&client_id=' + this.clientId
        + '&client_secret=' + this.clientSecret)
        .map(res => res.json())
        .catch(this.handleError);
    }
  }

  updateSearchText(searchText: string) {
    this.searchText = searchText;
  }


  getRepos(userName) {
    if (userName) {
      return this.http.get('https://api.github.com/users/' + userName
        + '/repos?client_id=' + this.clientId
        + '&client_secret=' + this.clientSecret)
        .map(res => res.json())
        .catch(this.handleError);
    }
  }




    private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
  
    return Observable.throw(errMsg);
  }

}