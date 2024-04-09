import { Component } from '@angular/core';
import { Job } from '../model/models.service';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {


  constructor(private auth:AuthserviceService)
  {

  }


  job:Job ={
    jobId: 0,
    jobName: '',
    jobSalary: 0,
    yearOfSkill: 0,
    skill: '',
    noticePeriod: '',
    user_id: 0
  }

  addJob()
  {
          
          
      this.auth.addJob(this.job).subscribe(
        {
          next:data=>
            {
              console.log(data);
              
            }
        }
      )
      
  }

}
