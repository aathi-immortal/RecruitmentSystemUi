import { Component } from '@angular/core';
import { AbstartUser } from '../model/models.service';
import { AuthserviceService } from '../services/auth/authservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applied-users',
  templateUrl: './applied-users.component.html',
  styleUrls: ['./applied-users.component.css']
})
export class AppliedUsersComponent {

  constructor(public auth:AuthserviceService,public router:ActivatedRoute)
  {

  }

  userList:AbstartUser[] = []
  jobId:number = 0;
  ngOnInit()
  {
      this.router.params.subscribe(params =>
        {
          this.jobId = +params["jobId"];
        }
      )
      this.viewRegisteredUser(this.jobId);

   }




  viewRegisteredUser(jobId:number) {

    return this.auth.getRegisteredUsers(jobId).subscribe({
      next:data =>
        {
          console.log(data);
          
            this.userList = data;
        }
    })
  
}
}
