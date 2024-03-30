import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  isAuthenticated():boolean
  {
    if(sessionStorage.getItem("token") == null)
    {
      return false;
    }
    return true;
  }
  login()
  {
    sessionStorage.setItem("token","login");
  }
  logout()
  {
    sessionStorage.removeItem("token");
  }
}
