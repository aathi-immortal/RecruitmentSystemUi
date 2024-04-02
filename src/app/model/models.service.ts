import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor() { }

  user :User= 
  {
    userName: "",
    userEmail:" ",
    password:"",
    message:"",
    isCompany:""
  }
}
export interface User
{
  userName:string;
  userEmail:string;
  password:string,
  message:string,
  isCompany:string
}