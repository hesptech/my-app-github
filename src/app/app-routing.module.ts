import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCodesComponent } from './users/users-codes/users-codes.component';
import { UsersDataComponent } from './users/users-data/users-data.component';

const routes: Routes = [
  { path: 'users-codes', component: UsersCodesComponent },
  { path: 'users-data', component: UsersDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
