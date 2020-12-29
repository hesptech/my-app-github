import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createHttpObservable } from 'src/app/common/util';
import { UserCodes } from 'src/app/model/user-codes';

@Component({
  selector: 'app-users-codes',
  templateUrl: './users-codes.component.html',
  styleUrls: ['./users-codes.component.scss']
})
export class UsersCodesComponent implements OnInit {

  // definitions of observables
  userCodes$: Observable<UserCodes[]>;

  constructor() { }

  ngOnInit(): void {
    this.userCodes$ = createHttpObservable(`http://applicazioni-web.net/colposcopy_2021/cf.php`);
  }

}
