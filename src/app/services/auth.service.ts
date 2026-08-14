import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private adminLoginUrl = `${ApiUrl}/login`;

  // constructor(private http: HttpClient) { }

  /**
   * @method post
   * @param data - {
   *    username: string
   *    password: string
   * }
   * @returns Observable
   */
  // login(data: any): Observable<any> {
  //   return this.http.post(this.loginUrl, data);
  // }
}
