import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { user } from '../interface/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-call-api',
  imports: [FormsModule],
  templateUrl: './call-api.component.html',
  styleUrl: './call-api.component.scss'
})
export class CallAPIComponent {
  users: user[] = [];
  selectedUser: user | undefined;
  constructor(private userService: UserService){}

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe((data:user[]) => {
      this.users = data;
    });
  }

  addUser(user: user){
    if(!this.selectedUser){
      this.userService.saveUser(user).subscribe((data:user) => {
        if(data){
          this.getUser();
        }
      })
    }
    else{
      const userData = {...user, id: this.selectedUser.id};
      this.userService.updateUser(userData).subscribe((data:user) => {
        if(data){
          this.getUser();
          this.selectedUser = undefined;
        }
      })
    }
  }

  deleteUser(id: any){
    this.userService.deleteUser(id).subscribe((data: user) => {
      if(data){
        this.getUser();
      }
    });
  }

  updateSelectedUser(id: any){
    this.userService.updateSelectedUser(id).subscribe((data: user) => {
      this.selectedUser = data;
    })
  }
}
