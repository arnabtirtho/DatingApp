import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

// const httpOptions = {
//   headers : new HttpHeaders({
//     // Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
//     Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJsaXNhIiwibmJmIjoxNjEzODM2MjgxLCJleHAiOjE2MTQ0NDEwODEsImlhdCI6MTYxMzgzNjI4MX0.EkTDVLW7bn_exhQ90xTnBUd1uC2L0X_7dpNqoZTQAFS7AvQD4DK_FqRgRt_TGAgMvCkxQs1o8mRSPXB3nD3hQg'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient ) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username : string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
