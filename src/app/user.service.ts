import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users", this.httpOptions);
  }
  getAllPosts(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts", this.httpOptions);
  }
  getAllComments(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/comments", this.httpOptions);
  }
  getfirstPosts(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users/1/posts", this.httpOptions);
  }
  getfirstComments(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/1/Comments", this.httpOptions);
  }
}
