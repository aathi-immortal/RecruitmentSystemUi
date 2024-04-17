import { Component } from '@angular/core';
import { AuthserviceService } from '../services/auth/authservice.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  
  imageUrl: string = "https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg";
  
  pdfUrl: string = "";

  constructor(public auth: AuthserviceService) {}

  ngOnInit() {
    this.auth.getImage().subscribe(
      (data: Blob) => {
        const blobUrl = URL.createObjectURL(data);
        this.pdfUrl = blobUrl;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
