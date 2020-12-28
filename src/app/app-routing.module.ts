import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestsComponent } from './tests/tests.component';
import { UsersCodesComponent } from './users/users-codes/users-codes.component';
import { UsersDataComponent } from './users/users-data/users-data.component';

const routes: Routes = [
  { path: 'users-codes', component: UsersCodesComponent },
  { path: 'users-data', component: UsersDataComponent },
  { path: 'test', component: TestComponent },
  { path: 'tests', component: TestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
