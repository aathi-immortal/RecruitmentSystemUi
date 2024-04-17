import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  constructor(public http:HttpClient,public auth:AuthserviceService )
  {

  }
   selectedFile:any;
onUpload() {
 this.auth.upload(this.selectedFile).subscribe(
    res => {
      console.log(res);
      alert('File uploaded successfully');
    },
    err => {
      console.error(err);
      alert('Failed to upload file');
    }
  );
}
onFileSelected(event: Event) {
  const inputElement = event.target as HTMLInputElement;
       if (inputElement.files && inputElement.files.length > 0) {
           this.selectedFile = inputElement.files[0];
       }
}

}
