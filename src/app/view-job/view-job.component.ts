import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';
import { AbstartUser, Job, ModelsService } from '../model/models.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent {


   jobList:Job[] = [];
   userList:AbstartUser[] = [];
  ngOnInit()
  {
      this.getJob();
  }
  constructor(public auth:AuthserviceService,public model:ModelsService,public router:Router)
  {
      
  }
  getJob()
  {
    this.auth.getJobs().subscribe({
      next:data =>
        {
              console.log(data.length);
              this.jobList = data;
        }
    }
      
    )
  } 
  
  viewJob(jobId: number) {
    this.router.navigate(["viewRegUsers",jobId]);
}
  removeJob(jobId: number) {
    
    this.auth.removeJob(jobId).subscribe(
      {
        next:data =>
          {
            this.getJob();
          }
      }
    )
    
  }

  jobApply(jobId: number) {
    
    this.auth.jobApply(jobId).subscribe(
      {
        next:data =>
          {
            this.getJob();            
          }
      }
    )
  
  } 

  
  
  }


    
  

