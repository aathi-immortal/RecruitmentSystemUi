import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

import {HttpClientModule} from '@angular/common/http';
import { AddJobComponent } from './add-job/add-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { AppliedUsersComponent } from './applied-users/applied-users.component';
import { ResumeComponent } from './resume/resume.component'
const routes:Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"home",component:HomeComponent},
  {path:"addjob",component:AddJobComponent},
  {path:"viewjob",component:ViewJobComponent},
  {path:"updateprofile",component:UpdateProfileComponent},
  {path:"viewjob",component:ViewJobComponent},
  {path:"registerJob",component:AppliedJobsComponent},
  {path:"viewRegUsers/:jobId",component:AppliedUsersComponent},
  {path:"resumeView",component:ResumeComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    RegistrationComponent,
    AddJobComponent,
    ViewJobComponent,
    UpdateProfileComponent,
    AppliedJobsComponent,
    AppliedUsersComponent,
    ResumeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
