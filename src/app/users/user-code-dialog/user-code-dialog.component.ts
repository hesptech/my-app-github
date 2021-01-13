import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreService } from 'src/app/common/store.service';
import { UserCodes } from 'src/app/model/models';

@Component({
  selector: 'app-user-code-dialog',
  templateUrl: './user-code-dialog.component.html',
  styleUrls: ['./user-code-dialog.component.scss']
})
export class UserCodeDialogComponent {

  form: FormGroup;
  userCode: UserCodes;

  @ViewChild('saveButton', { static: true }) saveButton: ElementRef;

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) userCode: UserCodes,
    private store: StoreService
  ) {
    this.userCode = userCode;

    this.form = fb.group({
      id_codice: [userCode.id_codice],
      acc_cod: [userCode.acc_cod, Validators.required],
      tipo: [userCode.tipo, Validators.required]
  });
  }

  save(): void {
    this.store.saveCourse(this.userCode.id_codice, this.form.value )
    .subscribe(
      () => this.close(),
      err => console.log('error', err)
    );
    console.log(this.form.value);
    // this.close();
  }

  close(): void {
      this.dialogRef.close();
  }

}
