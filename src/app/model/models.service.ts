import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor() { }


  job:Job=
  {
    jobId: 0,
    jobName: '',
    jobSalary: 0,
    yearOfSkill: 0,
    skill: '',
    noticePeriod: '',
    user_id: 0
  }


  user :User= 
  {
    userName: "",
    userEmail: " ",
    password: "",
    message: "",
    isCompany: "",
    id: 0
  }
  
}
export interface User
{
  id:number,
  userName:string;
  userEmail:string;
  password:string,
  message:string,
  isCompany:string
}
export interface Job
{
  user_id:number,
  jobId:number,
  jobName:string,
  jobSalary:number,
  yearOfSkill:number
  skill:string,
  noticePeriod:string
}