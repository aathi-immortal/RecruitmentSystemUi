import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(public auth:AuthserviceService)
  {

  }
  
  
  
}
