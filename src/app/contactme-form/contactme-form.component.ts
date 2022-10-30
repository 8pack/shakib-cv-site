import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-contactme-form',
  templateUrl: './contactme-form.component.html',
  styleUrls: ['./contactme-form.component.css']
})
export class ContactmeFormComponent implements OnInit {

  FormData: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      // Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    })
  }
}
