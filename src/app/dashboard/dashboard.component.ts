import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor(private auth:AuthserviceService)
  {

  }
  ngOnInit()
  {
      // this.auth.canAccess();
  }


  
}
