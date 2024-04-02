import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/models.service';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  

  constructor(private router:Router,private http:HttpClient) { }



  setToken() {
    sessionStorage.setItem("token","login");
  }
  isAuthenticated():boolean
  {
    if(sessionStorage.getItem("token") == null)
    {
      return false;
    }
    return true;
  }

  canAccess():void
  {
    if(!this.isAuthenticated())
    {
        this.router.navigate(["/login"]);
    }
  }
  login(name:string,email:string,password:string)
  {
    
    return this.http.post<User>("http://localhost:8080/registration",{id:"",userName:name,email,password,message:""})
  }
  logout()
  {
    sessionStorage.removeItem("token");
  }
  register(name:string,email:string,password:string)
  {
    
      return this.http.post<User>("http://localhost:8080/registration",{id:"",userName:name,email,password,message:""});
  }
}
