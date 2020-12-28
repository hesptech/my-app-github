import { AfterViewInit, Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { UserData } from '../model/models';
import { TestDataSource, TestItem, UserCodes } from './test-datasource';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  {

  /* dataSource: UserCodes[] = createHttpObservable(`http://applicazioni-web.net/colposcopy_2021/cf.php`);
  displayedColumns: string[]  = ['id_codice', 'acc_cod']; */

  dataSource: UserData[] = createHttpObservable(`http://applicazioni-web.net/colposcopy_2021/users.php`);
  displayedColumns: string[]  = ['id_user', 'codice', 'nome', 'cognome', 'email', 'username'];

}
