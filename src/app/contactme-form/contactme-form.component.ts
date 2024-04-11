import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators, NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ContactModel } from '../contact-model';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contactme-form',
  templateUrl: './contactme-form.component.html',
  styleUrls: ['./contactme-form.component.css']
})
export class ContactmeFormComponent implements OnInit {

  FormData: UntypedFormGroup;
  constructor(private builder: UntypedFormBuilder, private contact: ContactService, private recaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new UntypedFormControl('', [Validators.required]),
      // email: new UntypedFormControl('', [Validators.compose([Validators.required, Validators.email])]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      message: new UntypedFormControl('', [Validators.required])
    })
  }

  onSubmit(FormData: ContactModel) {

    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => {
        // console.log (FormData, token);

        this.contact.PostMessage(FormData).subscribe(response => {
          // console.log(response);
        }, error => {
          // console.warn(error.responseText);
          // console.log({ error });
        })
      },
      (error) => {
        console.log(`Recaptcha v3 error:`, error);
      }
    );
  }
}
