import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  data: any;
  Submitted(form) {
    console.log("form", form);
    this.data = {
      service_id: 'service_37wvn5p',
      template_id: 'template_91p280c',
      user_id: 'user_XQOW3rtNdpKuRx3EhiTpt',
      template_params: {
        from: form.controls.name.value,
        to: "FirstClickDigital",
        email: form.controls.email.value,
        message: form.controls.message.value,
        contact: form.controls.contact.value,
        city: form.controls.city.value
      }
    };

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', this.data, { responseType: 'text' })
      .subscribe((result) => {
        alert('Your message has been sent!');
      }, (error: HttpErrorResponse) => {
        alert('Oops... ' + error.message);
      }
      );

    form.reset();
  }







}
