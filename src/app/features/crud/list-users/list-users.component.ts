import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.userService.getAll() // observable User[]
      .subscribe((users: User[]) => {
        this.users = users; // save user[] from observable to local variable
        users.forEach(user => {
          console.log(user);
        });
      });
  }
}
