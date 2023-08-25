import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public login(username: string, password: string): boolean {
    // Implement your authentication logic here.
    // You can check against an API or a mock user data source.
    if (username === '@orbitdatascience' && password === 'psswd@123') {
      // Successful login
      return true;
    }
    return false;
  }
}
