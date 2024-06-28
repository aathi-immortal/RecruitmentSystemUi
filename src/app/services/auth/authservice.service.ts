import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AbstartUser, Job, User } from 'src/app/model/models.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  sendEmail(email: string, dummyUrl: string): Observable<any> {
    const url = `https://netclubapi.azurewebsites.net/api/League/InvitePlayer?email=${encodeURIComponent(email)}&url=${encodeURIComponent(dummyUrl)}`;
    return this.http.get(url);
  }


  getImage(): Observable<Blob> {
    
    const url = `https://recruitmentsystemapi.azurewebsites.net/getResume?userId=${this.getUserId()}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError((error: any) => {
        console.error(error);
        return throwError('Failed to fetch image');
      })
    );
  }
  upload(file:any) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', this.getUserId().toString());
    return this.http.post<any>('https://recruitmentsystemapi.azurewebsites.net/upload', formData);
  }
  getRegisteredUsers(jobId: number) {
    return this.http.post<AbstartUser[]>("https://recruitmentsystemapi.azurewebsites.net/getRegisteredUsers",jobId);
  }
  getRegisteredJobs() {
    return this.http.post<Job[]>("https://recruitmentsystemapi.azurewebsites.net/getMyJobs",this.getUserId());
  }
  jobApply(jobId: number) {
      return this.http.post("https://recruitmentsystemapi.azurewebsites.net/applyJob",{ user_id:this.getUserId(),job_id:jobId});
  }
  removeJob(jobId:number) {
    
    return this.http.post("https://recruitmentsystemapi.azurewebsites.net/removeJob",jobId);
  }


getUserId():number
{
  const userIdString:string |null =  sessionStorage.getItem("user_id");
  var id:number = 0;
  if (userIdString !== null) {
    id = parseInt(userIdString);
  } else {
   
  }
  return id;
}

  getJobs() {
    
    if(this.isAdmin())
      return this.http.post<Job[]>("https://recruitmentsystemapi.azurewebsites.net/getJob",this.getUserId());
    return this.http.post<Job[]>("https://recruitmentsystemapi.azurewebsites.net/getAllJobs",this.getUserId());
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
    
    return this.http.post<User>("https://recruitmentsystemapi.azurewebsites.net/login",{id:"",userName:name,email,password,message:""})
  }
  logout()
  {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
  }
  register(name:string,email:string,password:string)
  {
    
      return this.http.post<User>("https://recruitmentsystemapi.azurewebsites.net/registration",{id:"",userName:name,email,password,message:""});
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
     
      
    return this.http.post<any>("https://recruitmentsystemapi.azurewebsites.net/addJob",{
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
