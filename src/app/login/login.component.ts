import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth:AuthserviceService)
  {

  }
  user:User = 
  {
    userName: "",
    userEmail:" ",
    password:"",

  }

  login()
  {
    console.log("login");
    
      console.log("userName :" + this.user.userName);
      console.log("email :" + this.user.userEmail);
      console.log("password :" + this.user.password);
      this.auth.login();
      
  }

  registration()
  {
    console.log("registation");
    
    console.log("userName :" + this.user.userName);
    console.log("email :" + this.user.userEmail);
    console.log("password :" + this.user.password);
  }
  
}

interface User
{
  userName:string;
  userEmail:string;
  password:string,
    
  
}
