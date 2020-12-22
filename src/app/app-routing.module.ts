import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCodesComponent } from './users/users-codes/users-codes.component';

const routes: Routes = [
  { path: 'users-codes', component: UsersCodesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
