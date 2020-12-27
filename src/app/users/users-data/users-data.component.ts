import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createHttpObservable } from 'src/app/common/util';
import { UserData } from 'src/app/model/models';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit {

  // definitions of observables
  userData$: Observable<UserData[]>;

  constructor() { }

  ngOnInit(): void {
    this.userData$ = createHttpObservable(`http://applicazioni-web.net/colposcopy_2021/users.php`);
  }

}
