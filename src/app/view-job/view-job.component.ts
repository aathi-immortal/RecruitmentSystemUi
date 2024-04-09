import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';
import { Job, ModelsService } from '../model/models.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent {


   jobList:Job[] = [];
thi: any;
  ngOnInit()
  {
      this.getJob();
  }
  constructor(public auth:AuthserviceService,public model:ModelsService)
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
  removeJob(jobId: number) {
    this.auth.removeJob(jobId).subscribe(
      {
        next:data =>
          {

          }
      }
    )
    
  }
  
}
