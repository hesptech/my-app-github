import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { UserData } from '../model/models';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements AfterViewInit, OnInit {
  userData$: Observable<UserData[]>;

  displayedColumns: string[]  = ['id_user', 'codice', 'nome', 'cognome', 'email', 'username'];
  dataSource = new MatTableDataSource<UserData>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.userData$ = createHttpObservable(`http://applicazioni-web.net/colposcopy_2021/users.php`).subscribe(lessons => this.dataSource.data = lessons);
  }

  searchLessons(search = ''): void {
    this.dataSource.filter = search.toLocaleLowerCase().trim();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
