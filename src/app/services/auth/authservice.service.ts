import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Job, User } from 'src/app/model/models.service';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  removeJob(jobId:number) {
    
    return this.http.post("http://localhost:8080/removeJob",jobId);
  }




  getJobs() {
    const userIdString:string |null =  sessionStorage.getItem("user_id");
    var id:number = 0;
    if (userIdString !== null) {
      id = parseInt(userIdString);
    } else {
     
    }
    
    return this.http.post<Job[]>("http://localhost:8080/getJob",id);
  }
  




  

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
    
    return this.http.post<User>("http://localhost:8080/login",{id:"",userName:name,email,password,message:""})
  }
  logout()
  {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
  }
  register(name:string,email:string,password:string)
  {
    
      return this.http.post<User>("http://localhost:8080/registration",{id:"",userName:name,email,password,message:""});
  }


  isAdmin(): any {
    
    
      return sessionStorage.getItem("admin") == "true";
  }

  
  addJob(job:Job) {
    const userIdString:string |null =  sessionStorage.getItem("user_id");
    if (userIdString !== null) {
      job.user_id = parseInt(userIdString);
    } else {
     
    }
     
      
    return this.http.post<any>("http://localhost:8080/addJob",{
      "jobId": 1,
      "jobName": job.jobName,
      "jobSalary": job.jobSalary,
      "yearOfSkill": job.yearOfSkill,
      "skill": job.skill,
      "noticePeriod": job.noticePeriod,
      "userId": job.user_id
    });
    
  }

}
