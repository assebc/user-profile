import { Component } from '@angular/core';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html'
})
export class UserComponent {
  readonly user$ = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
