import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ModelsService, User } from '../model/models.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth:AuthserviceService,public models:ModelsService,private router:Router)
  {

  }
  
  validate(data: User) {
    if(data.message == "success")
    {
      sessionStorage.setItem("token","token");
      this.router.navigate(["/dashboard"]);
    }
    
  }
  
  login()
  {
    
    
      
      this.auth.login(this.models.user.userName,this.models.user.userEmail,this.models.user.password)
      .subscribe(
        {
          next:data=>
          {
            console.log(data);
            
              this.validate(data);
          }
        }
      );
      
  }

  
}


