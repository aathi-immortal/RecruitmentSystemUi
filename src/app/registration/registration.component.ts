import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';

import { Router } from '@angular/router';
import { ModelsService, User } from '../model/models.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

constructor(private auth:AuthserviceService,private router:Router,public models:ModelsService)
{

}

  

  registration()
  {
    // console.log("userName :" + this.user.userName);
    // console.log("email :" + this.user.userEmail);
    // console.log("password :" + this.user.password);
    this.auth.register(this.models.user.userName,this.models.user.userEmail,this.models.user.password)
    .subscribe({
      next:data=>
      {
        console.log(data.message);
        this.validate(data);
        
       
        
      }
    })
  }
  validate(data: User) {
    if(data.message == "success"){
      this.auth.setToken();
      this.router.navigate(["/dashboard"]);
    }
    else if(data.message == "user already registred")
    {
      this.router.navigate(["/login"]);
    }
      
  }
}


