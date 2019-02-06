import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';
import { FormControl } from '@angular/forms';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
//import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  findControl = new FormControl();
  // Ошибка поиска
  error: boolean = false;
  // Найденный пользователь
  user: User = null;
  constructor(private route: ActivatedRoute,private githubservice: GithubService,private router: Router) { }

  users : User[];
  errorMessage:any;
  limit :number = 6; 

  ngOnInit() {
    this.router.navigate(['/users/']);
   
    this.githubservice.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error)
    this.route.params
      .switchMap((params: Params) => this.githubservice.getUser(params['id']))
///

  

    // Подключение githubService для поиска пользователя
    // this.findControl.valueChanges
    //   .pipe(
    //     // Фильтруем если введено меньше двух символов
    //     filter(value => value.length > 2),
    //     // Ставим задержку одну секунду
    //     debounceTime(1000),
    //     // Запрашиваем данные пользователя
    //     switchMap(value =>
    //       this.githubservice.getUser(value).pipe(
    //         // Обработка ошибок
    //         catchError(err => {
    //           this.user = null;
    //           this.error = true;
    //           return err;
    //         })
    //       )
    //     )
    //   )
      // Получение данных
      // .subscribe(user => {
      //   this.user = user;
      //   this.error = false;
      // });





  }

  loadMore():void {
    this.limit += 5;
  }

 
  


}

