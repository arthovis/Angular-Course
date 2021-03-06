import { ListUsersComponent } from './list-users/list-users.component';
import { UsersService } from './../../core/services/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    UsersService
  ]
})
export class CrudModule { }
