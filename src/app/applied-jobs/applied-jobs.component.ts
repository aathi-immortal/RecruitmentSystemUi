import { Component } from '@angular/core';
import { Job } from '../model/models.service';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent {

  constructor(public auth:AuthserviceService)
  {
  }
  jobList:Job[] = [];
  
  ngOnInit()
  {
      this.getMyJob();
  }
  getMyJob() {
    
    this.auth.getRegisteredJobs().subscribe({
      next:data =>
        {
              
              this.jobList = data;
        }
    }
      
    )
  }
}

  