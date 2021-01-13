import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { createHttpObservable } from 'src/app/common/util';
import { UserCodes } from 'src/app/model/models';
import { UserCodeDialogComponent } from '../user-code-dialog/user-code-dialog.component';

@Component({
  selector: 'app-users-codes',
  templateUrl: './users-codes.component.html',
  styleUrls: ['./users-codes.component.scss']
})
export class UsersCodesComponent implements OnInit, AfterViewInit {

  // definitions of observables
  userCodes$: Observable<UserCodes[]>;

  displayedColumns: string[] = ['id_codice', 'acc_cod', 'tipo'];
  dataSource = new MatTableDataSource<UserCodes>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.userCodes$ = createHttpObservable(`http://applicazioni-web.net/colposcopy_2021/cf.php`).subscribe(codes => this.dataSource.data = codes);
  }

  searchLessons(search = ''): void {
    this.dataSource.filter = search.toLocaleLowerCase().trim();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  editCourse(userCode: UserCodes): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = userCode;
    const dialogRef = this.dialog.open(UserCodeDialogComponent, dialogConfig);
  }

}
