import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.URL);
  }

  saveUser(user:user):Observable<user>{
    return this.http.post<user>(this.URL, user);
  }

  deleteUser(id: string):Observable<user>{
    return this.http.delete<user>(this.URL+"/"+id);
  }

  updateSelectedUser(id: string):Observable<user>{
    return this.http.get<user>(this.URL+"/"+ id);
  }

  updateUser(user: user):Observable<user>{
    return this.http.put<user>(this.URL+"/"+user.id, user);
  }
}
